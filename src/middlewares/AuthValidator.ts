import { NextFunction, Request, Response } from 'express'

export type MiddlewareFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void

export default class AuthValidator {
  static validate(): MiddlewareFunction {
    return (req, res, next) => {
      // for futrue implementation.
      next()
    }
  }
}
