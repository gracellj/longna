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
        image_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/banner1.jpg"
      },
      {
        id: "2",
        image_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/banner2.jpg"
      },
      {
        id: "3",
        image_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/banner3.jpg"
      },
      {
        id: "4",
        image_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/banner4.jpg"
      },
      {
        id: "5",
        image_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/banner5.jpg"
      }
    ],
    channel:[
      {
        id:1,
        icon_url:"",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/ic_menu_choice_nor.png",
        name: "公司介绍",
        url: "/pages/index/index"
      },
      {
        id: 2,
        icon_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/ic_menu_choice_nor.png",
        name: "享优惠",
        url: "../onsale/onsale"
      },
      {
        id: 3,
        icon_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/ic_menu_choice_nor.png",
        name: "看工地",
        url: "../site/site"
      },
      {
        id: 4,
        icon_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/ic_menu_choice_nor.png",
        name: "免费量房",
        url: "../onsale/onsale"
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
        image_url:"",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/design1.jpg",
        url: "/pages/index/index",
        name:"博兴路小区",
        size: 50
      },
      {
        image_url: "",
        file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/design2.jpg",
        url: "/pages/index/index",
        name: "御青路",
        size: 100
      }
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    designUrl: "/pages/index/index",
    meter: {
      image_url: "",
      file_id: "cloud://longna-staging-f26ba5.6c6f-longna-staging-f26ba5/longna/meter.jpg",
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

    // 加载图片
    for (let i = 0; i < this.data.banner.length; i++) {
      wx.cloud.downloadFile({
        fileID: this.data.banner[i].file_id,
        success: res => {
          var key = 'banner[' + i + '].image_url'
          this.setData(
            {
              [key]: res.tempFilePath
            }
          )
        },
        fail: err => {
          console.log(err)
        }
      })
    }

    for (let i = 0; i < this.data.channel.length; i++) {
      wx.cloud.downloadFile({
        fileID: this.data.channel[i].file_id,
        success: res => {
          var key = 'channel[' + i + '].icon_url'
          this.setData(
            {
              [key]: res.tempFilePath
            }
          )
        },
        fail: err => {
          console.log(err)
        }
      })
    }

    for (let i = 0; i < this.data.works.length; i++) {
      console.log(this.data.works[i].file_id)
      wx.cloud.downloadFile({
        fileID: this.data.works[i].file_id,
        success: res => {
          var key = 'works[' + i + '].image_url'
          this.setData(
            {
              [key]: res.tempFilePath
            }
          )
        },
        fail: err => {
          console.log(err)
        }
      })
    }

    wx.cloud.downloadFile({
      fileID: this.data.meter.file_id,
      success: res => {
        this.setData({'meter.image_url': res.tempFilePath})
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formSubmit: function(e) {
    console.log(e.detail.value)
  }
})
