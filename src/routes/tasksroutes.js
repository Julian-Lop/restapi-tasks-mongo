import {Router} from 'express'

const router = Router()

router.get('/', (req,res) => {
    res.status(200)
    res.send('tasks')
})

router.post('/', (req,res) => {
    res.status(201)
    return req.json('saving a task')
})

export default router