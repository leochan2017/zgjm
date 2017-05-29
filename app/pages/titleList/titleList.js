const titleData = require('../../utils/titleData.js');
const Util = require('../../utils/util.js');

var app = getApp()
Page({
    data: {
        index: null, // 当前显示的标题列表的下标
        titleData: titleData
    },
    onLoad: function(option) {
        let index = option.index,
            title = option.title || '类目';

        this.setData({
            index: index
        });

        wx.setNavigationBarTitle({
            title: title
        });
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig
});
