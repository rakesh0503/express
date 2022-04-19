const exprees = require("express")
const router = exprees.Router();

const student = require('../models/college')
// const teacher = require('../models/college').default
router.get("/", (req, res) => {

    // res.send(student);
    res.send(student)
})
router.post('/', (req, res) => {
    res.send("Create new members")
})

router.route('/:id')
    .get((req, res) => {
        // const id = parseInt(req.params.id);
        // console.log(id)
        // const filterData = data.find(x => x.id === id);
        res.send(filterData)
    })
    .put((req, res) => {
        // req.params.id
        reseq.send(`Update user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        // req.params.id
        res.send(`Delete user with id ${req.params.id}`)
    })

    module.exports = router;