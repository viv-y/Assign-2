const mongoose= require("mongoose");
const personalSchema=new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
      },
      image: {
        data: Buffer,
        contentType: String,
      },
         password: {
            type: String,
            required: true,
          },
           
          personalmob: {
            type: String,
          },
          personalemail: {
            type: String,
          },
          bloodgroup:{
            type: String
          },
           
           
           
    }
)
const personal=new mongoose.model("Personal",personalSchema);

module.exports=Personal;    