const express = require('express')
const router = express.Router()

const logger = (request, response, next) => {
    console.log(request.originalUrl)
    next()
}

router.use(logger)

router.get('/', (request, response) => {
    response.send('User list')
})

router.get('/new', (request, response) => {
    response.send('User New Form')
})

router.post('/', (request, response) => {
    response.send('Create User')
})

router.route('/:id')
    .get((request, response) => {
        response.send('Get User With ID ' + request.params.id)
    })
    .put((request, response) => {
        response.send('Get User With ID ' + request.params.id)
    })
    .delete((request, response) => {
        response.send('Get User With ID ' + request.params.id)
    })

const users = [{name: 'Kyle'}, {name: 'Sally'}]
router.param('id', (request, response, next, id) => {
    request.user = users[id]
    next()
})
// router.get('/:id', (request, response) => {
//     request.params.id
//     response.send('Get User With ID ' + request.params.id)
// })

// router.put('/:id', (request, response) => {
//     request.params.id
//     response.send('Get User With ID ' + request.params.id)
// })

// router.delete('/:id', (request, response) => {
//     request.params.id
//     response.send('Get User With ID ' + request.params.id)
// })


module.exports = router