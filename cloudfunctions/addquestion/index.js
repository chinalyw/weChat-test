// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database('lyw-89a05c')
const questionDB = db.collection('questions')

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await questionDB.add({
      data: event.question
    })
  } catch (e){
    console.error(e)
  }
}