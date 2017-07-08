//点播接口调用方法
module.exports = {
	//开始播放
	startPlay:function(){
		SewisePlayer.doPlay();
	},
	//暂停播放
	 playPause:function(){
			SewisePlayer.doPause();
	 },
	 //跳转
	seekTo : function (){
		SewisePlayer.doSeek(5);
	},
	//停止播放
	playStop : function (){
		SewisePlayer.doStop();
	},
	//更改音量
	changeVolume : function (){
		SewisePlayer.setVolume(0.1);
	},
	//获取总时间
	 getDuration: function(){
		alert(SewisePlayer.duration());
	},
	//获取当前时间
	getPlayTime : function(){
		alert(SewisePlayer.playTime());
	},
	 switchVideo : function(url){
		SewisePlayer.toPlay(url, "Sintel", 0, true);
	},
	//全屏
	 toFullScreen : function(){
		SewisePlayer.fullScreen();
	},
	//普通屏幕
	 toNoramlScreen : function(){
		SewisePlayer.noramlScreen();
	},
	 //缓冲进度
	 getBufferProgress : function() {
		alert(SewisePlayer.bufferProgress());
	},	
	//播放器回调方法
	playerReady : function(name){
		console.log("Sewise Player On Ready 1");
			SewisePlayer.playerReady(function(name){
		});
		//SewisePlayer.toPlay("http://www.w3school.com.cn/i/movie.mp4", "title", 0, false);
	},
	onStart : function(name){
       	SewisePlayer.onStart(function(name){
			 console.log("onStart 2");
		});
	},
    onStop : function(name){
		SewisePlayer.onStop(function(name){
		 console.log("onStop 2");
	});
	},
	onMetadata : function(meta, name){
		SewisePlayer.onMetadata(function(meta, name){
		 console.log("onMetadata 2");
		});
	},
	onClarity : function(clarity, name){
		SewisePlayer.onClarity(function(clarity, name){
		 console.log("onClarity 2");
		});
	},
 	 onPause : function(name){
		SewisePlayer.onPause(function(name){
		 console.log("onPause 2");
		});
	},
	 onSeek : function(time, name){
		SewisePlayer.onSeek(function(time, name){
		console.log("onSeek 2: " + time);
		});
	},
	 onPlayTime : function(time, name){
		SewisePlayer.onPlayTime(function(time, name){
			console.log("onPlayTime 2: " + time);
		});
	},
	 onBuffer : function(pt, name){
		SewisePlayer.onBuffer(function(pt, name){
			console.log("onBuffer 2: " + pt);
		});
	}
	
}

