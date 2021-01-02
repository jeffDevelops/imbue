import addons from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: themes.dark, // Dark theme as default on page load
  showAddonPanel: false,
})
