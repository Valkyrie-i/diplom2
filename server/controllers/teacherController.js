const {Staff} = require('./../models/models')
const ApiError = require('./../Error/ApiError')
const uuid = require('uuid')
const path = require('path')

class teacherController{

    async create(req,res){
        try{
            const{name,surname,phone} = req.body
            const{img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..','static',filename))
            const staff = await Staff.create({name,surname,phone,img:filename})
            return res.json(staff)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req,res){

    }

}
module.exports = new teacherController()