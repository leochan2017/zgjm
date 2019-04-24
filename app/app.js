App({
    globalData: {
        scene: -1,
        // 是否大于204版本
        isMore204: true
    },
    onLaunch(optitons) {
        setTimeout(this.showAdJiLi, 800)

        this.showAdChaPin()

        this.globalData.scene = optitons.scene

        try {
            const sysInfo = wx.getSystemInfoSync()
            if (sysInfo.SDKVersion > '2.0.4') {
                this.globalData.isMore204 = true
            } else {
                this.globalData.isMore204 = false
            }
        } catch (e) {}

        // this.initCopyCode()
    },
    /** 展示激励式广告 */
    showAdJiLi() {
        if (this.globalData.isMore204 && typeof wx.createRewardedVideoAd === 'function') {
            let videoAd = wx.createRewardedVideoAd({
                adUnitId: 'adunit-ff76dd10ecad5eba'
            })

            if (typeof videoAd.load === 'function') {
                videoAd.load()
                    .then(() => videoAd.show())
                    .catch(err => console.log(err.errMsg))
            }
        }
    },
    /** 展示插屏广告 */
    showAdChaPin() {
        if (wx.createInterstitialAd) {
            let intersitialAd = wx.createInterstitialAd({
                adUnitId: 'adunit-9bedc6aec11d47c0'
            })

            intersitialAd.show().catch(err => console.log(err.errMsg))
        }
    }
    /** 复制神秘代码 */
    // initCopyCode() {
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
    // }
})