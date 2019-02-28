const Util = require('../../utils/util.js')
Page({
  data: {
    canUseSetClipboardData: wx.canIUse('setClipboardData')
  },
  payMeMoney() {
    wx.navigateToMiniProgram({
      appId: 'wx18a2ac992306a5a4',
      path: 'pages/apps/largess/detail?id=cII2eMPUxog%3D',
      fail: err => {
        wx.previewImage({
          urls: ['https://github.com/leochan2017/zgjm/blob/master/%E7%B4%A0%E6%9D%90/pay-me-money.jpg?raw=true']
        })
      }
    })
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '关于'
    })
  },
  // 定义转发
  onShareAppMessage: Util.shareConfig,
  // payMeBtc() {
  //   wx.setClipboardData({
  //     data: '1PQg7wJNMVa3wZxtrMJiFmcHrQicsDtpsG',
  //     success: res => {
  //       wx.showModal({
  //         title: '感谢您的支持!',
  //         content: 'BTC钱包收款地址已经复制至您的手机剪切板',
  //         showCancel: false,
  //         confirmText: '好的'
  //       })
  //     },
  //     fail: err => {
  //       wx.showToast({
  //         title: '复制失败，请重试'
  //       })
  //     }
  //   })
  // },
  // payMeEth() {
  //   wx.setClipboardData({
  //     data: '0xd7EAe8051D4309686c27D96cdE3C41A0ba91c43f',
  //     success: res => {
  //       wx.showModal({
  //         title: '感谢您的支持!',
  //         content: 'imtoken钱包收款地址已经复制至您的手机剪切板',
  //         showCancel: false,
  //         confirmText: '好的'
  //       })
  //     },
  //     fail: err => {
  //       wx.showToast({
  //         title: '复制失败，请重试'
  //       })
  //     }
  //   })
  // },
  // 关联本程序
  handleLinkMe() {
    wx.showModal({
      title: '哎呀老铁，你真有眼光!',
      content: '0. 下面是公众号关联步骤\r\n1. 小程序跳转直接看第7\r\n2.登录微信公众平台\r\n3.进入“小程序管理”\r\n4.点击“添加”按钮\r\n5.选择“关联小程序”\r\n6.扫码验证身份\r\n7.输入AppID: wxb30c12d2e291b24b\r\n8.发送关联邀请\r\n9.等待我方通过邀请',
      confirmText: '一键复制',
      success: res => {
        if (res.confirm) {
          this.copyAppId()
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },
  // 复制appid
  copyAppId() {
    wx.setClipboardData({
      data: 'wxb30c12d2e291b24b',
      fail: err => {
        $Toast({
          content: '复制失败，麻烦您再试试或者手动输入？',
          type: 'error'
        })
      }
    })
  }
})
