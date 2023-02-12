

let num=0;
let timer=null;
let xxt=null;
 let m=-240;
 let l=100;
 let timer1 =null;
 let live=0;
 let sortable=null;

$(function(){
          $("#totop").click(function() {
             $("#elevator").css({"top":"245px"});
              $("html,body").animate({scrollTop:0},0);
          }); 
         })
          $(document).ready(function(){//在文档加载完毕后执行

          
           

           
            
          
            $(window).scroll(function(){//开始监听滚动条

                //获取当前滚动条高度
               
                
                var topp = $(document).scrollTop();
                //console.log("滚动"+topp);
                //用于调试 弹出当前滚动条高度

                //alert(topp);
                /*
                var winPos = $(window).scrollTop(); //屏幕位置
                var winHeight = $(window).height(); //屏幕高度
                var objPos = obj.offset().top       //元素位置
                var objHeight = obj.Height()   //元素高度
                */
           
                //判断如果滚动条大于90则弹出 "ok"
                if(flag){
                    if(topp<700){
                        $("#lb .sortable").removeClass("lieon");
                    }else if (topp > 800 && topp < 1300) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='1'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                       
                       
                        //console.log("点击了："+ $("#lb .sortable").html());
                        //console.log("跳转到直播");
                    } else if (topp > 1300 && topp < 1875) {
                        console.log("跳转到动画");
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='2'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 1875 && topp < 3015) {
                       // console.log("跳转到番剧");
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='3'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 3015 && topp < 4090) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='4'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 4090 && topp < 4690) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='5'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 4690 && topp < 5190) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='6'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 5190 && topp < 5665) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='7'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 5665 && topp < 6165) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='8'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 6165 && topp < 6665) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='9'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 6665 && topp < 7162) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='10'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 7162 && topp < 7663) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='11'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 7663 && topp < 8163) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='12'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 8163 && topp < 8663) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='13'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 8663 && topp < 9140) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='14'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 9140 && topp < 9637) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='15'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 9637 && topp < 10138) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='16'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 10138 && topp < 10638) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='17'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 10638 && topp < 11138) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='18'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    } else if (topp > 11138 && topp < 11637) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='19'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    }else if (topp > 11637 ) {
                        $("#lb .sortable").removeClass("lieon");
                        for(let s=0;s<$("#lb .sortable").length;s++){
                            if($("#lb .sortable").eq(s).data("ins")=='20'){
                                w=$("#lb .sortable").eq(s).addClass("lieon");
                            }
                        }
                    }
                }
               
                  
                     
                if(topp > 0){
                   
                   
                	if (topp>100) {
                        if(topp>11820){
                            var s=11900-topp;
                           // console.log("px"+s);
                           // console.log("topp"+topp);
                            $("#elevator").css({"top":+s+"px"});
                        }
                        else{
                            var l=445-topp;
                            if(l>80){
                                $("#elevator").css({"top":l+"px"});
                            }else{
                                $("#elevator").css({"top":"80px"});
                            }
                           
                        }
                		
                	}else{
                        var l=(-topp)+445;
                        $("#elevator").css({"top":l+"px"});

                		
                    }
                    
                    
                 

                }

            });
            //两个轮播开始
             change();
             livechange();
             let flag=true;
             
            
             $("#cover").click(function(){ $("#ontuo").click()});
            $("#ontuo").click(function(){
                if(flag){
                    $("#lb .sortable").removeClass("lieon");
                    $(this).css({"background-color":" #06A3D7"})
                    $("#sele path").css({"fill":" #fff"})
                   $("#bg233,#cover").css({"display":"block"})
                   console.log("开启拖动")
                   $( "#lb" ).sortable( "option", "disabled", false);
                 
                 
                }else{
                    console.log("关闭拖动")
                    $( "#lb" ).sortable( "option", "disabled", true );
                    $(this).css({"background-color":" #fff"})
                    $("#sele path").css({"fill":" #999"})
                    $("#bg233,#cover").css({"display":"none"})
                }
                flag=!flag
               
            });
            $("#ontuo").mouseenter(function(){
                $("#sele path").css({"fill":" #fff"})
                $(this).css({"background-color":" #06A3D7"})
            });
            $("#ontuo").mouseleave(function(){
                if(flag){
                    $("#sele path").css({"fill":" #999"})
                    $(this).css({"background-color":" #fff"})
                }
               
            });

            $("#lb .sortable").mousedown(function(){
                $(this).css({"line-height": "28px"})
            })
            $("#lb .sortable").mouseup(function(){
                $(this).css({"line-height": "24px"})
            })
            $("#lb .sortable").click(function(){
                let n=$(this).data("ins")-1;
                let x=0;
                
              
               // console.log($(this).data("ins")+"个lI");
                $("#lb .sortable").removeClass("lieon");
                $(this).addClass("lieon");
                

                switch(n){
                    case 0:
                        x = 800;
                        break;
                    case 1:
                        x = 1440;
                        break;
                    case 2:
                        x = 1975;
                        break;
                    case 3:
                        x = 3115;
                        break;
                    case 4:
                        x = 4090;
                        break;
                    case 5:
                        x = 4790;
                        break;
                    case 6:
                        x = 5290;
                        break;
                    case 7:
                        x = 5765;
                        break;
                    case 8:
                        x = 6265;
                        break;
                    case 9:
                        x = 6765;
                        break;
                    case 10:
                        x = 7262;
                        break;
                    case 11:
                        x = 7763;
                        break;
                    case 12:
                        x = 8263;
                        break;
                    case 13:
                        x = 8763;
                        break;
                    case 14:
                        x = 9240;
                        break;
                    case 15:
                        x = 9737;
                        break;
                    case 16:
                        x = 10238;
                        break;
                    case 17:
                        x = 10738;
                        break;
                    case 18:
                        x = 11238;
                        break;
                    case 19:
                        x = 11737;
                        break;
                }
                $("body,html").scrollTop(x);
               
            });
             $("#bili_anime .tab-switch-item").click(function(){
                $("#bili_anime .tab-switch-item").removeClass("on")
               // console.log($(this).index()+"个lI")
                let n=$(this).index()
              
                switch(n){
                    case 0:
                        $("#bili_anime .time-line-card").css({ "display": "flex" })
                        break;
                    case 1:
                        $("#bili_anime .time-line-card").css({ "display": "none" })
                        for(let p=0;p<9;p++){
                           
                            $("#bili_anime .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        
                        break;
                    case 2:
                        $("#bili_anime .time-line-card").css({ "display": "none" })
                        for(let p=0;p<6;p++){
                           
                            $("#bili_anime .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 3:
                        $("#bili_anime .time-line-card").css({ "display": "none" })
                        for(let p=0;p<5;p++){
                           
                            $("#bili_anime .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 4:
                        $("#bili_anime .time-line-card").css({ "display": "none" })
                        for(let p=0;p<11;p++){
                           
                            $("#bili_anime .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 5:
                        $("#bili_anime .time-line-card").css({ "display": "none" })
                        for(let p=0;p<3;p++){
                           
                            $("#bili_anime .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 6:
                        $("#bili_anime .time-line-card").css({ "display": "none" })
                        for(let p=0;p<4;p++){
                           
                            $("#bili_anime .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                   

                }
                
                $(this).addClass("on")
             });
             $("#bili_manga .tab-switch-item").click(function(){
                $("#bili_manga .tab-switch-item").removeClass("on")
               // console.log($(this).index()+"个lI")
                let n=$(this).index()
              
                switch(n){
                    case 0:
                        $("#bili_manga .time-line-card").css({ "display": "flex" })
                        break;
                    case 1:
                        $("#bili_manga .time-line-card").css({ "display": "none" })
                        for(let p=0;p<9;p++){
                           
                            $("#bili_manga .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        
                        break;
                    case 2:
                        $("#bili_manga .time-line-card").css({ "display": "none" })
                        for(let p=0;p<6;p++){
                           
                            $("#bili_manga .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 3:
                        $("#bili_manga .time-line-card").css({ "display": "none" })
                        for(let p=0;p<5;p++){
                           
                            $("#bili_manga .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 4:
                        $("#bili_manga .time-line-card").css({ "display": "none" })
                        for(let p=0;p<11;p++){
                           
                            $("#bili_manga .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 5:
                        $("#bili_manga .time-line-card").css({ "display": "none" })
                        for(let p=0;p<3;p++){
                           
                            $("#bili_manga .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                    case 6:
                        $("#bili_manga .time-line-card").css({ "display": "none" })
                        for(let p=0;p<4;p++){
                           
                            $("#bili_manga .time-line-card").eq(p).css({ "display": "flex" })
                        }
                        break;
                   

                }
                
                $(this).addClass("on")
             });
             $("#livve").mouseenter(function(){
                clearInterval(timer1); 
                //console.log("移入直播");
            });
            $("#livve").mouseleave(function(){
                livechange()
               // console.log("移出直播");
            });
              $("#ssuo").mouseenter(function(){
                let c = document.getElementById('ss');
                c.setAttribute('fill','blue');
            });
            $("#van").mouseenter(function(){
                clearInterval(timer);
//console.log("停止");
            });
             $("#van").mouseleave(function(){
                change();
                 
            });
             
             $("html,body").mouseleave(function(){
                
                clearInterval(xxt);
                $("#ap1").fadeOut(300);
                $("#yxzx1").fadeOut(300);
                $("#mh1").fadeOut(300);
                $("#zb1").fadeOut(300);
                $("#log1").fadeOut(300)
                $("#tgg").fadeOut(300)
                // console.log("移出html");
             });
 /*星星滚动图*/

 
 

             /*头部弹框
             头部弹框
             头部弹框

             头部弹框
             头部弹框
             头部弹框
             头部弹框
             头部弹框

             头部弹框
             */
          
			let navitem =null;
			function Hideallitem(){
				$("#yxzx1").hide();
				$("#zb1").hide();
				$("#mh1").hide();
            }
            $("#lgin").mouseenter(function(){

              //  console.log("移入log")
                donhua()
                $("#tgg").hide()
                $("#log1").fadeIn(300)
               
            });
           
            $("#zcbtn,#dlbtn").mouseenter(function(){

               // console.log("移入log")
                $("#lang-intro").fadeOut(300)
            });
            $("#tg").mouseenter(function(){

               // console.log("移入log")
                $("#tgg").fadeIn(300)
            });
            $("#tgg").mouseleave(function(){

               // console.log("移入log")
                $("#tgg").fadeOut(300)
            });
            $("#lj").mouseenter(function(){
                clearInterval(xxt);
              //  console.log("移入log")
                $("#lang-intro").fadeOut(300)
                $("#log1").fadeOut(300)
            });
           
            $("#log1").mouseleave(function(){
                clearInterval(xxt)   
               
                $("#log1").fadeOut(300)
          });
          $("#lang-change").mouseenter(function(){
            $("#lang-intro").fadeIn(300)
      });
          $("#lang-intro").mouseleave(function(){
            $("#lang-intro").fadeOut(300)
      });
          $("#zcc").mouseenter(function(){
            clearInterval(xxt);
           // console.log("移入log")
            $("#log1").fadeOut(300)
            $("#tgg").fadeOut(300)
        });
            
			$(".nav-link-ul li a").mouseenter(function(){
				navitem = $(this).parent().attr("id");
				if(navitem=="yxzx"){
					Hideallitem()
					$("#yxzx1").fadeIn(300)
				}
				else if(navitem=="zb"){
					Hideallitem()
					$("#zb1").fadeIn(300)
				}
				else if(navitem=="mh"){
                   
                    Hideallitem()
                   
                    $("#ap1").hide()
					$("#mh1").fadeIn(300)
                }
                else if(navitem=="ap"){
					Hideallitem()
					$("#ap1").fadeIn(300)
				}else if(navitem=="ss"){
                    $("#ap1").fadeOut(300)
                    $("#mh1").fadeOut(300)
                }
                else if(navitem=="hyg"){
                    $("#zb1").fadeOut(300)
                    $("#mh1").fadeOut(300)
                }
                else if(navitem=="fj"){
                    $("#yxzx1").fadeOut(300)
                    
                }
                else if(navitem=="nap"){
                    $("#ap1").fadeOut(300)
                    
                }

				
			})
			// 移动出弹框列表的时候列表消失
			$("#yxzx1").mouseleave(function(){
			//	console.log("233")
				$("#yxzx1").fadeOut(300)
			})
			$("#zb1").mouseleave(function(){
				$("#zb1").fadeOut(300)
			})
			$("#mh1").mouseleave(function(){
				$("#mh1").fadeOut(300)
            })
            $("#ap1").mouseleave(function(){
				$("#ap1").fadeOut(300)
			})

			$(".clearshow").mousemove(function(){
				if(navitem=="yxzx"){
					$("#yxzx1").fadeOut(300)
				}
				else if(navitem=="zb"){
					$("#zb1").fadeOut(300)
				}
				else if(navitem=="mh"){
					$("#mh1").fadeOut(300)
                }
                else if(navitem=="ap"){
                    $("#ap1").fadeOut(300);
                   // console.log("移出app")
                }
			})
		
});
         
function donhua(){
    clearInterval(xxt) 
    xxt=setInterval(function(){
        m-=1;
        l-=1;
     //  console.log("移动");
       if(m<-320){
           m=310;
           $("#im1").css({"left":"300px"});
       }else{
           $("#im1").css({"left":m+"px"});
       }
       if(l<-310){
           l=320;
   
           $("#im2").css({"left":"300px"});
       }else{
           $("#im2").css({"left":l+"px"});
       }
     
    },13);
}
function change(){
    clearInterval(timer) 
                timer=setInterval(function(){
                
                num++;
                if (num>5) {
                    num=0;
                    $("#gun").css("left",num+"px");
                }
                if (num==5) {
                      $("#trigger span").eq(0).addClass("active");

                $("#trigger span").not(":eq(0)").removeClass("active");
                }else{
                     $("#trigger span").eq(num).addClass("active");

                $("#trigger span").not(":eq("+num+")").removeClass("active");
                }
               
                $("#gun").animate({"left":-550*num+"px"},500);
               // console.log(num+"s");

            },2000);
        
        }
       
        function livechange(){
            clearInterval(timer1) 
                        timer1=setInterval(function(){
                        
                        live++;
                        if (live>3) {
                            live=1;
                            $("#livegun").css("left","0px");
                        }
                       
                       
                        $("#livegun").animate({"left":-320*live+"px"},500);
        
                    },2000);
                
                }
 function toi(data){
            switch(data){
                case 1:
                    num=5;
                    $("#gun").css("left","-2750px");
                    $("#trigger span").eq(0).addClass("active");

                    $("#trigger span").not(":eq(0)").removeClass("active");
                    break;
                case 2:
                    num=1;
                    $("#gun").css("left","-550px");
                    $("#trigger span").eq(1).addClass("active");

                    $("#trigger span").not(":eq(1)").removeClass("active");
                    break;
                case 3:
                    num=2;
                    $("#gun").css("left","-1100px");
                    $("#trigger span").eq(2).addClass("active");

                    $("#trigger span").not(":eq(2)").removeClass("active");
                    break;
                case 4:
                    num=3;
                    $("#gun").css("left","-1650px");
                    $("#trigger span").eq(3).addClass("active");

                    $("#trigger span").not(":eq(3)").removeClass("active");
                    break;
                case 5:
                    num=4;
                    $("#gun").css("left","-2200px");
                    $("#trigger span").eq(4).addClass("active");

                    $("#trigger span").not(":eq(4)").removeClass("active");
                    break;
               

            }
           // console.log(data);
        }
let lie=0;
function tt(s){
   
    if (s>0) {
         lie++;
        if (lie>2) {
            lie=0;
            $("#liegun").css("left","0px");

        }else{
             $("#liegun").css("left",(lie*-641)+"px");
        }
       

    }else{
         lie--;
         if (lie<0) {
            lie=2;
             $("#liegun").css("left",(lie*-641)+"px");
            

        }else{
            $("#liegun").css("left",(lie*-641)+"px");
        }

    }
}          


