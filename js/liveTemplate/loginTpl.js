(function() {
    window.loginTpl =
        '<link rel="stylesheet" href="./css/live/login.css">'+
        '<div class="login-modal-container">'+
            '<div class="login-content-container">'+
                '<div class="drpeng-login-logo"></div>'+
                '<div class="login-tip-container hide"><div id="J-login-tip" class="login-tip"></div></div>'+
                '<input id="verifyCode" class="verify-code-input" type="text" placeholder="验证码">'+
                '<input id="nickname" class="nickname-input" type="text" placeholder="昵称" maxlength="10">>'+
                '<div class="start-live-button" id="J-join-live">进入直播</div>'+
            '</div>'+
        '</div>';

    window.loginMobileTpl =
        '<link rel="stylesheet" href="./css/live/login-mobile.css">'+
            '<div class="login-mobile-modal-container">'+
                '<div class="login-mobile-content-container">'+
                '<div class="drpeng-login-mobile-logo"></div>'+
                '<input id="verifyCode" class="mobile-verify-code-input" type="text" placeholder="验证码">'+
                '<input id="nickname" class="mobile-nickname-input" type="text" placeholder="昵称" maxlength="10">'+
                '<div class="mobile-start-live-button" id="J-join-live">进入直播</div>'+
            '</div>'+
        '</div>';
})()

