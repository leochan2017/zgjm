const titleData = require('../../utils/titleData.js')
const Util = require('../../utils/util.js')
Page({
    data: {
        index: null, // 当前显示的标题列表的下标
        titleData
    },
    onLoad(option) {
        const index = option.index
        const title = option.title || '类目'

        this.setData({ index })

        my.setNavigationBar({ title: title })
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig
})