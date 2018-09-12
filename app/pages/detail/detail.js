const datas = require('../../utils/data.js')
const Util = require('../../utils/util.js')
Page({
    data: {
        fromTitleList: false,
        fromShare: false,
        isLoading: true,
        searchKey: '', // 输入查询的关键字
        results: [], // 找寻到的列表
        datas: datas.dreamsData,
        minWrapHeight: 900
    },
    // 查询数据库
    getData() {
        let arr = []
        const that = this
        const key = that.data.searchKey
        const datas = that.data.datas

        wx.showLoading({
            title: '正在查询中',
            mask: true
        })

        for (let i in datas) {
            let item = datas[i]
            if (item.title.indexOf(key) != -1) {
                arr.push(item)
            }
        }

        that.setData({
            isLoading: false,
            results: arr
        })

        setTimeout(() => {
            wx.hideLoading()
        }, 300)
    },
    // 自动计算撑开页面的内容区高度
    resetWrapMinHeight: function() {
        wx.getSystemInfo({
            success: res => {
                const windowHeight = res.windowHeight
                    // console.log('windowHeight', windowHeight)
                if (windowHeight) {
                    let minWrapHeight = windowHeight - 190
                    if (this.data.fromShare) minWrapHeight = minWrapHeight - 65
                        // console.log('minWrapHeight', minWrapHeight)
                    this.setData({
                        minWrapHeight
                    })
                }
            }
        })
    },
    // 定义转发
    onShareAppMessage: function() {
        // 如果没有查到任何内容则分享首页吧
        if (this.data.results.length == 0) return Util.shareConfig()

        const key = this.data.searchKey
        const title = `梦到"${key}"原来是预示着...`

        return {
            title: title,
            path: `/pages/detail/detail?key=${key}&fromShare=true`
        }
    },
    onLoad: function(option) {
        this.setData({
            searchKey: option.key || '大风'
        })

        option.fromTitleList && this.setData({
            fromTitleList: true
        })

        option.fromShare && this.setData({
            fromShare: true
        })

        this.resetWrapMinHeight()

        this.getData()
    }
})
