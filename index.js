const express = require('express')
const app = express();
const mysql = require("mysql");
const cors=require("cors");
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user : "root",
    password:"",
    database:"easylearning",
   
});


db.connect((err) => {
    if(!err){
        console.log("connected!!");
    }else{
        
        console.log("not Connected");
    }
})


app.post("/studentRegister", (req, res) => {

    const name =req.body.username;
    const AcademicName = req.body.AcademicName;
    const userNumber= req.body.userNumber;
    const userEmail=req.body.userEmail;
    
    const userAddress=req.body.userAddress;
    const userPassword= req.body.userPassword;

    
    db.query(
        
        "INSERT INTO studentuser (sName,sEmail,sPhone,sPassword,sAcademicName,SAddress) VALUES (?,?,?,?,?,?)",
        [name, userEmail, userNumber, userPassword, AcademicName, userAddress],
        (err, result) =>{
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
    );
    
});

app.post("/teacherRegister", (req, res) => {

    const name =req.body.username;
    const profession=req.body.Profession;
    const status=req.body.status;
    const orgName=req.body.organizationName;
    const subjects=req.body.subjectName;
    const gender=req.body.gender;

    const userNumber= req.body.userNumber;
    const userEmail=req.body.userEmail;
    
    const userAddress=req.body.userAddress;
    const userPassword= req.body.userPassword;

    
    db.query(    
        "INSERT INTO teacheruser (tName,tEmail,tPhone,tPassword,tProfession,tStatus,tOrganizationName,tSubjectsName,tAddress,tGender) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [name, userEmail, userNumber, userPassword,profession,status,orgName,subjects,userAddress,gender],
        (err, result) =>{
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
    );
    
});



app.post ("/login", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM studentuser WHERE sName= ? AND sPassword = ?",
        [username, password],
        (err, result)=>{
            if(err){
                res.send({err:err});
            }

            if(result){
                res.send(result);
            }else{
                res.send({message:"Invalied"});
            }
        }
    );

});



app.listen(5000, ()=>{
    console.log("server is running in server 5000");
})