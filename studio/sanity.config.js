import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {deskStructure} from './components/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'soul-of-the-gypsy-studio',

  projectId: '5iens2lz',
  dataset: 'production',

  plugins: [deskTool({structure: deskStructure}), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
