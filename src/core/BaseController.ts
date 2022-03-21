/* eslint-disable @typescript-eslint/no-explicit-any */
// data returned can be anything to maximize reusabilty of the methods and abstact code from framework
import { Request, Response, Router } from 'express'
import HttpStatus from 'http-status-codes'

export type BaseRequest = Request
export type BaseResponse = Response

export default abstract class ExpressController {
  public router = Router()

  public successJSON(res: BaseResponse, data: any): void {
    res.status(HttpStatus.OK).json(data)
  }

  public jsonWithError(
    res: BaseResponse,
    message: string,
    data?: any,
    status = HttpStatus.INTERNAL_SERVER_ERROR
  ): void {
    const resp = {
      success: false,
      error: message,
      data
    }
    res.status(status).json(resp)
  }
}
