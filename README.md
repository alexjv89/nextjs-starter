This is a starter-project that has the following installed
- tailwind css
- mui
- custom logs
- storybook
- 

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Logging
`/lib/logger.js` - has the scripts to run the logs. This script however needs to modify nextjs in order to log the requests correctly. 

- We are using `patch-package` to patch nextjs to suit our logging requirements

## Environment variables
`.env.local` - contains environment variables