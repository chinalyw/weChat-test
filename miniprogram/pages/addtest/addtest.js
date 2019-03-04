// pages/addtest/addtest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question:"1+1=",
    slTip1:"A",
    slContent1:"1",
    slTip2:"B",
    slContent2:"2",
    slTip3:"C",
    slContent3:"3",
    slTip4:"D",
    slContent4:"4"
  },
  

  formSubmit(e) {
    let that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    if (e.detail.value.question == ''
      || e.detail.value.slTip1 == ''
      || e.detail.value.slTip2 == ''
      || e.detail.value.slTip3 == ''
      || e.detail.value.slTip4 == ''
      || e.detail.value.slContent1 == ''
      || e.detail.value.slContent2 == ''
      || e.detail.value.slContent3 == ''
      || e.detail.value.slContent4 == ''
      || e.detail.value.rightSelect == ''
    ){
        wx.showToast({
          title: '请填写完整信息',
        })
    }else{
      wx.cloud.callFunction({
        name: 'addquestion',
        data: {
          question: e.detail.value
        },
        success: res => {
          console.log(res)
          wx.showToast({
            title: '添加成功',
          })
        },
        fail: err => {
          console.log(err)
        }

      })
    }
  },
  formReset() {
    console.log('form发生了reset事件')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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