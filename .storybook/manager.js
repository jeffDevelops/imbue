import addons from '@storybook/addons'
import { themes } from '@storybook/theming'
import theme from './Theme'

addons.setConfig({
  theme: theme,
  showAddonPanel: false,
})
