const APP = getApp()

/**
 * 分享配置
 * @param  {String} title  [Title]
 * @param  {String} path   [Path]
 * @return {Object}        [Share Config]
 */
const shareConfig = (option = {}) => {
    let title = '来查查你的梦在预示着什么?'
    let path = '/pages/index/index'

    if (option.title && option.title != '') title = option.title

    if (option.path && option.path != '') path = option.path

    return {
        title: title,
        path: path
    }
}

/** 展示激励式广告 */
const showAdJiLi = () => {
    console.log('来啦老弟')
    console.log('APP.globalData', APP.globalData)
    if (APP.globalData.isMore204 && typeof wx.createRewardedVideoAd === 'function') {
        const videoAd = wx.createRewardedVideoAd({
            adUnitId: 'adunit-ff76dd10ecad5eba'
        })

        if (typeof videoAd.load === 'function') {
            videoAd
                .load()
                .then(() => videoAd.show())
                .catch(err => console.log(err.errMsg))
        }
    }
}

/** 展示插屏广告 */
const showAdChaPin = () => {
    if (wx.createInterstitialAd) {
        const intersitialAd = wx.createInterstitialAd({
            adUnitId: 'adunit-9bedc6aec11d47c0'
        })

        intersitialAd.show().catch(err => console.log(err.errMsg))
    }
}

module.exports = {
    shareConfig,
    showAdJiLi,
    showAdChaPin
}
