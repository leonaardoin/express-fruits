const express = require('express')
const app = express();
const port = 3000 
const Fruit = require('./models/fruits.js');
const Vegetables = require('./models/vegetables.js');
const mongoose= require('mongoose');
const methodOverride = require('method-override');
const fruitsController = require('./controllers/fruits');
const vegetablesController = require('./controllers/vegetables');


require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false}));

// Middleware here
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//Routes Here

app.use('/fruits', fruitsController)
app.use('/vegetables', vegetablesController)

// app.get('/', (req, res)=>{
//     res.render('home/Index', { fruits: fruits });
// });   

// app.get('/fruits', (req, res)=>{
//     Fruit.find({}, (error, allFruits)=>{
//         res.render('fruits/Index', {
//             fruits: allFruits
//         });
//     });
// });  

// app.get('/vegetables', (req, res)=>{
//     Vegetables.find({}, (error, allVegetables)=>{
//         res.render('vegetables/Index', { 
//             vegetables: allVegetables
//         });
//     })
// });

// app.get('/fruits/new', (req, res) => {
//     res.render('fruits/New');
// });

// app.get('/vegetables/new', (req, res) => {
//     res.render('vegetables/New');
// });

// app.delete('/fruits/:id', (req, res)=>{
//     Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
//         res.redirect('/fruits');//redirect back to fruits index
//     });
// });

// app.delete('/vegetables/:id', (req, res)=>{
//     Vegetables.findByIdAndRemove(req.params.id, (err, data)=>{
//         res.redirect('/vegetables');//redirect back to vegetables index
//     });
// });

// app.put('/fruits/:id', (req, res)=>{
//     if(req.body.readyToEat === 'on'){
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit)=>{
//        console.log(updatedFruit)
//         res.redirect(`/fruits/${req.params.id}`);
//     });
// });

// app.put('/vegetables/:id', (req, res)=>{
//     if(req.body.readyToEat === 'on'){
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     Vegetables.findByIdAndUpdate(req.params.id, req.body, (err, updatedVegetable)=>{
//        console.log(updatedVegetable)
//         res.redirect(`/vegetables/${req.params.id}`);
//     });
// });

// app.post('/fruits/', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true;
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false;
//     }
//     Fruit.create(req.body, (error, createdFruit)=>{
//         res.redirect('/fruits');
//     });
// });

// app.post('/vegetables', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ 
//         req.body.readyToEat = true;
//     } else { 
//         req.body.readyToEat = false;
//     }
//     Vegetables.create(req.body, (error, createdVegetables)=>{
//         res.redirect('/vegetables');
//     });
// });

// app.get('/fruits/:id/edit', (req, res)=>{
//     Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
//       if(!err){
//         res.render(
//     		  'fruits/Edit',
//     		{
//     			fruit: foundFruit //pass in the found fruit so we can prefill the form
//     		}
//     	);
//     } else {
//       res.send({ msg: err.message })
//     }
//     });
// });

// app.get('/fruits/:id', (req, res)=>{
//     Fruit.findById(req.params.id, (err, foundFruit)=>{
//         res.render('fruits/Show', {
//             fruit:foundFruit
//         });
//     });
// });

// app.get('/vegetables/:id/edit', (req, res)=>{
//     Vegetables.findById(req.params.id, (err, foundVegetables)=>{ //find the vegetable
//       if(!err){
//         res.render(
//     		  'vegetables/Edit',
//     		{
//     			vegetable: foundVegetables //pass in the found vegetable so we can prefill the form
//     		}
//     	);
//     } else {
//       res.send({ msg: err.message })
//     }
//     });
// });

// app.get('/vegetables/:id', (req, res)=>{
//     Vegetables.findById(req.params.id, (err, foundVegetables)=>{
//         res.render('vegetables/Show', {
//             vegetable:foundVegetables
//         });
//     });
// });

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});