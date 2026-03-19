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
app.get('/', (req, res) => {
    res.send('Hello World')
})  
app.get('/library2', (req, res) => {
    res.send('<h1>Welcome to the Library2</h1>')
}) 

app.get('/library3', (req, res) => {
    res.send('<h1>Welcome to the Library3</h1>')
}   )
app.listen(3000, () => {
    console.log('Server is up and running on port 3000! Ready to handle requests.')
})