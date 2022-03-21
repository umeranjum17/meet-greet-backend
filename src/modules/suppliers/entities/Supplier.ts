import { Office } from '../../office/entities/Office'
export class Supplier {
  public readonly id: number
  public urlName: string
  public organization: string
  public customerLocations: string
  public willWorkRemotely: boolean
  public website: string
  public services: string
  public offices: Office[]
  constructor(properties: Omit<Supplier, 'id'>, id?: number) {
    Object.assign(this, properties)
    if (!id) {
      // can be uuid or any other unique identifier to ensure integrity and avoid collision.
      this.id = Math.random() * 10000
    }
  }
}
