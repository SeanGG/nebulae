/**
 * 百度统计log工具
 * @type {Object}
 */
module.exports = {
    setTj: function(url) {
        if (!window._hmt) {
            this.setHmt()
        } else {
            this.pushURL(url)
        }
        if (!window._za) {
            this.setIlog()
        } else {
            window._za.pushData(url)
        }
    },
    setHmt: function() {
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement('script')
            hm.src = 'https://hm.baidu.com/hm.js?e8ab2a47973dbcfb799bd3cb3b8d4e4f'
            var s = document.getElementsByTagName('script')[0]
            s.parentNode.insertBefore(hm, s)
        })()
    },
    setIlog: function() {
        (function() {
            var ilog = document.createElement('script')
            ilog.src = 'https://static.zhongan.com/website/public/js/ilog/dist/ilog.min.js'
            var s = document.getElementsByTagName('script')[0]
            s.parentNode.insertBefore(ilog, s)
        })()
    },
    pushURL: function(pageURL = '') {
        if (window._hmt) {
            window._hmt.push(['_trackPageview', pageURL])
        }
    },
    pushEvent: function(params = {}) {
        const { category, action, optLabel, optValue } = params
        if (window._hmt) {
            console.log(window._hmt)
            window._hmt.push(['_trackEvent', category, action, optLabel, optValue])
        }
    }
}
