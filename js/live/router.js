/*
封装路由方法
 */
function Router () {
    this.routes = {};
}

Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};
};

Router.prototype.refresh = function() {
    var locationHashURL = location.hash.slice(1) || '/';
    var liveID = locationHashURL.split('/')[1];
    if (locationHashURL === '/') {
        alert('您输入的地址有问题，请检查');
        return ;
    }
    // hash change时判断跳到那个页面
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: window.apiURL + '/v1/streaming/live/' + liveID + '/authority',
        data: {},
        success: function (res) {
            if (res.code === "0") {
                // 把liveID存在sessionStorage中
                sessionStorage.setItem('liveID', liveID);
                sessionStorage.setItem('playID', window.getUUID());

                var authority = res.authority;
                if (authority === 1) {
                    if(window.isMobile || window.isTable){
                        document.getElementById('content').innerHTML = window.loginMobileTpl;
                    } else {
                        document.getElementById('content').innerHTML = window.loginTpl;
                    }
                    $.getScript('./js/live/login.js');
                } else {
                    if(window.isMobile || window.isTable){
                        document.getElementById('content').innerHTML = window.liveMobileTpl;
                    } else {
                        document.getElementById('content').innerHTML = window.liveTpl;
                    }
                    $.getScript('./js/live/live.js?_1497604702336');
                }
            } else {
                alert('服务器错误，请稍后重试');
            }
        },
        error: function (res) {
            var userAgent = navigator.userAgent.toLowerCase();
            if (
                userAgent.indexOf('trident') > -1 && userAgent.indexOf('trident/5.0')
            ) {
                alert('非常抱歉，当前版本浏览器不支持观看直播，请升级到IE10以上版本');
                return ;
            }
            alert('服务器错误，请稍后重试');
        }
    })
};

Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

window.Router = new Router();
window.Router.init();