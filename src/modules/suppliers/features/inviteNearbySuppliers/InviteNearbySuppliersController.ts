import BaseController, {
  BaseRequest,
  BaseResponse
} from '../../../../core/BaseController'
import { InviteNearbySuppliersUseCase } from './InviteNearbySuppliersUseCase'

export class InviteNearbySuppliersController extends BaseController {
  constructor(
    private inviteNearbySuppliersUseCase: InviteNearbySuppliersUseCase
  ) {
    super()
  }

  handle = async (
    request: BaseRequest,
    response: BaseResponse
  ): Promise<void> => {
    console.log(request)
    const { body } = request
    const { distance, longitude, latitude } = body
    const coordinates = {
      longitude: +longitude,
      latitude: +latitude
    }

    try {
      const nearbySuppliers = this.inviteNearbySuppliersUseCase.execute({
        coordinates,
        distance
      })

      this.successJSON(response, nearbySuppliers)
    } catch (err) {
      console.log(err)
      this.jsonWithError(response, err.message || 'Unexpected error.')
    }
  }
}
