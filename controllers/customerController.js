import userModel from '../models/userModal'
exports.login = async(req,res)=>{
    const {gmail , password} = req.body;
  
    const user = await userModel.findOne({gmail});
  
    if(!user){
        return res.redirect("/login");
    }
    const isMatch = await bcryptjs.compare(password,user.password1);
  
    if(!isMatch){
        return res.redirect("/login");
    }
    
    req.session.isAuth=true;
    req.session.userId = user._id;
    console.log(user._id);
    let userid = user._id;
    let userdetails = await userModel.findOne({_id:userid});
    let profile = await userProfile.findOne({id:userid});
    if(!profile){
      profile = new userProfile({
        id:userid,
        fullname:userdetails.fullname,
        bio:"write your bio here...",
        profileImg:"/assets/User-Profile-Image.png",
        interestedToWork:false,
      })
      async function saveProfile() {
        try {
          await profile.save();
        } catch (error) {
          console.error(error);
        }
      }
      saveProfile();
      // profile.save();
    }
    res.redirect("/studentHomePage");
  };
  app.post("/adminlogin", async(req,res)=>{
    const { gmail, password } = req.body;
  
    // if (gmail !== "nexus@gmail.com" || password !== "nexus") {
    //   return res.redirect("/adminLogin");
    // }
    
    const user = await userModel.findOne({role:'Admin'});
    const isMatch = await bcryptjs.compare(password,user.password1);
  
    if(!isMatch){
      res.redirect("/adminLogin");
    }
    req.session.isAuth = true;
    res.redirect("/adminDashboard");
  });
  
  
  app.post("/signup", async(req,res)=>{
    const {fullname , phno,gmail, password1} = req.body;
  
    let user = await userModel.findOne({gmail});
    if(user){
        return res.redirect('/login');
    }
    const hashpassword= await bcryptjs.hash(password1,12);
    user = new userModel({
      fullname ,
      phno,
      gmail, 
      password1:hashpassword,
      about: "",
      image: "profile_img.png"
    });
  
    async function saveUser() {
        try {
          await user.save();
        } catch (error) {
          console.error(error);
        }
      }
    saveUser();
    res.redirect('/login')
  });
  