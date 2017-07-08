
var _urlBtn = document.getElementById("J_url-button");
_urlBtn.onclick = function () {
    var _videoUrl = document.getElementById("J_input-url").value;
    if (_videoUrl) {
        _player(_videoUrl);
    }
}
document.onkeydown=function(event) {
    if (event.keyCode == 13) {
        //回车键
        var _videoUrl = document.getElementById("J_input-url").value;
        if (_videoUrl) {
            _player(_videoUrl);
        }
    };
};
function _player (videoUrl) {
//http://jiaoyu.media.cloudp.cc/jiaoyu/data/video/hls/20160512/88e825b74fffac2b/FHD/20160512-88e8FHD.m3u8
    var flashvars = {
        f:'./live/js/ckplayer6.8/ckplayer/m3u8.swf',
        a:videoUrl,
        s:4,
        c:0,
        b:1,
        p:1,
    };
    var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
    CKobject.embedSWF('./js/ckplayer6.8/ckplayer/ckplayer.swf','player','ckplayer_player','1200','666',flashvars,params);
}
