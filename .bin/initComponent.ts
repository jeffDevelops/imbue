const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Sleep = require('sleep')
const { msleep: sleep } = Sleep

;(async () => {
  const componentName = process.argv[2]

  const typesTemplate = new Uint8Array(
    Buffer.from(`
    // Import the correct HTMLAttributes
    import { __HTMLAttributes } from 'react'
    
    export interface ${componentName}Props extends __HTMLAttributes<HTML__Element> {
      // ...properties
    }
    
    export interface Styled${componentName}Props extends ${componentName}Props {
      // ...properties
    }
    `),
  )

  const styledTemplate = new Uint8Array(
    Buffer.from(`
    import styled, { css } from 'styled-components'
    import { Theme } from '../../Theme/types'
    import { Styled${componentName}Props } from './types'

    export const styles = (p: { theme: Theme } & Styled${componentName}Props) => css\`\`
    
    export const Styled${componentName} = styled.__<{ theme: Theme } & Styled${componentName}Props>\`
      \${p => styles(p)}
    \`
  `),
  )

  const componentTemplate = new Uint8Array(
    Buffer.from(`
    import React, { FC } from 'react'
    import { ${componentName}Props } from './types'
    import { Styled${componentName} } from './styled'

    const ${componentName}: FC<${componentName}Props> = ({ ...props }: ${componentName}Props) => {
      return (
        <Styled${componentName} {...props} />
      )
    }

    export default ${componentName}

  `),
  )

  const barrel = new Uint8Array(
    Buffer.from(`
  import ${componentName} from './${componentName}'
  import { ${componentName}Props, Styled${componentName}Props } from './types'
  import { Styled${componentName}, styles } from './styled'

  export default ${componentName}
  export {
    ${componentName}Props,
    Styled${componentName}Props,
    Styled${componentName},
    styles
  }
  `),
  )

  const rootBarrel = new Uint8Array(
    Buffer.from(`
  import ${componentName} from './components/${componentName}'

  export default ${componentName}
  export * from './components/${componentName}'
  `),
  )

  const themeTemplate = new Uint8Array(
    Buffer.from(`
  export interface ${componentName}Theme {
    
  }

  export const ${componentName.toLowerCase()}ThemeLight: ${componentName}Theme = {
    // ...light theme props
  }

  export const ${componentName.toLowerCase()}ThemeDark: ${componentName}Theme = {
    // ...dark theme props
  }
    `),
  )

  console.log(
    chalk.magenta(
      `Scaffolding new Imbue component ${componentName}`,
    ),
  )

  sleep(1000)

  // Write the component directory
  fs.mkdirSync(
    path.join(
      __dirname,
      `../lib/components/${componentName}`,
    ),
  )

  console.log(
    chalk.magenta(
      `Done! ✅ Your component can be found in /lib/components`,
    ),
  )
  console.log(
    chalk.yellowBright(
      `Writing proptypes file. Be sure to extend the appropriate element attributes!`,
    ),
  )

  sleep(1000)

  // Write the types template
  fs.writeFileSync(
    `${path.join(
      __dirname,
      `../lib/components/${componentName}/types.ts`,
    )}`,
    typesTemplate,
  )
  console.log(chalk.yellowBright(`Done! ✅`))
  console.log(
    chalk.green(
      `Writing styled file. Be sure to export both the styles as a function and the styled-component that applies those styles.`,
    ),
  )

  sleep(1000)

  // Write the styled template
  fs.writeFileSync(
    `${path.join(
      __dirname,
      `../lib/components/${componentName}/styled.ts`,
    )}`,
    styledTemplate,
  )

  console.log(chalk.green(`Done! ✅`))
  console.log(
    chalk.greenBright(
      `Writing React component file! If appropriate, be sure to include \`ref\` as a prop, so consumers can useRef.`,
    ),
  )

  sleep(1000)

  // Write the component template
  fs.writeFileSync(
    `${path.join(
      __dirname,
      `../lib/components/${componentName}/${componentName}.tsx`,
    )}`,
    componentTemplate,
  )

  sleep(1000)

  console.log(chalk.greenBright(`Done! ✅`))
  console.log(chalk.greenBright(`Writing theme file.`))

  // Write the default theme objects
  fs.writeFileSync(
    `${path.join(
      __dirname,
      `..lib/components/${componentName}/theme.ts`,
    )}`,
    themeTemplate,
  )

  console.log(chalk.greenBright(`Done! ✅`))
  console.log(chalk.cyan(`Writing barrel file.`))

  // Write the barrel
  fs.writeFileSync(
    `${path.join(
      __dirname,
      `../lib/components/${componentName}/index.ts`,
    )}`,
    barrel,
  )

  sleep(1000)

  console.log(chalk.cyan(`Done! ✅`))
  console.log(
    chalk.blueBright(
      `Writing root directory barrel file (rollup entry point)...`,
    ),
  )

  // Write the root level barrel
  fs.writeFileSync(
    `${path.join(__dirname, `../lib/${componentName}.ts`)}`,
    rootBarrel,
  )

  sleep(1000)

  console.log(chalk.blueBright(`Done! ✅`))
  console.log(
    chalk.blue(`Adding ${componentName} to rollup.config`),
  )

  const file = fs.readFileSync(
    `${path.join(__dirname, `../rollup.config.js`)}`,
    { encoding: 'utf8' },
  )

  // Match the input object, so that the new component can be added
  const regex = /(?<=input: ){(.*)}(?=,\s*plugins)/s
  const match = file.match(regex)

  const obj = eval(`(${match[0]})`)
  obj[`${componentName}`] = `./lib/${componentName}.ts`

  fs.writeFileSync(
    `${path.join(__dirname, `../rollup.config.js`)}`,
    file.replace(regex, JSON.stringify(obj)),
  )

  sleep(1000)

  console.log(
    chalk.blue(
      `The library now exports ${componentName}. If you're running build:watch while symlinked to an external repository you'll need to extend the props interface with the correct __HTMLAttributes before it'll build again.`,
    ),
  )
})()
