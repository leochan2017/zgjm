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

    return { title, path }
}

module.exports = {
    shareConfig
}
