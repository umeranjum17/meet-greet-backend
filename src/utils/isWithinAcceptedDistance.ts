import customErrors from '../constants/customErrors'
import { Office } from '../modules/office/entities/Office'
import ArgsCalculateDistance from '../types/ArgCalculateDistance'
import NearbySupplierResponseObject from '../modules/suppliers/types/NearbySupplierResponseObject'
import calculateDistanceBetweenTwoPoints from './calculateDistanceBetweenTwoPoints'

const isWithinAcceptedDistance = (
  args: ArgsCalculateDistance
): NearbySupplierResponseObject | null => {
  const { coordinates: searchCoordinates, supplier, distance } = args
  const { offices } = supplier

  const results = {}

  if (!offices.length) return null
  try {
    offices.forEach((office: Office) => {
      const [supplierLat, supplierLong] = office.coordinates.split(',')
      const calculatedDistance = calculateDistanceBetweenTwoPoints(
        +supplierLat,
        +supplierLong,
        searchCoordinates.latitude,
        searchCoordinates.longitude
      )
      if (distance >= calculatedDistance) {
        Array.isArray(results[supplier.organization])
          ? results[supplier.organization].push(office)
          : (results[supplier.organization] = [office])
      }
    })
    return results
  } catch (error) {
    throw new Error(customErrors.en.BREAKING_OFFICECALCULATION)
  }
}

export default isWithinAcceptedDistance
