// pages/test/test.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentID:0,
    questionlist:[],
    currentQestion:{},
    wronglist:[],
    rightNum:0,
    wrongNum:0,
    flag:false
  },

  radioChange: function(e) {
    let that = this;

    if (e.detail.value == that.data.currentQestion.rightSelect){
      wx.showToast({
        title: '回答正确',
      })
      that.data.rightNum++;
    }else{
      wx.showToast({
        title: '回答错误',
      })
      that.setData({
        wrongSelect:e.detail.value
      })
      that.data.wrongNum++;
      var wrongQuestion = that.data.currentQestion;
      wrongQuestion.wrongSelect = e.detail.value;
      that.data.wronglist.push(wrongQuestion);
    }

    that.data.currentID++;
    if (that.data.currentID < that.data.questionlist.length){
      that.setData({
        currentQestion: that.data.questionlist[that.data.currentID],
        flag:false
      })
    }else{
      app.globalData.wronglist = that.data.wronglist;
      app.globalData.wrongNum = that.data.wrongNum;
      app.globalData.rightNum = that.data.rightNum;

      wx.navigateTo({
        url: '../result/result'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.cloud.callFunction({
      name:"getquestionlist",
      data:{},
      success: res=>{
        that.setData({
          questionlist : res.result.data,
          currentQestion : res.result.data[that.data.currentID]
        })
      },
      fail: res => {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})