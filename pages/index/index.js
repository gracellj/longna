//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    banner: [
      {
        id: "1",
        image_url: "../../images/banner1.jpg"
      },
      {
        id: "2",
        image_url: "../../images/banner2.jpg"
      },
      {
        id: "3",
        image_url: "../../images/banner3.jpg"
      },
      {
        id: "4",
        image_url: "../../images/banner4.jpg"
      },
      {
        id: "5",
        image_url: "../../images/banner5.jpg"
      }
    ],
    channel:[
      {
        id:"1",
        icon_url:"../../images/ic_menu_choice_nor.png",
        name: "公司介绍",
        url: "pages/index/index"
      },
      {
        id: "2",
        icon_url: "../../images/ic_menu_choice_nor.png",
        name: "享优惠",
        url: "pages/index/index"
      },
      {
        id: "3",
        icon_url: "../../images/ic_menu_choice_nor.png",
        name: "看工地",
        url: "pages/index/index"
      },
      {
        id: "4",
        icon_url: "../../images/ic_menu_choice_nor.png",
        name: "免费量房",
        url: "pages/index/index"
      }
    ],
    markers:[
      {
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }
    ],
    works:[
      {
        image_url:"../../images/banner3.jpg",
        url: "/pages/index/index",
        name:"珑纳1",
        size: 50
      },
      {
        image_url: "../../images/banner4.jpg",
        url: "/pages/index/index",
        name: "珑纳2",
        size: 100
      }
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    designUrl: "/pages/index/index",
    meter: {
      image_url: "../../images/meter.jpg",
      url: "/pages/index/index"
    },
    mapContext: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
