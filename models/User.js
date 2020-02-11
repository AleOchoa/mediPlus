const {model,Schema}=require('mongoose')

const PLM= require('passport-local-mongoose')

const userSchema= new Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  rol:{
    type:String,
    enum:['doctor','admin'],
    default:'doctor'
  },
  tipoconsultorio:{
    type:String,
    enum:['sencillo','equipado']
  }
},
{
  timestamps: true
})

userSchema.plugin(PLM, { usernameField: "username" })

module.exports = model("User", userSchema)