'use client'

import type { FormProps } from '@payloadcms/ui'
import type { FormState } from 'payload'

import {
  Drawer,
  Form,
  FormSubmit,
  RenderFields,
  useAuth,
  useDocumentInfo,
  useEditDepth,
  useFieldProps,
  useHotkey,
  useServerActions,
  useTranslation,
} from '@payloadcms/ui'
import React, { useCallback, useRef } from 'react'

import type { Props } from './types.js'

import { linkFieldsSchemaPath } from '../shared.js'
import './index.scss'

const baseClass = 'rich-text-link-edit-modal'

export const LinkDrawer: React.FC<Props> = ({
  drawerSlug,
  fields,
  handleModalSubmit,
  initialState,
}) => {
  const { i18n, t } = useTranslation()
  const { schemaPath } = useFieldProps()
  const fieldMapPath = `${schemaPath}.${linkFieldsSchemaPath}`
  const { id } = useDocumentInfo()

  const { user } = useAuth()

  const { payloadServerAction } = useServerActions()

  const onChange: FormProps['onChange'][0] = useCallback(
    async ({ formState: prevFormState }) => {
      const { state } = (await payloadServerAction({
        action: 'form-state',
        args: {
          id,
          formState: prevFormState,
          language: i18n.language,
          operation: 'update',
          schemaPath: fieldMapPath,
          user,
        },
      })) as { state: FormState } // TODO: infer the return type

      return state
    },

    [fieldMapPath, id, payloadServerAction, user, i18n],
  )

  return (
    <Drawer className={baseClass} slug={drawerSlug} title={t('fields:editLink')}>
      <Form
        beforeSubmit={[onChange]}
        disableValidationOnSubmit
        initialState={initialState}
        onChange={[onChange]}
        onSubmit={handleModalSubmit}
      >
        <RenderFields fields={fields} forceRender path="" readOnly={false} schemaPath="" />
        <LinkSubmit />
      </Form>
    </Drawer>
  )
}

const LinkSubmit: React.FC = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLButtonElement>(null)
  const editDepth = useEditDepth()

  useHotkey({ cmdCtrlKey: true, editDepth, keyCodes: ['s'] }, (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (ref?.current) {
      ref.current.click()
    }
  })

  return <FormSubmit ref={ref}>{t('general:submit')}</FormSubmit>
}
