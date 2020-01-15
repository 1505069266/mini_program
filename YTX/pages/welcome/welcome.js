Page({
  onTap(){
    console.log("onTap")
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })
    wx.redirectTo({
      url: '../posts/posts?name=zxl',
    })
  },
  onSubTap(){
    console.log("onSubTap")
    wx.redirectTo({
      url: '../movles/movles',
    })
  },
  onReady(){
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')

        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)

        ctx.fillRect(0, 0, 100, 100)
      })
  }
})