(function() {
   window.liveTpl =
       '<link rel="stylesheet" href="./css/live/live-page.css">'+
       '<div class="live-name" id="J-live-name"></div>'+
       '<div class="live-content-container">'+
       '    <div class="live-video-play-container" >'+
                '<div class="meeting-not-start-container hide" id="J-live-no-start">'+
                    '<div class="meeting-not-start-text">直播还未开始</div>'+
                    '<div class="meeting-not-start-text"></div>'+
                '</div>'+
                '<div class="meeting-not-start-container hide" id="J-live-already-finish">'+
                    '<div class="meeting-not-start-text">直播已结束</div>'+
                '</div>'+
                '<video id="live-video" vjs-fluid class="video-js vjs-default-skin vjs-big-play-centered" controls autoplay preload="auto" data-setup="{}" poster=""><source id="J-live-video" type="application/x-mpegURL"></video>'+
                '<div id="player" class="player hide">'+
                    '<div style="height: 451px;width: 750px;"></div>'+
                '</div>'+
            '</div>'+
            '<div class="chat-container">'+
               '<div class="live-watch-num hide" id="J-live-watch-num">1人正在观看直播</div>'+
               '<div class="live-watch-num hide" id="J-live-watch-msg"></div>'+
               '<div style="background: #f0f0f0; height: 7px;"></div>'+
               '<div class="live-chat-container">'+
                    '<div class="chat-parent-container">'+
                       '<div class="submit-content-container" id="J-chat-msg-container">'+
                    '</div>'+
                    '<div class="input-chat-msg-container hide" id="J-submit-chat-msg">'+
                       '<div class="submit-msg-container">'+
                           '<input id="J-send-msg-input" type="text" placeholder="在这里输入发送信息" class="chat-msg-input">'+
                           '<input id="J-send-msg" type="button" value="发送" class="submit-msg-btn">'+
                       '</div>'+
                    '</div>'+
                    '<div class="pc-input-nickname-container hide" id="J-input-nickname">'+
                        '<div class="pc-input-nickname-title">输入昵称后进行互动</div>'+
                        '<input type="text" placeholder="昵称" class="pc-nickname-msg-input" maxlength="10">'+
                        '<div id="J-set-nickname" class="pc-submit-nickname-btn">确定</div>'+
                    '</div>'+
               '</div>'+
            '</div>'+
        '</div>';

    window.liveMobileTpl =
        '<link rel="stylesheet" href="./css/live/live-mobile-page.css">'+
        '<div class="live-content-container">'+
            '<div class="mobile-live-name" id="J-live-name"></div>'+
            '<div class="live-video-play-container" >'+
                '<div class="meeting-not-start-container hide" id="J-live-no-start">'+
                    '<div class="meeting-not-start-text">直播还未开始</div>'+
                    '<div class="meeting-not-start-time"></div>'+
                '</div>'+
                '<div class="meeting-not-start-container hide" id="J-live-already-finish">'+
                    '<div class="meeting-not-start-text">直播已结束</div>'+
                '</div>'+
                '<video id="live-video" src="" class="video-js vjs-default-skin vjs-big-play-centered" controls autoplay preload="auto" data-setup="{}" poster="../../imgs/bg.png"><source id="J-live-video" src="" type="application/x-mpegURL" playsinline webkit-playsinline></video>'+
            '</div>'+
            '<div style="width: 90%"><div class="mobile-live-watch-num hide" id="J-live-watch-num">1人正在观看直播</div></div>'+
            '<div style="width: 90%; line-height: 31px;"><div class="mobile-live-watch-num hide" id="J-live-watch-msg"></div></div>'+
            '<div style="background: #f5f5f5; line-height: 7px; width: 90%; margin: 0 auto; color: #f5f5f5;">……</div>'+
            '<div class="mobile-live-chat-container">'+
                '<div class="mobile-chat-container hide" id="J-submit-chat-msg">'+
                    '<div class="submit-content-container" id="J-chat-msg-container"></div>'+
                    '<div class="mobile-input-chat-msg-container">'+
                        '<div class="mobile-submit-msg-container">'+
                            '<input type="text" placeholder="在这里输入发送信息" class="mobile-chat-msg-input">'+
                            '<div id="J-send-msg" class="mobile-submit-msg-btn">发送</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="mobile-input-nickname-container hide" id="J-input-nickname">'+
                    '<div class="input-nickname-title">输入昵称后进行互动</div>'+
                    '<input type="text" placeholder="昵称" class="nickname-msg-input" maxlength="10">'+
                    '<div id="J-set-nickname" class="submit-nickname-btn">确定</div>'+
                '</div>'+
            '</div>'
})()
