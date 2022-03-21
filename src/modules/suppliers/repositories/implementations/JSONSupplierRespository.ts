import { ISupplierRepository } from '../ISupplierRepository'
import { Supplier } from '../../entities/Supplier'
import Suppliers from '../../../../constants/suppliers'

export class JSONSupplierRepository implements ISupplierRepository {
  private suppliers: Supplier[] = []
  constructor() {
    this.suppliers = Suppliers
  }

  getSuppliers(): Supplier[] {
    return this.suppliers
  }
}
