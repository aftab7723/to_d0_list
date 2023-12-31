const router = require('express').Router();
//import todo model
const todoItemsModel = require('../models/todoItems');


// Lets create our first route -- we will add Todo Item to our database
 router.post('/api/item',async(req,res)=>{
    try{
   const newItem = new todoItemsModel({
    item:req.body.item
   })
   //save this item in database
   const saveItem = await newItem.save()
   res.status(200).json(saveItem);
    }catch(error){
        res.json(error);
    }
 })

// lets create second route -- get data from database
router.get('/api/items',async(req,res)=>{
    try{
     const allTodoItems = await todoItemsModel.find({});
     res.status(200).json(allTodoItems)
    }catch(error){
        res.json(error);
    }
})


// Lets update item
router.put('/api/item/:id',async(req,res)=>{
    try{
    //find the item by its id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id,{$set: req.body});
    res.status(200).json('Item Updated');
    }catch(error){
        res.json(error);
    }
})


// lets Delete item from database
router.delete('/api/item/:id',async(req,res)=>{
    try{
    //find the item by its id and delete it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
    }catch(error){
        res.json(error);
    }
})


 //export router
 module.exports = router;