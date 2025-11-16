## Step by step if you want!

`pnpm init` to create package.json

`pnpm i typescript @types/node -D` to add typescript as dev dependency

`pnpm i tsx -D` to execute our typescript project without conversions

`npx tsc --init` to create tsconfig.json.

```code
 check the on tsconfig/bases website and copy and paste the tsconfig base based on your node version.
 ```

`pnpm add -D -E @biomejs/biome` to install the lint and format the code

`pnpm exec biome init` to create biome.json

`pnpm i tsup -D` to build our typescript to javascript language

`pnpm i vitest -D` to add support our tests with typescript without any extra configuration

`pnpm i zod fastify-type-provider-zod` to validate and transform and serialize data

`pnpm i fastify` to add a framework node

`pnpm i dotenv` to add a dotenv config

`pnpm i @fastify/cors @fastify/cookie @fastify/jwt` to manager the cors, cookies and jwt

`pnpm i @fastify/swagger @scalar/fastify-api-reference` to manager api doc

`pnpm i dayjs` to work with date and time (if necessary)

`pnpm i bcryptjs` to work crypt data

`pnpm i @types/bcryptjs -D` to add types

`pnpm i prisma -D` to work with prisma em environment dev

`pnpm i @prisma/client` to production

`pnpm i supertest @types/supertest -D` to work with request on tests
