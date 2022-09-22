const mongoose= require("mongoose");
const workexSchema=new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
      },
      image: {
        data: Buffer,
        contentType: String,
      },
         
           
           
    }
)
const Workex=new mongoose.model("Workex",personalSchema);

module.exports=Workex;    