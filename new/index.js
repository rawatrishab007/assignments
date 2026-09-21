let express = require('express')
let signUp = require('./router/signup')
let app = express()
app.use(express.json()) 
app.use('/', signUp)
app.listen(4000, () => {  
    console.log("server is running on port 4000") 
})


