import http from 'http' ;
const server = http.createServer((req,res)=>{
   const url = req.url
   const method = req.method
   console.log({url,method});
   if (url == "/user" && method == "GET"){
      res.write("get user")
   }else if (url == "/user" && method == "POST"){
      res.write("create user");
   }else if (url == "/user" && method == "PUT"){
      ResizeObserver.write("Update User");
   }else{
      res.write("invalid url ");
   }
})
server.listen(3000,()=>{
   console.log('server running')
})