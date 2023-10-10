import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'memories',

  projectId: '97u2fmo5',
  dataset: 'production',
  apiVersion: '2023-10-09',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
