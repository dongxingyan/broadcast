(function() {
    var wsCommunicate = {
        ws: null,
        heartbeatTimer: 0,
        disconnected: false,
        // 连接WebSocket服务器
        connect: function () {
            var that = this;
            clearInterval(this.heartbeatTimer || -1);
            var websocket,
                ws_url = "wss://" + window.webSocketURL + "/cloudpServer/websocket/live/" + sessionStorage.getItem('liveID') + '?playId=' + sessionStorage.getItem('playID');
            // 检查是否已经存在Websocket链接
            if (that.ws) {
                if (that.ws.readyState != that.ws.CLOSED && that.ws.readyState != that.ws.CLOSING) {
                    return;
                }else {
                    that.ws.onclose = null;
                    that.ws.onerror = null;
                    that.ws = null;
                }
            }

            // 创建新的WebSocket链接
            if ('WebSocket' in window) {
                that.ws = new WebSocket(ws_url);
            } else if ('MozWebSocket' in window) {
                var MozWebSocket;
                that.ws = new MozWebSocket(ws_url);
            } else {
                return;
            }

            that.ws.onopen = function () {
                that.startHeartbeat();
            };
            that.ws.onmessage = that.onMessage.bind(this);
            that.ws.onclose = that.onClose.bind(this);
            that.ws.onerror = that.onSocketError.bind(this);
        },
        // WebSocket连接出错
        onSocketError: function (error) {
            console.log("websocket报错的原因",error)
            var that = this;
            that.ws.close();
            that.connect();
        },
        onConnected: function () {},
        onClose: function () {
            var that = this;
            if (!that.disconnected) {
                that.connect();
            }
        },
        onMessage: function (event) {
            var that = this;
            var data;
            try {
                data = JSON.parse(event.data);
                var nickname = sessionStorage.getItem('nickname');
                if (nickname) {
                    wsCommunicate.ws.send('nickname:'+ sessionStorage.getItem('nickname'));
                }

                if (data.type === 'connect' || data.type === 'close') {
                    // 如果类型是connect，则保存服务器端返回的sessionID，便于以后流量数据的传递。
                    if (data.type === 'connect') {
                        sessionStorage.setItem('sessionID', data.data.sessionId);
                    }
                    // 设置当前人数
                    $('#J-live-watch-num').text((data.data.count || 1) + '人正在观看直播');
                } else if (data.type == "chat") {
                    that.chat(data);
                }
            } catch (error) {
                data = event.data;
            }
        },
        startHeartbeat: function () {
            var that = this;
            that.heartbeatTimer = setInterval(function () {
                that.ws.send('heartbeat');
            }, 30000)
        },
        disconnect: function () {
            var that = this;
            that.disconnected = true;
            clearInterval(that.heartbeatTimer);
            try {
                that.ws.close();
                that.ws = null;
            } catch (error) {}
        },
        chat: function (data) {
            var that = this;
            if (data.type === 'chat') {
                var chatMsgItem =
                    '<div class="chat-item-container">'+
                        '<div class="chat-item-title-container">'+
                            '<div class="chat-person-name">' + data.data.nickname + '</div>'+
                            '<div class="chat-person-time">' + utils.formatDate(data.data.time * 1000)+ '</div>'+
                        '</div>'+
                        '<div class="chat-person-content">' + data.data.content + '</div>'+
                    '</div>';

                $('#J-chat-msg-container').append(chatMsgItem);
                // 实现滚动到聊天记录的最底部
                var $chatContainer = $('.mobile-live-chat-container, .live-chat-container');
                $chatContainer.scrollTop($chatContainer[0].scrollHeight);
            }
        }
    };
    var live = {
        $liveName: $('#J-live-name'),
        $liveWatchInfo: $('#J-live-watch-num'),
        $liveWatchMsg: $('#J-live-watch-msg'),
        $submitChatMsg: $('#J-submit-chat-msg'),
        $inputNickname: $('#J-input-nickname'),
        $liveNoStart: $('#J-live-no-start'),
        $liveAlreadyFinish: $('#J-live-already-finish'),
        $liveVideo: $('#J-live-video'),
        $videoElementOfNoIE: $('#live-video'),
        originLoadURL: null,
        playTimeArray: [],
        countStartTime: null,
        pauseStatus: 0,
        playStatus: 0,
        flowInfoTimer: null,

        init: function () {
            this.getLiveInfo(),  // 获取直播信息
            this.sendChatMsg(),  // 发送聊天消息
            this.setNickname()   // 点击设置昵称按钮后的操作
            this.customConsoleListener();   // 初始化console自定义事件
            this.listenerConsoleEvents();   // 定义console监听事件
        },
        // 向后端发送流量数据
        sendTrafficData: function (flag) {
            var that = this;
            var playID = sessionStorage.getItem('playID');
            var trafficData = '';

            /* 每隔1分钟 向后台发送当前客户端使用的流量信息*/
            that.flowInfoTimer = setInterval(function () {
                var sessionID = sessionStorage.getItem('sessionID');
                if (flag === 1) {   // 表明是IE内核的浏览器
                    if (!that.pauseStatus && that.countStartTime) {
                        var totalTime = new Date().getTime() - that.countStartTime;
                        if (that.playTimeArray.length) {
                            totalTime += that.playTimeArray.reduce(function (currentIndex, nextIndex) {
                                return currentIndex + nextIndex;
                            });
                        }
                        var checkSum = md5('duration=' + (totalTime / 1000) + '&playId=' + playID + '&sessionId=' + sessionID + '&traffic=-1');
                        trafficData = 'sessionId=' + sessionID + '&playId=' + playID + '&traffic=-1&duration=' + (totalTime / 1000) + '&checksum=' + checkSum;
                        console.warn('trafficData为：', trafficData);
                    }
                } else {    // 非IE内核浏览器
                    // 获取当前播放时长
                    var playTime = videojs('live-video').currentTime();
                    var sessionID = sessionStorage.getItem('sessionID');
                    if (!playTime || !isFinite(playTime)) {
                        return ;
                    }
                    var playListOfFlowCount = window.playListOfFlowCount ? window.playListOfFlowCount.mediaBytesTransferred : '-1';
                    var checkSum = md5('duration=' + playTime + '&playId=' + playID + '&sessionId=' + sessionID + '&traffic=' + playListOfFlowCount);
                    trafficData = 'sessionId=' + sessionID + '&playId=' + playID + '&traffic=' + playListOfFlowCount + '&duration=' + playTime + '&checksum=' + checkSum;
                    console.warn('chrome浏览器的流量数据为：', trafficData);
                }
                wsCommunicate.ws.send(trafficData);
            }, 10000);
        },
        // 播放直播
        playerLive: function (liveUrl) {
            var that = this;
            videojs('live-video').play();
        },
        // 获取直播信息
        getLiveInfo: function () {
            var that = this;
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: window.apiURL + '/v1/streaming/live/' + sessionStorage.getItem('liveID') + '/liveUrl',
                success: function (res) {
                    if (res.code === "0") {
                        // 与websocket建立连接
                        wsCommunicate.connect();
                        // 设置直播的名称
                        var liveName = res.title;
                        that.$liveName.text(liveName);
                        // 修改选项卡的标题为直播名称
                        $('title').text(liveName);

                        // 设置背景图片
                        var imgURL = window.imgURL + res.imgUrl;
                        // 根据该直播的状态，来修改页面上的显示
                        var status = res.status;    // 0 未开始；1 已开始；2 已结束
                        if (status == 0) {
                            that.$liveNoStart
                                .removeClass('hide')
                                .children(':last')
                                .text('预计开始时间 ' + res.startTime.substring(0, 16))
                                .css({
                                    'font-size': '17px',
                                    'margin-top': '10px'
                                });
                            that.$liveWatchInfo.addClass('hide');
                            that.$liveWatchMsg.removeClass('hide').text('直播还未开始，请耐心等待……');
                        } else if (status == 2) {
                            that.$liveAlreadyFinish.removeClass('hide');
                            that.$liveWatchInfo.addClass('hide');
                            that.$liveWatchMsg.removeClass('hide');
                            that.$liveWatchMsg.text('直播已结束，欢迎下次再来');
                        } else {
                            that.$liveWatchInfo.removeClass('hide');
                            that.$liveWatchMsg.addClass('hide');
                        }

                        // 判断当前用户是否已输入昵称
                        setTimeout(function() {
                            var nickname = sessionStorage.getItem('nickname');
                            if (nickname) {
                                that.$submitChatMsg.removeClass('hide');
                                wsCommunicate.ws.send('nickname:'+ sessionStorage.getItem('nickname'));
                            } else {
                                that.$inputNickname.removeClass('hide');
                            }
                        }, 200)
                        // 如果状态是未开始或已结束，则不用去加载播放器，直接去加载背景图就行了
                        if (status !== 1) {
                            $('video').css({
                                'background': 'url("'+ imgURL + '") center no-repeat',
                                'background-size': 'cover',
                                'background-position': 'center top'
                            })
                        } else {
                            var userAgent = navigator.userAgent.toLowerCase();
                            // 如果是IE内核的浏览器 去加载flowplayer播放器；否则使用videojs加载视频
                            if (userAgent.indexOf('trident') > -1) {
                                that.$videoElementOfNoIE.addClass('hide').next().removeClass('hide');
                                var flashvars = {
                                    f:'../js/ckplayer6.8/ckplayer/m3u8.swf',
                                    a:res.liveUrl,
                                    s:4,
                                    c:0,
                                    b:0,
                                    p:1,
                                };
                                var params={ bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent' };
                                CKobject.embedSWF('../live/js/ckplayer6.8/ckplayer/ckplayer.swf','player','ckplayer_player','750','451',flashvars,params);
                                that.sendTrafficData(1);
                            } else {
                                that.$videoElementOfNoIE.removeClass('hide').next().addClass('hide');
                                that.$liveVideo.attr('src', res.liveUrl);
                                that.playerLive(res.liveUrl);
                                that.sendTrafficData(0);
                            }
                        }
                    } else {
                        alert(res.message);
                    }
                }
            })
        },
        // 自定义console事件。目的：获取使用ckplayer播放器播放视频的时长
        customConsoleListener: function () {
            var oldLog = console.log;
            var oldWarn = console.warn;
            console.log = function (message) {
                // flash暂停事件
                if (
                    message == 'INFO:HLSNetStream:pause' ||
                    message == 'INFO:HLSNetStream:resume' ||
                    message == 'INFO:HLSNetStream:play(-1)' ||
                    message == '[drpeng]: load m3u8 address failure'
                ) {
                    // 创建HTMLEvent事件
                    var event = document.createEvent('HTMLEvents');
                    event.val = message;
                    // 初始化事件
                    event.initEvent('videoEvent', true, true);
                    // 发送事件
                    document.dispatchEvent(event);
                }
            }
        },
        // 自定义console的监听事件
        listenerConsoleEvents: function () {
            var that = this;
            // 监听播放暂停事件
            document.addEventListener('videoEvent', function (event) {
                if (event.val == 'INFO:HLSNetStream:pause') {
                    console.warn('监听了暂停事件');
                    that.pauseStatus = 1;
                    var playTimeDifferent = new Date().getTime() - that.countStartTime;
                    that.playTimeArray.push(playTimeDifferent);
                }
                if (event.val == 'INFO:HLSNetStream:play(-1)'|| event.val == 'INFO:HLSNetStream:resume') {
                    console.warn('监听了播放事件');
                    that.pauseStatus = 0;
                    that.countStartTime = new Date().getTime();
                }
                if (event.val == '[drpeng]: load m3u8 address failure') {
                    console.warn('监听了m3u8地址加载失败事件');
                    clearInterval(that.flowInfoTimer);
                    wsCommunicate.disconnect();
                }
            });
        },
        // 设置昵称
        setNickname: function () {
            $('#htmlContent').off('click').on('click', '#J-set-nickname', function(event) {
                var $nicknameInput = $(event.target).prev();
                var nickname = $nicknameInput.val().trim();
                console.log(nickname)
                if (nickname) {
                    console.warn('websocket对象状态：', wsCommunicate.ws);
                    wsCommunicate.ws.send('nickname:' + nickname);
                    setTimeout(function() {
                        sessionStorage.setItem('nickname', nickname);
                        $nicknameInput.parent().addClass('hide').prev().removeClass('hide');
                    }, 200)
                }
            })
        },
        // 发送聊天消息
        sendChatMsg: function () {
            $('#content').off('click').on('click', '#J-send-msg', function (event) {
                event.stopPropagation();
                var $chatMsgInput = $(event.target).prev();
                var chatMsg = $chatMsgInput.val();
                if (chatMsg) {
                    wsCommunicate.ws.send('chat:' + chatMsg);
                    setTimeout(function() {
                        $chatMsgInput.val('');
                    }, 200)
                }
            })
            $('#content').keyup('#J-send-msg-input', function (event) {
                if (event.keyCode === 13) {
                    var $chatMsgInput = $('#J-send-msg-input');
                    var chatMsg = $chatMsgInput.val();
                    if (chatMsg) {
                        wsCommunicate.ws.send('chat:' + chatMsg);
                        setTimeout(function() {
                            $chatMsgInput.val('');
                        }, 200)
                    }
                }
            })
        }
    };
    live.init();
    var utils = {
        // 格式化时间
        formatDate: function (time) {
            var nowTime = new Date(time);
            var nowHours = nowTime.getHours();
            var nowMinutes = nowTime.getMinutes();

            if (nowHours < 10) nowHours = '0' + nowHours;
            if (nowMinutes < 10) nowMinutes = '0' + nowMinutes;

            return nowHours + ' : ' + nowMinutes;
        }
    };
})()