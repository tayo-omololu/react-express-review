const router = require('express').Router();
const controller = require('./controller.js')

router
.route('/')
.get(controller.get)
.post(controller.post)

router
.route('/:index')
.delete(controller.delete)
// .update(controller.update)

module.exports = router;


