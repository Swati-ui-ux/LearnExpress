let express = require('express')

let app = express()



app.use((req, res, next) => {
    console.log('This is a middleware function that runs for every request.')
    next() // Call the next middleware or route handler
})
app.use('/library2', (req, res, next) => {
    console.log('This middleware runs only for requests to the /library2 route.')
    next() // Call the next middleware or route handler
})

app.use('/library3', (req, res, next) => {
    console.log('This is another middleware for the /library3 route.')
    next() // Call the next middleware or route handler
})
app.use(express.json()) // Middleware to parse JSON request bodies
let users = [{ name: 'Vishal', age: 25 }, { name: 'Swati', age: 24 }]

app.get('/', (req, res) => {
    res.send(users)
})  
app.get('/welcome', (req, res) => {
    res.send('<h1>Welcome Guest</h1>')
}) 

app.post('/users', (req, res) => {
    const {name} = req.body
   
    const newUser = { id: users.length + 1, name }
    users.push(newUser)
    res.status(201).json({message: 'User created successfully', user: newUser})

})
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    if (!user) {
    return res.status(404).json({message:"user not found"})
    }
    res.json(user)
})
app.listen(3000, () => {
    console.log('Server is up and running on port 3000! Ready to handle requests.')
})