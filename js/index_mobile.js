
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
console.log("ERR  _ WINERO");
function _player (videoUrl) {
//http://jiaoyu.media.cloudp.cc/jiaoyu/data/video/hls/20160512/88e825b74fffac2b/FHD/20160512-88e8FHD.m3u8
    player.src({
        src: videoUrl,
        type: 'application/x-mpegURL',
        withCredentials: false
    });
    player.play();
}



var player = videojs('videoplayer');
