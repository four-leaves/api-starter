import express, { Router } from 'express'
import { me } from './error.controllers'

const error = Router()

// error.on('mount', function (parent) {
//   console.log('Error Mounted', error.mountpath)
// })

error
  .route('/')
  .get(me)

export default error
