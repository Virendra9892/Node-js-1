// console.log("Hey Virendra Good Morning !");
import http from "http";
import fs from "fs";
const PORT = process.env.PORT || 8000;
const HOST = "localhost";
const server = http.createServer((req,res)=>{
    res.writeHead(200,"ok",{"Content-Type":"text/html"});
    if(req.url ==="/"){
        fs.readFile("./public/index.html",(err,data)=>{
            if(err) throw err;
            res.end(data);
        });
    }
    else if(req.url ==="/about"){
        fs.readFile("./public/about.html",(err,data)=>{
            if(err) throw err;
          
            res.end(data);
        })
    }
    else{
        res.end("<h1>404 Not Found !</h1>");
    }
});
server.listen(PORT,()=>{
    console.log(`Server is listening on http://${HOST}:${PORT}.`);
});