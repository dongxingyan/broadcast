(function(){
    var liveLogin = {
        init: function () {
            this.joinLive()
        },
        // 点击进入直播按钮 执行的操作
        joinLive: function () {
            var that = this;
            // 检查验证码
            $('#content').off('click').on('click', '#J-join-live', function (e) {
                var $verifyCode = $('#verifyCode').val();
                var $nickname = $('#nickname').val();
                var $loginTip = $('#J-login-tip');

                // 清空之前的提示设置
                $loginTip.text('').parent().addClass('hide');

                if (!$verifyCode.trim()) {
                    $loginTip.text('请输入验证码').parent().removeClass('hide');
                    return ;
                }

                if (!$nickname.trim()) {
                    $loginTip.text('请输入昵称').parent().removeClass('hide');
                    return ;
                }
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: window.apiURL + '/v1/streaming/live/' + sessionStorage.getItem('liveID') + '/check?authCode=' + $verifyCode,
                    success: function (res) {
                        if (res.code === "0") {
                            sessionStorage.setItem('nickname', $nickname);

                            if(window.isMobile || window.isTable){
                                document.getElementById('content').innerHTML = window.liveMobileTpl;
                            } else {
                                document.getElementById('content').innerHTML = window.liveTpl;
                            }
                            $.getScript('./js/live/live.js');
                        } else if (res.code === "6") {
                            $loginTip.text('验证码错误，请重新输入').parent().removeClass('hide');
                            return ;
                        } else {
                            alert(res.message);
                            $loginTip.text(res.message).parent().removeClass('hide');
                            return ;
                        }
                    }
                })
            })
        },
    };
    liveLogin.init();
})()