const userModel = require('../models/userModal')
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
  
    // if (gmail !== "nexus@gmail.com" || password !== "nexus") {
    //   return res.redirect("/adminLogin");
    // }
    
    const user = await userModel.findOne({role:'Admin'});
    const isMatch = await bcryptjs.compare(password,user.password1);
  
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
    const hashpassword= await bcryptjs.hash(password1,12);
    user = new userModel({
      fullname ,
      gmail,
      contact, 
      password:hashpassword,
      image,
    });
  
    async function saveUser() {
        try {
          await user.save();
        } catch (error) {
          console.error(error);
        }
      }
    saveUser();
    res.redirect('/loginPage')
  };
  