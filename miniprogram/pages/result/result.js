// pages/result/result.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rightNum:0,
    wrongNum:0,
    questionNum:0
  },
  //返回首页
  goIndex: function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  //查看错题
  goWrong: function(){
    wx.navigateTo({
      url: '../wrong/wrong?wronglist=' + this.data.wronglist + '&wrongNum=' +this.data.wrongNum,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      rightNum: app.globalData.rightNum,
      wrongNum: app.globalData.wrongNum,
      questionNum: app.globalData.rightNum * 1 + app.globalData.wrongNum * 1,
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