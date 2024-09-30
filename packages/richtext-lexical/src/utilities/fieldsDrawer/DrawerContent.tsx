'use client'
import type { ClientField, FormState } from 'payload'

import {
  Form,
  FormSubmit,
  RenderFields,
  useAuth,
  useDocumentInfo,
  useFieldProps,
  useServerActions,
  useTranslation,
} from '@payloadcms/ui'
import React, { useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import type { FieldsDrawerProps } from './Drawer.js'

import { useEditorConfigContext } from '../../lexical/config/client/EditorConfigProvider.js'

export const DrawerContent: React.FC<Omit<FieldsDrawerProps, 'drawerSlug' | 'drawerTitle'>> = ({
  data,
  featureKey,
  fieldMapOverride,
  handleDrawerSubmit,
  schemaFieldsPathOverride,
  schemaPathSuffix,
}) => {
  const { i18n, t } = useTranslation()
  const { id } = useDocumentInfo()
  const { schemaPath } = useFieldProps()
  const { user } = useAuth()

  const [initialState, setInitialState] = useState<false | FormState>(false)

  const {
    field: { richTextComponentMap },
  } = useEditorConfigContext()

  const { payloadServerAction } = useServerActions()

  const componentMapRenderedFieldsPath = `lexical_internal_feature.${featureKey}.fields${schemaPathSuffix ? `.${schemaPathSuffix}` : ''}`
  const schemaFieldsPath =
    schemaFieldsPathOverride ??
    `${schemaPath}.lexical_internal_feature.${featureKey}${schemaPathSuffix ? `.${schemaPathSuffix}` : ''}`

  const fields: any =
    fieldMapOverride ?? (richTextComponentMap?.get(componentMapRenderedFieldsPath) as ClientField[]) // Field Schema

  useEffect(() => {
    const awaitInitialState = async () => {
      const { state } = (await payloadServerAction({
        action: 'form-state',
        args: {
          id: id!,
          data: data ?? {},
          language: i18n.language,
          operation: 'update',
          schemaPath: schemaFieldsPath,
          user,
        },
      })) as { state: FormState } // TODO: infer the return type

      setInitialState(state)
    }

    void awaitInitialState()
  }, [schemaFieldsPath, id, data, payloadServerAction, user, i18n])

  const onChange = useCallback(
    async ({ formState: prevFormState }) => {
      const { state } = (await payloadServerAction({
        action: 'form-state',
        args: {
          id: id!,
          formState: prevFormState,
          language: i18n.language,
          operation: 'update',
          schemaPath: schemaFieldsPath,
          user,
        },
      })) as { state: FormState } // TODO: infer the return type

      return state
    },

    [schemaFieldsPath, id, payloadServerAction, user, i18n],
  )

  if (initialState === false) {
    return null
  }

  return (
    <Form
      beforeSubmit={[onChange]}
      disableValidationOnSubmit
      fields={Array.isArray(fields) ? fields : []}
      initialState={initialState}
      onChange={[onChange]}
      onSubmit={handleDrawerSubmit}
      uuid={uuid()}
    >
      <RenderFields
        fields={Array.isArray(fields) ? fields : []}
        forceRender
        path="" // See Blocks feature path for details as for why this is empty
        readOnly={false}
        schemaPath={schemaFieldsPath}
      />

      <FormSubmit>{t('fields:saveChanges')}</FormSubmit>
    </Form>
  )
}
