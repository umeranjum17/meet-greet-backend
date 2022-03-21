import { config } from 'dotenv'

config()

let path

switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`
    break
  case 'production':
    path = `${__dirname}/../../.env.production`
    break
  default:
    path = `${__dirname}/../../.env.development`
}

config({ path })

export const { BODY_LIMIT, PORT } = process.env
