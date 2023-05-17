const express = require('express')
const router = express.Router()
const Vegetables = require('../models/vegetables')

// Index : Show all the things!
router.get('/', (req, res)=>{ // /vegetables
    Vegetables.find({}, (error, allVegetables)=>{
        res.render('vegetables/Index', {
            vegetables: allVegetables
        })
    })
})

// New : An empty form for a new thing  
// GET /vegetables/new
router.get('/new', (req, res) => { // /vegetables/new
    res.render('../views/vegetables/New')
})


// Delete/Destroy : Get rid of this particular thing!  
// DELETE /vegetables/:id
router.delete('/:id', (req, res)=>{
    Vegetable.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/vegetables') //redirect back to vegetables index
    })
})

// Update : Update this specific thing with this updated form 
// PUT /vegetables/:id
router.put('/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, updatedVegetable)=>{
       console.log(updatedVegetable)
        res.redirect(`/vegetables/${req.params.id}`)
    })
})


// Create : Make a new thing with this filled out form 
//POST /vegetables
router.post('/', async (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false //do some data correction
    }
    // vegetables.push(req.body) // pushing new vegetable into vegetables array
    await Vegetable.create(req.body, (error, createdVegetable)=>{
        res.redirect('/vegetables')
    });
    
    // res.redirect('/vegetables'); //send the user back to /vegetables
})


// Edit : A prefilled form to update a specific thing 
// GET /vegetables/:id/edit
router.get('/:id/edit', (req, res)=>{
    Vegetable.findById(req.params.id, (err, foundVegetable)=>{ //find the vegetable
      if(!err){
        res.render(
    		  'vegetables/Edit',
    		{
    			vegetable: foundVegetable //pass in the found vegetable so we can prefill the form
    		}
    	)
    } else {
      res.send({ msg: err.message })
    }
    })
})


// Show : Show me this one thing by ID
// GET /fruits/:id
router.get('/:id', (req, res)=>{
    Vegetable.findById(req.params.id, (err, foundVegetable)=>{
        res.render('vegetables/Show', {
            vegetable:foundVegetable
        })
    })
})

module.exports = router