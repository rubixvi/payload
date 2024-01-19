import type { Locale, SanitizedConfig, SanitizedLocalizationConfig } from 'payload/config'
import { FormState } from '../Form/types'
import { User } from 'payload/auth'
import { I18n } from '@payloadcms/translations'
import { Payload } from 'payload'
import { DocumentPreferences } from 'payload/types'

export const fieldBaseClass = 'field-type'

export type FormFieldBase = {
  formState?: FormState
  path?: string
  valid?: boolean
  errorMessage?: string
  user?: User
  i18n?: I18n
  payload?: Payload
  docPreferences?: DocumentPreferences
  locale?: Locale
  config?: SanitizedConfig
}

/**
 * Determines whether a field should be displayed as right-to-left (RTL) based on its configuration, payload's localization configuration and the adming user's currently enabled locale.

 * @returns Whether the field should be displayed as RTL.
 */
export function isFieldRTL({
  fieldLocalized,
  fieldRTL,
  locale,
  localizationConfig,
}: {
  fieldLocalized: boolean
  fieldRTL: boolean
  locale: Locale
  localizationConfig?: SanitizedLocalizationConfig
}) {
  const hasMultipleLocales =
    locale &&
    localizationConfig &&
    localizationConfig.locales &&
    localizationConfig.locales.length > 1
  const isCurrentLocaleDefaultLocale = locale?.code === localizationConfig?.defaultLocale

  return (
    (fieldRTL !== false &&
      locale?.rtl === true &&
      (fieldLocalized ||
        (!fieldLocalized && !hasMultipleLocales) || // If there is only one locale which is also rtl, that field is rtl too
        (!fieldLocalized && isCurrentLocaleDefaultLocale))) || // If the current locale is the default locale, but the field is not localized, that field is rtl too
    fieldRTL === true
  ) // If fieldRTL is true. This should be useful for when no localization is set at all in the payload config, but you still want fields to be rtl.
}
