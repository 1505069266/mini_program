Page({
  onTap(){
    console.log("onTap")
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })
    wx.navigateTo({
      url: '../posts/posts',
    })
  },
  onSubTap(){
    console.log("onSubTap")
    wx.redirectTo({
      url: '../movles/movles',
    })
  },
  onReady(){

  }
})