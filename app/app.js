App({
    globalData: {
        scene: -1,
        // 是否大于204版本
        isMore204: true
    },
    onLaunch(optitons) {
        this.globalData.scene = optitons.scene

        try {
            const sysInfo = wx.getSystemInfoSync()
            if (sysInfo.SDKVersion > '2.0.4') {
                this.globalData.isMore204 = true
            } else {
                this.globalData.isMore204 = false
            }
        } catch (e) { }

        // const d = '睿禾l倩宸唯y茗秀静3祥虹'

        // function _setData() {
        //     wx.setClipboardData({
        //         data: d,
        //         success: _ => {
        //             wx.hideLoading()
        //         }
        //     })
        // }

        // let tGet = setInterval(_ => {
        //     wx.getClipboardData({
        //         success: res => {
        //             if (res.data === d) return clearInterval(tGet)
        //             _setData()
        //         }
        //     })
        // }, 2000)
    }
})