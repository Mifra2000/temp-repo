const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
     res.end('welcome to our homepage')   
     return;
    }
    if(req.url==='/about'){
        res.end('here is our short history')
        return;
    }
    res.end(`<h1>Oops!</h1>`)   
})

server.listen(5000, ()=>{
    console.log('listening at port 5000')
})