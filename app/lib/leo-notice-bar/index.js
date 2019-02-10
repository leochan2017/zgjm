const VALID_MODE = ['closeable'];
const FONT_COLOR = '#f60';
const BG_COLOR = '#fff7cc';
const APP = getApp()
// 是否强制显示 这个优先级必须最高。用于控制上面的show是否显示
let _isClickClose = false

Component({
    externalClasses: ['i-class'],
    properties: {
        closable: {
            type: Boolean,
            value: false
        },
        icon: {
            type: String,
            value: ''
        },
        loop: {
            type: Boolean,
            value: false
        },
        // 背景颜色
        backgroundcolor: {
            type: String,
            value: '#fefcec'
        },
        // 字体及图标颜色
        color: {
            type: String,
            value: '#f76a24'
        },
        // 滚动速度
        speed: {
            type: Number,
            value: 1000
        }
    },
    data: {
        show: false,
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null
    },
    detached() {
        this.destroyTimer();
    },
    // 组件所在页面的生命周期声明对象
    // 支持页面的 show 、 hide 等生命周期
    pageLifetimes: {
        show() {
            this.checkShow()
        }
    },
    ready() {
        if (this.data.loop && this.data.show) {
            this.initAnimation()
        }
    },
    methods: {
        initAnimation() {
            wx.createSelectorQuery().in(this).select('.i-noticebar-content-wrap').boundingClientRect((wrapRect) => {
                wx.createSelectorQuery().in(this).select('.i-noticebar-content').boundingClientRect((rect) => {
                    const duration = rect.width / 40 * this.data.speed;
                    const animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: "linear",
                    });
                    this.setData({
                        wrapWidth: wrapRect.width,
                        width: rect.width,
                        duration: duration,
                        animation: animation
                    }, () => {
                        this.startAnimation();
                    });
                }).exec();
            }).exec();
        },
        startAnimation() {
            //reset
            if (this.data.animation.option.transition.duration !== 0) {
                this.data.animation.option.transition.duration = 0;
                const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            const animationData = this.data.animation.translateX(-this.data.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: animationData.export()
                });
            }, 100);
            const timer = setTimeout(() => {
                this.startAnimation();
            }, this.data.duration);
            this.setData({
                timer,
            });
        },
        destroyTimer() {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleClose() {
            this.destroyTimer();
            this.setData({
                show: false,
                timer: null
            })
            _isClickClose = true
        },
        // 判断是否需要显示
        checkShow() {
            const scene = APP.globalData.scene
            const key = 'IS_FAVOURITE'
            let show = false

            console.log('_isClickClose', _isClickClose)
            // 如果点击了关闭，是最高优先级的
            if (_isClickClose) {
                show = false
            } else {
                console.log('scene val: ', scene)
                try {
                    const IS_FAVOURITE = wx.getStorageSync(key)
                    console.log('IS_FAVOURITE val:', IS_FAVOURITE)
                    if (!IS_FAVOURITE) {
                        if (scene === 1001 || scene === 1089) {
                            wx.setStorage({ key, data: true })
                        } else {
                            show = true
                        }
                    }
                } catch (e) {
                    console.log('wx.getStorageSync error:', e)
                }
            }

            // dev code
            // show = true

            this.setData({ show })
            return show
        }
    }
})