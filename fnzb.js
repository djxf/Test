auto("fast");
//子线程点击确定
threads.start(function(){
    while(true){
        var re_cancle = text(cancle).findOne();
        if(re_cancle.text()=="取消"){
            click(ok);
          }else{
            log("未找到控件 但执行函数成功");
            //toast("null");
        }
        //click(ok);
        //log(threads);
        //log(ok);
        if(currentPackage()!=package_name){
            // toast(todo_exit);
            //心碎;
        }else{
            log(currentPackage);
        }
         //查找须设置超时时间否则陷入死循环
    var bt_helpBuy = text(helpbuy).findOne(200);
    if(bt_helpBuy != null){
        if(bt_helpBuy.text == "帮买"){
            toast("已检测到帮买");
            click("抢单");
        }
    }
    }
});

var ok = "确认";
var helpbuy = "帮买"
var threads = "子线程";
var main_thread = "主线程";
var refresh = "刷新订单";
var order = "确认抢单"
var todo = "成功打开蜂鸟众包平台 即将为你抢单"
var todo_exit = "检测到已退出平台 已停止抢单 抢单请重新打开"
var package_name = "me.ele.crowdsource";
var cancle = "取消";
var isOpen;
auto("fast");
isOpen = app.launchPackage(package_name);
if(isOpen){
    sleep(100);
    toast(todo);
}
//主线程
while(true){
    //线程睡眠 延迟点击速度 防止被屏蔽
    sleep(100);
    click(refresh);

    //查找须设置超时时间否则陷入死循环
    var bt_helpBuy = text(helpbuy).findOne(250);
    if(bt_helpBuy != null){
        if(bt_helpBuy.text == "帮买"){
            toast("已检测到帮买");
            click("抢单");
        }
    }
   
    
    //抢单提醒
    var block = text("抢单").findOne(250);
  
    if(block!=null){
        device.vibrate(100);
        sleep(60000);
        toast("有单子啦 快来抢啊");
        click("抢单");
    }


   
    if(currentPackage()!=package_name){
        //toast(todo_exit);
        log(currentPackage());
        //心碎;
        //心碎会退出当前循环if不会阻止此函数执行。
    }else{
        log(currentPackage());
    }
    
    var re_cancle = text(cancle).findOne(100);
    if(re_cancle!=null){
            click(ok);
    }else{
            log("未找到控件 但执行函数成功");
            //toast("null");
    }
   // log(main_thread);
}