// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from '@payloadcms/translations/languages/en'
import { de } from '@payloadcms/translations/languages/de'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Products],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],

   i18n: {
    fallbackLanguage: 'en', // default
    supportedLanguages: { en, de },
    translations: {
      en: {
        custom: {
          // namespace can be anything you want
          key1: 'Translation with {{variable}}', // translation
        },
        // override existing translation keys
        general: {
          dashboard: 'Home',
        },
      },
    },

  },
  localization: {
    locales: ['en', 'es', 'de'], // required
    defaultLocale: 'en', // required
  },
})
