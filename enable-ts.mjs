import {join} from 'node:path'
import {writeFileSync} from 'node:fs'
import {execSync} from 'node:child_process'

// -------------------------------------------------------------
// Config.
// -------------------------------------------------------------

const config = `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`

// -------------------------------------------------------------
// Script.
// -------------------------------------------------------------

try {
  console.info('Enabling TypeScript…')
  writeFileSync(join(process.cwd(), 'tsconfig.json'), config)
  execSync(
    'npm add --save-dev @types/node @types/react @types/react-dom @types/styled-components typescript'
  )
  console.info('TypeScript successfully configured for this project!')
} catch (e) {
  console.error('TypeScript configuration failed.')
  console.error(e)
}
