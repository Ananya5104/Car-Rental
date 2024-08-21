const userModel = require('../models/userModal')
const bcryptjs = require('bcryptjs')

exports.login = async(req,res)=>{
    const {gmail , password} = req.body;
  
    const user = await userModel.findOne({gmail});
  
    if(!user){
        return res.redirect("/loginPage");
    }
    const isMatch = await bcryptjs.compare(password,user.password1);
  
    if(!isMatch){
        return res.redirect("/loginPage");
    }
    res.redirect("./homePage");
  };
  exports.adminLogin = async(req,res)=>{
    const { gmail, password } = req.body;
    
    const user = await userModel.findOne({role:'Admin'});
    const isMatch = await bcryptjs.compare(password,user.password);
  
    if(!isMatch){
      res.redirect("/adminLogin");
    }
    res.redirect("/adminPage");
  };
  
  
exports.signin = async(req,res)=>{
    const {fullname ,gmail, contact,password} = req.body;
  
    let user = await userModel.findOne({gmail});
    if(user){
        return res.redirect('/loginPage');
    }
    const hashpassword= await bcryptjs.hash(password,12);
    user = new userModel({
      fullname ,
      gmail,
      contact, 
      password:hashpassword,
    });
    try {
      await user.save();
        console.log('User saved successfully');
      } catch (error) {
          console.error('Error saving user:', error);
      }  
    res.redirect('/loginPage')
  };
  