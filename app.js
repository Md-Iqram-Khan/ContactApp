const express = require ('express')
const morgan = require ('morgan')
const contactsRoutes = require('./contactRoute')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', contactsRoutes)

app.get('*',(req,res) => {
    res.send('<h1>404 Not Found</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT,() => {
    console.log(`Server is running on Port ${PORT}`);
})