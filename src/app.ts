import * as express from 'express'
import * as cors from 'cors'
import * as compression from 'compression'
import helmet from 'helmet'

import { BODY_LIMIT } from './Environment'
import { Routes } from './routes'

const app = express()

app.disable('x-powered-by')

app.use(helmet())
app.use(cors())
app.use(compression())
app.use(
  express.json({
    limit: BODY_LIMIT
  })
)

app.get(['/', '/status'], (req, res) => {
  res.send('ok')
})

app.use(Routes)

app.all('*', (req, res) => {
  res.status(404).send({
    success: false,
    message: 'Not found.'
  })
})

export { app }
