import * as joi from 'joi'
// JOI Basic validations for validation of payload of the request
export const InviteNearbySuppliersSchema = joi.object({
  body: joi.object().keys({
    latitude: joi.number().min(-90).max(90).required(),
    longitude: joi.number().min(-180).max(180).required(),
    distance: joi.number().min(0).required()
  })
})
