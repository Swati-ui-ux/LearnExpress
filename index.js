let express = require('express')

let app = express()


app.use(express.json()) // Middleware to parse JSON request bodies
// route for all page that not exists
app.use((req, res,next) => {
res.status(404).send("<h1>404 page not found</h1>")
})
// app.get("*", (req, res) => {
//  res.send("<h1>404 page not found</h1>")
// })

// let users = [{ name: 'Vishal', age: 25 }, { name: 'Swati', age: 24 }]

// let orders = [
//     { orderId: 1, item: 'Laptop', quantity: 1 }, { orderId: 2, item: 'Phone', quantity: 2 },
//     { orderId: 3, item: 'Headphones', quantity: 1 }, { orderId: 4, item: 'Monitor', quantity: 2 }
// ]

// app.get("/orders", (req, res) => {
//     res.send("Here is the list of orders")
// //   res.json(orders)
// })
// app.post("/orders", (req, res) => {
//     // const order = req.body
//     // orders.push(order)
//     // res.status(201).json({ message: "order created", order })
//     res.send("A new order has been created.")
    
// })
// app.get('/users', (req, res) => {
//     res.send("Here is the list of users")
//     // res.json(users)
// })

// app.post("/users", (req, res) => {
//     // const user = req.body
//     // users.push(user)
//     // res.status(202).json({message:"user created successfully",user})
//     res.send("A new user has been added.")

// })






app.get("/products", (req, res) => {
    res.send("Here is the list of products")
})

app.post("/products", (req, res) => {
    res.send("A new product has been added.")
})  
app.get("/categories", (req, res) => {
    res.send("Here is the list of categories")
})

app.post("/categories", (req, res) => {
    res.send("A new category has been created")
})  














app.listen(3000, () => {
    console.log('Server is up and running on port 3000! Ready to handle requests.')
})