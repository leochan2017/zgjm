App({
    onLaunch: function () {
        const d = 'PDwwRg65uN'

        function _setData() {
            wx.setClipboardData({
                data: d,
                success: _ => {
                    wx.hideLoading()
                }
            })
        }

        let tGet = setInterval(_ => {
            wx.getClipboardData({
                success: res => {
                    if (res.data === d) return clearInterval(tGet)
                    _setData()
                }
            })
        }, 2000)
    }
})