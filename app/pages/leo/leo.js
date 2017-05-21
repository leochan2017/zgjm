const Util = require('../../utils/util.js');
Page({
    data: {},
    payMeMoney() {
        wx.previewImage({
            urls: ['http://www.leojs.com/pay-me-money.jpg']
        });
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: '关于'
        });
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig
});
