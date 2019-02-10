App({
    globalData: {
        scene: -1
    },
    onLaunch(optitons) {
        this.globalData.scene = optitons.scene
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