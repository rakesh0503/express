const exprees = require("express")
const app = exprees();

app.use(exprees.static("public"))
app.use(exprees.urlencoded({extended : true}))

app.get('/', (req, res) => {
    
    res.send('RUNNING ON 1505');
})

const userRouter = require('./routes/user')
const collegeRoutes = require('./routes/college')
app.use('/users', userRouter)
app.use('/college',collegeRoutes)
app.listen(1505) 