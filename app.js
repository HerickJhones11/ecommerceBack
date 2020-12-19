const express = require("express");
const mongoose =  require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const expressValidator = require("express-validator")

require('dotenv').config()
//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');
const { MongoClient } = require("mongodb");




// app
const app = express()


const connectionParams={
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex:true
}
mongoose.connect(process.env.MONGODB_URI,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })



//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',braintreeRoutes)
app.use('/api',orderRoutes)

app.get('/', (req, res) => {
    res.send('Hello to memories API')
})



app.get("/hello" , (req, res ) => {
    res.json('hello world')
});





const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})