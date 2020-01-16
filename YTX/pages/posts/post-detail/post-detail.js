// pages/posts/post-detail/post-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.axios('http://47.96.235.73:3000/api/blog/detail?id=', options.id).then(res=>{
      this.setData({postContent: res.data.data})
    })
    wx.setStorageSync('name', '风暴英雄')
  },

  /**
   * 封装微信请求
   */
  axios(url,id){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: url + id,
        success: function(res){
          resolve(res)
        },
        fail(err){
          reject(err)
        }
      })
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