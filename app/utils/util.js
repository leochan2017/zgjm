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
  const globalData = APP.globalData || {}
  globalData.debug && console.log('来啦老弟 globalData', globalData)

  const today = new Date().getDate()

  /** 展示广告 */
  function _showAd() {
    if (globalData.isMore204 && typeof wx.createRewardedVideoAd === 'function') {
      globalData.debug && console.log('展示激励广告')
      const videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-ff76dd10ecad5eba'
      })

      if (typeof videoAd.load === 'function') {
        videoAd
          .load()
          .then(() => videoAd.show())
          .catch(err => console.log(err.errMsg))
      }

      wx.setStorage({
        key: 'lastadjili',
        data: today
      })
    }
  }

  function _main() {
    // 先判断今天是否展示过激励广告了
    try {
      const lastadjili = wx.getStorageSync('lastadjili')
      globalData.debug && console.log('lastadjili', lastadjili)
      globalData.debug && console.log('today', today)
      if (lastadjili === today) {
        globalData.debug && console.log('今天看过激励广告了，明天请早')
      } else {
        _showAd()
      }
    } catch (err) {
      console.log('wx.getStorageSync error', err)
    }
  }

  _main()
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
