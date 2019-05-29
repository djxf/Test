auto("fast");

//生成从minNum ~ maxNum的随机数
function getrandomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}

//子线程点击确定 同时查找单子
threads.start(function(){
    while(true){
        var re_cancle = text(cancle).findOne();
        if(re_cancle.text()=="取消"){
            click(ok);
          }else{
            log("未找到控件 但执行函数成功");
        }
        if(currentPackage()!=package_name){
            // toast(todo_exit);
        }else{
            log(currentPackage);
        }
         //查找须设置超时时间否则陷入死循环
         var bt_helpBuy = id(qdId).findOne(250);
         if(bt_helpBuy != null){
                 toast("已检测到抢单");
                 var trueC = bt_helpBuy.click();
         }
         if(trueC){
            click(ok);
         }
    }
});

var ok = "确认";
var helpbuy = "抢单"    //新版本中抢单已经不是文字
var qdId = "ia";        //抢单按钮的id
var threads = "子线程";
var main_thread = "主线程";
var refresh = "刷新订单";
var order = "确认抢单"
var todo = "成功打开蜂鸟众包平台 即将为你抢单"
var todo_exit = "检测到已退出平台 已停止抢单 抢单请重新打开"
var package_name = "me.ele.crowdsource";
var cancle = "取消";
var isOpen;             //记录打开蜂鸟是否成功
auto("fast");
isOpen = app.launchPackage(package_name);
if(isOpen){
    sleep(100);
    toast(todo);
}
//主线程
while(true){
    //线程睡眠 延迟点击速度 防止被屏蔽
    var randomtime = getrandomNum(5,20);
    toast("本次暂停的随机时间："+ randomtime);
    sleep(randomtime*1000);
    click(refresh);
    //查找须设置超时时间否则陷入死循环 id = ia
    var bt_helpBuy = id(qdId).findOne(250);
    if(bt_helpBuy != null){
            device.vibrate(100);
            toast("已检测到抢单");
            bt_helpBuy.click();
    }
    if(currentPackage()!=package_name){
        log(currentPackage());
        //会退出当前循环if不会阻止此函数执行。
    }else{
        log(currentPackage());
    }
    var re_cancle = text(cancle).findOne(100);
    if(re_cancle!=null){
            click(ok);
    }else{
            log("未找到控件 但执行函数成功");
    }
}