const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createUser = asyncHandler(async(req,res) => {
    const {username,password} = req.body;
    const user = await userModel.findOne({username});
    if (!user){
        const newuser = await userModel.create({
            username,
            password,
        });
        const {_id} = newuser;
        const token = jwt.sign({username,_id},"helloworld",{expiresIn: '7d'});
        res.send({token});
    }
    else
    {
        res.send('user exists');
    }
    
})

const loginUser = asyncHandler(async(req,res) => {
    const {username,password} = req.body;
    const user = await userModel.findOne({username});
    if (!user || user.password !== password){
        res.json({message: 'user not found'});
    }
    else{
        const {_id} = user;
        const token = jwt.sign({username,_id},"helloworld",{expiresIn: '1h'});
        res.send({token});
        }
    

})

module.exports = {createUser,loginUser};