import { Supplier } from '../entities/Supplier'

export interface ISupplierRepository {
  getSuppliers(): Supplier[]
}
