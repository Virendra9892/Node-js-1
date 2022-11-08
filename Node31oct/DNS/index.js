import dns from "dns";
// dns.lookup("codewithharry.com",(error,address,family)=>{
//     if(error) throw err;
//     console.log(address);
//     console.log(family);

// });

dns.resolve("codewithharry.com",(error,records)=>{
    if(error) throw err;
    console.log(records);
});