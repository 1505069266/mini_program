// pages/posts/posts.js
// let { add } = require('../../data/posts-data.js')
import { add } from '../../data/posts-data.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"朱晓乐",
    errno: 'we'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    this.req('http://localhost:3000/api/blog/list')
    .then(res=>{
      this.setData({ res: res.data.data})
      console.log(this.data)
    })

    console.log(add(100, 88))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },


  /**
   * 请求接口封装
   * @(url)
   */
  req:function(url){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: url,
        success: function(res){
          resolve(res)
        },
        fail:function(err){
          reject(err)
        }

      })
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})