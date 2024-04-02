const express = require("express");
const router = express.Router();
const posts = require("../Model/post");

router.use(express.json());

router.post('/add',async(req,res)=>{
    try {
        const post = req.body;
        const data = await posts(post).save();
        res.status(200).send({message:"post added"})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})

router.get('/view',async(req,res)=>{
    try {
       let data = await posts.find()
       res.status(200).send({message:"data send",data})
       console.log(data)
    } catch (error) {
        console.log(error)
    }
});

router.delete('/del/:id',async(req,res)=>{
    try {
        let id = req.params.id
        await posts.findByIdAndDelete(id)
        res.status(200).send({message:"post deleted"})
    } catch (error) {
        console.log(error)
    }
})

router.put('/up/:id',async(req,res)=>{
    try {
        let id =req.params.id;
        let up = await posts.findByIdAndUpdate(id,req.body);
        res.status(200).send({message:"updated",up})
        console.log(up)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;