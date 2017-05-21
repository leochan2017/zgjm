const titleData = require('../../utils/titleData.js');
const Util = require('../../utils/util.js');

var app = getApp()
Page({
    data: {
        index: 0, // 当前显示的标题列表的下标
        titleData: titleData
    },
    onLoad: function(option) {
        let index = option.index;
        this.setData({
            index: index
        });
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig
});
