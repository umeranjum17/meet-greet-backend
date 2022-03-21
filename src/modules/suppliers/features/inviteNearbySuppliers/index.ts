import { JSONSupplierRepository } from '../../repositories/implementations/JSONSupplierRespository'
import { RequestSchemaValidator } from '../../../../middlewares/RequestSchemeValidator'
import { InviteNearbySuppliersController } from './InviteNearbySuppliersController'
import { InviteNearbySuppliersUseCase } from './InviteNearbySuppliersUseCase'
import { InviteNearbySuppliersSchema } from './InviteNearbySuppliersSchema'

const jsonSupplierRepository = new JSONSupplierRepository()

const inviteNearbySupplierUseCase = new InviteNearbySuppliersUseCase(
  jsonSupplierRepository
)
const nearbySuppliersSchema = RequestSchemaValidator.validate(
  InviteNearbySuppliersSchema
)
const getNearbySuppliersController = new InviteNearbySuppliersController(
  inviteNearbySupplierUseCase
)

export { nearbySuppliersSchema, getNearbySuppliersController }
