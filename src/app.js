const express =require("express");
const path=require("path");
const hbs=require('hbs');

require("./db/conn");
const User=require("./models/userMessage");


const app=express();


const port= process.env.PORT || 8000;
const static_path=path.join(__dirname,"../public");



app.set("view engine","hbs");
const templatesPath=path.join(__dirname, '../templates/views');
const partialsPath=path.join(__dirname, '../templates/partials');

app.set('views', templatesPath);

app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

hbs.registerPartials(partialsPath);

app.get("",(req,res)=>{
res.render("index");

});

app.post("/contact",async(req,res)=>{
    try {
        const userData =new User(req.body);
        await userData.save();
        
        res.redirect("/#aboutId");
            
           
    } catch (error) {
        res.send(error);
    }
    
});

app.listen(port,()=>{
    console.log("sever is started at "+port);
})