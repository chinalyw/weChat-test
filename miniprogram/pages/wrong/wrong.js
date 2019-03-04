// pages/wrong/wrong.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wronglist:[],
    currentWrong:{},
    currentID:0,
    listSize:0
  },

  //上一题
  up: function () {
    let that = this;
    let id = that.data.currentID;
    let list = that.data.wronglist;
    id--
    that.setData({
      currentID: id,
      currentWrong: list[id]
    })
  },
  //下一题
  down: function () {
    let that = this;
    let id = that.data.currentID;
    let list = that.data.wronglist;
    id++
    that.setData({
      currentID: id,
      currentWrong: list[id]
    })

    console.log(that.data);
  },
  //返回首页
  goIndex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      wronglist: app.globalData.wronglist,
      currentWrong: app.globalData.wronglist[that.data.currentID],
      listSize: app.globalData.wronglist.length
    })

    console.log(this.data);
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