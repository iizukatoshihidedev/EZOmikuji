//====================================
//
//簡単おみくじプログラム
//Toshihide Iizuka
//
//2021/03/23
//
//====================================

//Main

//データ
var masterdata = new Array();
var msgdata = new Array();
    
var isStop = false;

function init() {
    //おみくじ初期化
    masterdata.push("大吉","吉","中吉","小吉","凶","大凶","秀吉");
    msgdata.push("だよ！","がでたよ！","がでちゃった！","！！","...？！","ですよ！","だったよ！");
    
    omikuji();
}

function omikuji() {
    if ( isStop != true ) {
        var random = "";
        do {
            random = Math.floor( Math.random() * masterdata.length );
        }while( random == "" || random == null);
        
        var random2 = "";
        do {
            random2 = Math.floor( Math.random() * msgdata.length );
        }while( random2 == "" || random2 == null);
        
        var message = document.getElementById("message");
        message.innerHTML = masterdata[random] + msgdata[random2];
        
        delayedCall(0.1,function(){
            omikuji();
        });
    }
}
    
function start() {
    isStop = false;
    
    omikuji();
}
    
function stop() {
    isStop = true;
}
    
function clickbutton() {
    var btn_msg = document.getElementById("btn_msg");
    
    if ( isStop != true ) {
        //動いている時
        
        stop();
        btn_msg.innerHTML = "おみくじを回す";
    } else {
        //動いていない時
        start();
        btn_msg.innerHTML = "おみくじを止める";
    }
}
        
function delayedCall(second, callBack){
    setTimeout(callBack, second * 1000);
}