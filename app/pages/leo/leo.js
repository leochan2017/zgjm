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
                wx.previewImage({ urls: ['http://www.leojs.com/pay-me-money.jpg'] })
            }
        })
    },
    onLoad() {
        wx.setNavigationBarTitle({ title: '关于' })
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig,
    payMeBtc() {
        wx.setClipboardData({
            data: '1PQg7wJNMVa3wZxtrMJiFmcHrQicsDtpsG',
            success: res => {
                wx.showModal({
                    title: '感谢您的支持!',
                    content: 'BTC钱包收款地址已经复制至您的手机剪切板',
                    showCancel: false,
                    confirmText: '好的'
                })
            },
            fail: err => {
                wx.showToast({ title: '复制失败，请重试' })
            }
        })
    },
    payMeEth() {
        wx.setClipboardData({
            data: '0xd7EAe8051D4309686c27D96cdE3C41A0ba91c43f',
            success: res => {
                wx.showModal({
                    title: '感谢您的支持!',
                    content: 'imtoken钱包收款地址已经复制至您的手机剪切板',
                    showCancel: false,
                    confirmText: '好的'
                })
            },
            fail: err => {
                wx.showToast({ title: '复制失败，请重试' })
            }
        })
    }
})