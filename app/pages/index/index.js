const Util = require('../../utils/util.js')
Page({
  data: {
    searchKey: '' // 输入查询的关键字
  },
  // 检查输入内容
  checkData() {
    const key = this.data.searchKey
    if (key == '') {
      wx.showModal({
        content: '搜索关键词为空',
        showCancel: false,
        confirmText: '我知道了',
        confirmColor: '#888'
      })
      return false
    }
    return true
  },
  // 执行搜索
  searchTap() {
    if (!this.checkData()) return

    let key = this.data.searchKey

    const index1 = key.indexOf('梦到了')
    if (index1 != -1) key = key.substr(index1 + 3)

    const index2 = key.indexOf('梦到')
    if (index2 != -1) key = key.substr(index2 + 2)

    const index3 = key.indexOf('梦见了')
    if (index3 != -1) key = key.substr(index3 + 3)

    const index4 = key.indexOf('梦见')
    if (index4 != -1) key = key.substr(index4 + 2)

    wx.navigateTo({
      url: '../detail/detail?key=' + key
    })
  },
  // 搜索内容变动
  changeSearchKey(e) {
    const searchKey = e.detail.value
    this.setData({ searchKey })
  },
  // 定义转发
  onShareAppMessage: Util.shareConfig
})
