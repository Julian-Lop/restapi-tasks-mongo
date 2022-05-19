import express from 'express'
import TasksRoutes from './routes/tasksroutes'

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req,res)=>{
    res.status(200)
    res.json({message:'welcome'})
})

app.use('/api/tasks',TasksRoutes)

export default app