# Prisma + Node JS setup future reference
##  Step-1 Initialize empty git repository 
```
npm init -y
```
***
#### Development dependencies are saved with --save-dev

##  Step-2 Prisma is built in with typesafety so we need typescript 

```
npm i --save-dev prisma typescript ts-node @types/node nodemon 
```
***

## Step-3 Create a tsconfig.json file

```
touch tsconfig.json
```

***

## Step-4 Initialize TypeScript it basically do step-3 creates tsconfig.json :
```
npx tsc --init
```
***

## Step-5 Invoke the Prisma CLI by prefixing it with npx 

```
npx prisma
```
---

```
Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

Usage

  $ prisma [command]

Commands

            init   Set up Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
        validate   Validate your Prisma schema
          format   Format your Prisma schema
         version   Displays Prisma version info
           debug   Displays Prisma debug info

Flags

     --preview-feature   Run Preview Prisma commands
     --help, -h          Show additional information about a command

Examples

  Set up a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push

  Validate your Prisma schema
  $ prisma validate

  Format your Prisma schema
  $ prisma format

  Display Prisma version info
  $ prisma version

  Display Prisma debug info
  $ prisma debug
```


***

## Step-6 Set up Prisma for your app ,create.env and prisma.schema file

```
 npx prisma init 

  or can write

npx prisma init --datasource-provider postgresql

To be specific about database we are using by default it takes postgresql 
```

***

## Step-7 make model in schema.prisma

```
model User {
  id   Int    @id @default(autoincrement())
  name String
}
```
***
## Step-8- Apply changes to databse or migrate it to db

```
npx prisma migrate [name or commit /dev] --name [init/initialising db]

npx prisma migrate dev --name init 

* This generate migration file in which have sql and it interact with client
client file interact with db 
```
***
## Step-8- Create prisma client in nodemodule/client

```
npm install @prisma/client
         or 
npx prisma generate
```
---
```
Whenever you update your Prisma schema, you will have to update your database schema using either [prisma migrate dev ]or [prisma db push]
```
***
## Step-9 Now Create starting file of backend index.js and start using client 

```
touch index.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

```


```
Other 
there are other type oblock generators and enum 
@@id([title, authorId])
 @@unique([name, age])
  @@index([email])
```
*** 
---
## Schema
## After updating schema we need to migrate it 
```
npx prisma migrate dev
npx prisma generate 
```

