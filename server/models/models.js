const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User  = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    surname:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue:"USER"},
})

const Staff  = sequelize.define('staff',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    surname:{type: DataTypes.STRING},
    img:{type: DataTypes.STRING, allowNull:false},
    phone:{type: DataTypes.STRING},
})

//const Admin  = sequelize.define('admin',{
//    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//    name:{type: DataTypes.STRING},
//    password:{type: DataTypes.STRING},
//})

const Lesson  = sequelize.define('lesson',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true},
})

const Achieves  = sequelize.define('achieves',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING,allowNull:false},
    description:{type: DataTypes.STRING,allowNull:false},
    img:{type: DataTypes.STRING, allowNull:false},
})

const Information  = sequelize.define('information',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING,allowNull:false},
    description:{type: DataTypes.STRING,allowNull:false},
    img:{type: DataTypes.STRING, allowNull:false},
})

const News  = sequelize.define('news',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING,allowNull:false},
    description:{type: DataTypes.STRING,allowNull:false},
    img:{type: DataTypes.STRING, allowNull:false},
})

const Faq  = sequelize.define('faq',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    question:{type: DataTypes.STRING,allowNull:false},
    answer:{type: DataTypes.STRING,allowNull:false},
})

const StaffLesson  = sequelize.define('staff_lesson',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Faq)
Faq.belongsTo(User)

User.hasMany(Lesson)
Lesson.belongsTo(User)

User.hasMany(Achieves)
Achieves.belongsTo(User)

User.hasMany(Information)
Information.belongsTo(User)

User.hasMany(News)
News.belongsTo(User)

User.hasMany(Faq)
Faq.belongsTo(User)

Staff.belongsToMany(Lesson, {through:StaffLesson })
Lesson.belongsToMany(Staff, {through:StaffLesson})

module.exports = {
    User,
    Staff,
    Faq,
    //Admin,
    Lesson,
    Achieves,
    Information,
    News,
    StaffLesson
}