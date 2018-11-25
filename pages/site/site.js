// pages/site/site.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sites: [],
    maxlimit: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this

    that.setData({
      sites: []
    })
    

    // 先取出集合记录总数
    that.getSiteData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getSiteData: function() {
    let that=this
    const MAX_LIMIT=10
    const db = wx.cloud.database({
      env: 'longna-staging-f26ba5'
    })
    db.collection('site').limit(MAX_LIMIT).get({
      success: function (e) {
        that.setData({
          sites: e.data
        })
        console.log(e)
      }
    })
  }
})