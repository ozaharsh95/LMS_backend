const express = require('express'),
    router = express.Router()

const service = require('../services/assignment.services')
const auth = require("../auth")

//http://localhost:7000/api/assignment/
router.get('/',auth, async (req, res) => {
    const employees = await service.getAllAssignments()
    res.send(employees)
})

//http://localhost:7000/api/assignment/1
router.get('/:id',auth, async (req, res) => {
    const employee = await service.getAssignmentById(req.params.id)
    if (employee == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(employee)
})

//http://localhost:7000/api/assignment/2
router.delete('/:id',auth, async (req, res) => {
    const affectedRows = await service.deleteAssignment(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

//http://localhost:7000/api/assignment/
router.post('/',auth, async (req, res) => {
    await service.insertAssignment(req.body)
    res.status(201).send('created successfully.')
})


//http://localhost:7000/api/assignment/
router.put('/:id',auth, async (req, res) => {
    const affectedRows = await service.updateAssignment(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})



// const {sign} = require("jsonwebtoken")
// router.post('/login')


module.exports = router;