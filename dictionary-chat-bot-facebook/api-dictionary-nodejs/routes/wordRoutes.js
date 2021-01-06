const express = require('express')
const { route } = require('../app')
const dicController = require('./../controllers/dicController')

const router = express.Router()

router
  .route('/')
  .get(dicController.getAlldic)