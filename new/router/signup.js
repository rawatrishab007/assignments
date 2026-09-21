let exprees=require('express')
let router=exprees.Router()
router.get('/',(req,res)=>{
    res.send("hello")
})

module.exports=router