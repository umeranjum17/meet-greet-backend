import { NextFunction, Request, Response } from 'express'
import { ObjectSchema, Schema } from 'joi'

export type MiddlewareFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void

export class RequestSchemaValidator {
  static validate(schema: ObjectSchema<Schema>): MiddlewareFunction {
    return (req, res, next) => {
      const data = ['body', 'params', 'query'].reduce((acc, key) => {
        return {
          [key]: req[key],
          ...acc
        }
      }, {})
      const validation = schema.unknown(true).validate(data)
      const { error } = validation

      if (!error) {
        next()
      } else {
        const { details } = error

        res.status(400).send({
          success: false,
          messages: details.map(({ message, path }) => ({
            message: message.replace(/["']/g, ''),
            path
          }))
        })
      }
    }
  }
}
