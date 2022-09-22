const mongoose= require("mongoose");
const recommendSchema=new mongoose.Schema(
    {
        rname: {
        type: String,
        required: true,
      },
      rimage: {
        data: Buffer,
        contentType: String,
      },
         
          rpersonalmob: {
            type: String,
          },
          rpersonalemail: {
            type: String,
          },
          recomm:{
            type: String
          },
           
           
           
    }
)
const Recommend=new mongoose.model("Recommend",recommendSchema);

module.exports=Recommend;    