import { Router } from 'express'

import supplier from './modules/suppliers'

const Routes = Router({ mergeParams: true })

// add supplier routes with prefix path
Routes.use('/supplier', supplier)

export { Routes }
