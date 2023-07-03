const express=require('express');
const mongoose=require('mongoose');
const Projects=require('./Models/ProjectSchema');
const bodyParser=require('body-parser');
const cors=require("cors");

const app=express();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/ProjectData");

app.post('/addProject',(req,res)=>{
    
    const newProject=new Projects({
        project_name:req.body.project_name,
        project_id:req.body.project_id,
        project_description:req.body.project_description,
        posted_by:{
            name:req.body.posted_by.name,
            id:req.body.posted_by.id,
            company:req.body.posted_by.company,
            department:req.body.posted_by.department
        },
        project_image:req.body.project_image,
        skills_required:req.body.skills_required,
        qualification:req.body.qualification,
        designation_name:req.body.designation_name,
        stipend:req.body.stipend,
        project_location:req.body.project_location
    });

    
   newProject.save().then(()=>{
        console.log("New Project Added");
    }).catch((err)=>{
        if(err)throw err;
    })

    res.send("Added");
});

app.get('/mentor',async(req,res)=>{
    try {
        const response=await Projects.find();
        res.json(response);
    }
    catch(err){
        console.log(err);
    }
})

app.listen(4566,()=>{
    console.log("Server running at 4566 ....!");
})