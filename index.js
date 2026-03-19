let express = require('express')

let app = express()


app.use(express.json()) // Middleware to parse JSON request bodies



let users = [{ name: 'Vishal', age: 25 }, { name: 'Swati', age: 24 }]

let orders = [
    { orderId: 1, item: 'Laptop', quantity: 1 }, { orderId: 2, item: 'Phone', quantity: 2 },
    { orderId: 3, item: 'Headphones', quantity: 1 }, { orderId: 4, item: 'Monitor', quantity: 2 }
]

app.get("/orders", (req, res) => {
    res.send("Here is the list of orders")
//   res.json(orders)
})
app.post("/orders", (req, res) => {
    // const order = req.body
    // orders.push(order)
    // res.status(201).json({ message: "order created", order })
    res.send("A new order has been created.")
    
})
app.get('/users', (req, res) => {
    res.send("Here is the list of users")   
    // res.json(users)
})      

app.post("/users", (req, res) => {
    // const user = req.body
    // users.push(user)
    // res.status(202).json({message:"user created successfully",user})
    res.send("A new user has been added.")   

})
app.listen(3000, () => {
    console.log('Server is up and running on port 3000! Ready to handle requests.')
})