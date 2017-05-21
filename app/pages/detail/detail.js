const datas = require('../../utils/data.js');

// "id": "1771",
//     "group": "人物类",
//     "title": "中间人",
//     "detail":

var app = getApp()
Page({
    data: {
        isLoading: true,
        searchKey: '', // 输入查询的关键字
        results: [], // 找寻到的列表
        datas: datas.dreamsData
    },
    // 查询数据库
    getData() {
        let arr = [],
            that = this,
            key = that.data.searchKey,
            datas = that.data.datas;

        wx.showLoading({
            title: '正在查询中',
            mask: true
        });

        for (let i in datas) {
            let item = datas[i];
            // break; // test
            if (item.title.indexOf(key) != -1) {
                arr.push(item);
                // break; //test
            }
        }

        that.setData({
            isLoading: false,
            results: arr
        });

        setTimeout(() => {
            wx.hideToast();
        }, 300);
    },
    // 返回首页
    goPageHome() {
        wx.redirectTo({
            url: '../index/index'
        });
    },
    // 分类页
    goPageType() {
        wx.redirectTo({
            url: '../groupList/groupList'
        });
    },
    onLoad: function(option) {
        this.setData({
            searchKey: option.key || '大风'
        });

        this.getData();
    }
})
