const {News} = require('./../models/models')
const ApiError = require('./../Error/ApiError')
const uuid = require('uuid')
const path = require('path')

class newsController{
    async create (req,res){
        try{
            const {title,description} = req.body
            const{img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..','static',filename))
            const news = await News.create({title,description,img:filename})
            return res.json(news)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        const allnews = await News.findAll()
        return res.json(allnews);
    }
}
module.exports = new newsController()