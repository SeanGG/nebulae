/**
 * 微信分享
 */
import * as http from './http.js'
import * as platform from './platform.js'
// import wx from 'https://res.wx.qq.com/open/js/jweixin-1.0.0.js'
import wx from 'weixin-js-sdk'

let share = {
    // 设置
    set(config, link, cb) {
        // if (!platform.isWeixin()) {
        //     return
        // }
        this.getToken(link, (warn, res) => {
            // console.log(warn)
            // console.log(res)
            if (warn) {
                // return
                res = warn
            }
            wx.config({
                debug: window._za_share_debug_ === !0,
                appId: res.appid,
                timestamp: res.timestamp,
                nonceStr: res.noncestr,
                signature: res.signature,
                jsApiList: 'checkJsApi;onMenuShareTimeline;onMenuShareAppMessage;onMenuShareQQ;onMenuShareWeibo;hideMenuItems;showMenuItems;hideAllNonBaseMenuItem;showAllNonBaseMenuItem;previewImage;chooseImage;uploadImage;downloadImage;startRecord;stopRecord;onVoiceRecordEnd;playVoice;stopVoice;onVoicePlayEnd;uploadVoice;downloadVoice;addCard;chooseCard;openCard;openLocation;getLocation;chooseWXPay'.split(';')
            })
            let shareConfig = Object.assign({}, config)
            shareConfig.imgUrl = 'https://static.zhongan.com/website/mobile/assets/images/public/qrlogo.jpg'
            wx.ready(function() {
                // alert(JSON.stringify(res))
                wx.onMenuShareAppMessage(shareConfig)
                wx.onMenuShareTimeline(shareConfig)
                wx.onMenuShareQQ(shareConfig)
                wx.onMenuShareWeibo(shareConfig)
                if (cb) {
                    cb()
                }
            })
        })
    },
    // 获取token
    getToken(link, callback) {
        http.get({
            url: 'https://m.zhongan.com/open/common/WeiXinScreen/getWeiXinSign.json',
            data: {
                url: link || window.location.href.split('#')[0]
            }
        }).then(obj => {
            callback(null, obj)
        })
        .catch(err => {
            callback(err)
        })
    }
}

try {
} catch (e) {
}

export default share
