let express = require('express')

let app = express()

const userRouter = require("./router/user")
const productRouter = require("./router/product")

const bookRouter = require("./router/book")
app.use(express.json()) // Middleware to parse JSON request bodies

app.use((req, res,next) => {
    console.log(`Loggin middleware is used -> method is ${req.method}. reqest is ${req.url}`)
    next()
})

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/book",bookRouter)




// this is used for not existing routes
app.use((req, res,next) => {
res.status(404).send("<h1>404 page not found</h1>")
})



app.listen(3000, () => {
    console.log('Server is up and running on port 3000! Ready to handle requests.')
})