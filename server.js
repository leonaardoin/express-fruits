const express = require('express')
const app = express();
const port = 3000 
const Fruit = require('./models/fruits.js');
const Vegetables = require('./models/vegetables.js');
const mongoose= require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false}));

// Middleware here
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//Routes Here
app.get('/', function(req, res){
    res.render('home/Index', { fruits: fruits });
});   

app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('fruits/Index', {
            fruits: allFruits
        });
    });
});  

app.get('/vegetables', (req, res)=>{
    Vegetables.find({}, (error, allVegetables)=>{
        res.render('vegetables/Index', { 
            vegetables: allVegetables
        });
    })
});

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('fruits/Show', {
            fruit:foundFruit
        });
    });
});

app.get('/vegetables/:id', (req, res)=>{
    Vegetables.findById(req.params.id, (err, foundVegetables)=>{
        res.render('vegetables/Show', {
            vegetables:foundVegetables
        });
    });
});

app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.redirect('/fruits');
    });
});

app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    Vegetables.create(req.body, (error, createdVegetables)=>{
        res.redirect('/vegetables');
    });
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});