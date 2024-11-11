import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import todoRouter from './routers/todoRouter.js'
import userRouter from './routers/userRouter.js'

import todoRouter2 from './routers/todoRouter2.js'
import userRouter2 from './routers/userRouter2.js'


dotenv.config()


const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', todoRouter2)
app.use('/user', userRouter2)
//app.use('/', todoRouter)
//app.use('/user', userRouter)
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({error: err.message})
})




app.listen(port)