import {User} from "../models/user.model.js";
export const authcallback=async(req,res)=>{
    try{
       const {id,firstName,lastName,imageUrl}=req.body;

       const user=await User.findOne({clerkId:id});
       if(!user){
           await User.create({
               clerkID:id,
               fullName:`${firstName} ${lastName}`,
               imageUrl,
           });
       }
       res.status(200).json({sucess:true})
    } catch(error){
       console.log("Error in auth callback",error);
       res.status(500).json({message:"Internal server error",error});
    }
}