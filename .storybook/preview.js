import { themes } from '@storybook/theming'

// or global addParameters
// export const parameters = {
//   docs: {
//     theme: themes.dark,
//   },
// }

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
