import { Supplier } from '../../entities/Supplier'
import Coordinates from '../../../../types/Coordinates'
import { JSONSupplierRepository } from '../../repositories/implementations/JSONSupplierRespository'
import isWithinAcceptedDistance from '../../../../utils/isWithinAcceptedDistance'
import customErrors from '../../../../constants/customErrors'
import NearbySupplierResponseObject from '../../types/NearbySupplierResponseObject'
import sortObjectByKey from '../../../../utils/sortObjectByKey'

const DEFAULT_DISTANCE = 100

export class InviteNearbySuppliersUseCase {
  constructor(private supplierRepository: JSONSupplierRepository) {}
  execute({
    coordinates,
    distance
  }: {
    coordinates: Coordinates
    distance: number
  }): NearbySupplierResponseObject {
    // get all suppliers
    const suppliers = this.supplierRepository.getSuppliers()

    // throw error if no suppliers
    if (!suppliers || suppliers.length === 0) {
      throw new Error(customErrors.en.NO_SUPPLIER_FOUND)
    }

    let nearbySuppliers = {}

    // iterate over all suppliers
    suppliers.forEach((supplier: Supplier) => {
      // check if supplier offices are within the distance given
      const supplierFoundNearby = isWithinAcceptedDistance({
        coordinates,
        distance: distance || DEFAULT_DISTANCE,
        supplier
      })

      // append into results
      if (Object.keys(supplierFoundNearby).length !== 0) {
        nearbySuppliers = { ...nearbySuppliers, ...supplierFoundNearby }
      }
    })

    // sort organisastions by alphabets
    return sortObjectByKey(nearbySuppliers)
  }
}
