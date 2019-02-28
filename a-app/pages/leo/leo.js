const Util = require('../../utils/util.js')
Page({
  data: {
    canUseSetClipboardData: my.canIUse('setClipboard')
  },
  payMeMoney() {
    // my.navigateToMiniProgram({
    //   appId: 'wx18a2ac992306a5a4',
    //   path: 'pages/apps/largess/detail?id=cII2eMPUxog%3D',
    //   fail: err => {
    my.previewImage({
      urls: ['https://github.com/leochan2017/zgjm/blob/master/%E7%B4%A0%E6%9D%90/alipay.jpg?raw=true']
    })
    //   }
    // })
  },
  onLoad() {
    my.setNavigationBar({ title: '关于' })
  },
  // 定义转发
  onShareAppMessage: Util.shareConfig,
  payMeBtc() {
    my.setClipboard({
      text: '1PQg7wJNMVa3wZxtrMJiFmcHrQicsDtpsG',
      success: res => {
        my.showToast({ content: 'BTC钱包收款地址已经复制至您的手机剪切板' })
      },
      fail: err => {
        my.showToast({ content: '复制失败，请重试' })
      }
    })
  },
  payMeEth() {
    my.setClipboard({
      text: '0xd7EAe8051D4309686c27D96cdE3C41A0ba91c43f',
      success: res => {
        my.showToast({ content: 'imtoken钱包收款地址已经复制至您的手机剪切板' })
      },
      fail: err => {
        my.showToast({ content: '复制失败，请重试' })
      }
    })
  }
})
