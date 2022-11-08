// console.log("Hey Virendra Good Morning !");
import http from "http";
import fs from "fs";
import { equal } from "assert";
const PORT = process.env.PORT || "8000";
const HOST = "localhost";
const server = http.createServer((req,res)=>{
    res.writeHead(200,"ok",{"Content-Type":"text/html"});
    if(req.url === "/"){
        fs.readFile("./public/index.html","utf-8",(error,data)=>{
            if(error) throw error;
            res.end(data);
        });
    }
    else if(req.url === "/about"){
        fs.readFile("./public/about.html","utf-8",(error,data)=>{
            if(error) throw error;
            res.end(data);
        });
    }
    else{
        res.end("<h1>file not found !</h1>");
    }
});
server.listen(PORT,()=>{
    console.log(`Server is listening on http://${HOST}:${PORT}.`);
})