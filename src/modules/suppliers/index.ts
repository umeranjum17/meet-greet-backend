import { Router } from 'express'
import AuthValidator from '../../middlewares/AuthValidator'

import {
  getNearbySuppliersController,
  nearbySuppliersSchema
} from './features/inviteNearbySuppliers'

const Routes = Router({ mergeParams: true })

// Used Post Instead of GET as the filters for nearbySuppliers requires a set of keys to be always sent from the UI/UX
Routes.post(
  '/nearbySuppliers',
  AuthValidator.validate(),
  nearbySuppliersSchema,
  getNearbySuppliersController.handle
)
export default Routes
