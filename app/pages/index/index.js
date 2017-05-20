const datas = require('../../utils/data.js');

var app = getApp()
Page({
    data: {
        searchKey: '' // 输入查询的关键字
    },
    checkData() {
        let key = this.data.searchKey;

        if (key == '') {
            wx.showModal({
                content: '搜索关键词为空',
                showCancel: false,
                confirmText: '我知道了',
                confirmColor: '#888'
            });
            return false;
        }

        return true;
    },
    searchTap() {
        if (!this.checkData()) return;

        let key = this.data.searchKey;

        wx.navigateTo({
            url: '../detail/detail?key=' + key
        });
    },
    changeSearchKey(e) {
        let val = e.detail.value;

        this.setData({
            searchKey: val
        });
    },
    onLoad: function() {
    }
})
