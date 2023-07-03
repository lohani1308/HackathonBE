const mongoose=require('mongoose');
const express=require('express');

const Projects=new mongoose.Schema({
    project_name:{
        type:String
    },
    project_id:{
        type:Number
    },
    project_description:{
        type:String
    },
    posted_by:{
        name:{ type:String},
        id:{ type:Number },
        company:{ type:String },
        department:{ type:String }
    },
    project_image:{ type:String },
    skills_required:{ type:Array },
    qualification:{ type:String },
    designation_name:{ type:String },
    stipend:{ type:Number },
    project_location:{ type: String }

})

module.exports=mongoose.model("Project",Projects);