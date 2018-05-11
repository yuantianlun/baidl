




$('.tem_head nav ul li').mouseenter(function() {
    $(this).children('a').stop().animate({'marginTop': '0px'}, 'slow', 'swing');
});
$('.tem_head nav ul li').mouseleave(function() {
    $(this).children('a').stop().animate({'marginTop': '-70px'}, 'slow', 'swing');
});


$('.dian_shanghai i').hover(function(){
    //console.log("123");
    $(".company_desc1").animate({"opacity":"1"},'fast');

},function(){
    $(".company_desc1").animate({"opacity":"0"},'fast');
})
$('.dian_dongjing i').hover(function(){
    //console.log("123");
    $(".company_desc2").animate({"opacity":"1"},'fast');

},function(){
    $(".company_desc2").animate({"opacity":"0"},'fast');
})
$('.dian_niuyue').hover(function(){
    //console.log("123");
    $(".company_desc3").animate({"opacity":"1"},'fast');

},function(){
    $(".company_desc3").animate({"opacity":"0"},'fast');
})
$('.dian_taiguo i').hover(function(){
    //console.log("123");
    $(".company_desc4").animate({"opacity":"1"},'fast');

},function(){
    $(".company_desc4").animate({"opacity":"0"},'fast');
})
$('.dian_yuenan i').hover(function(){
    //console.log("123");
    $(".company_desc5").animate({"opacity":"1"},'fast');

},function(){
    $(".company_desc5").animate({"opacity":"0"},'fast');
})

$('.dian_yindu i').hover(function(){
    //console.log("123");
    $(".company_desc6").animate({"opacity":"1"},'fast');

},function(){
    $(".company_desc6").animate({"opacity":"0"},'fast');
})


var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//console.log(h)
var pers=(950-h);
var hh=171-pers/2+"px";
//console.log(hh)
$(".section111").css("top","pers");


/*$("a").attr("href","#");*/


setTimeout(function(){$('.ttq_section1.active').addClass('dts_jz');$('#dts_index_dowebok .dts_section1').addClass('jr');},400);
/*setTimeout(function(){$('.ttq_section1.active').removeClass('dts_jz')},3000);*/

//console.log($('.ttq_section1'))

var juzw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//console.log(juzw)
if (juzw<=1366) {
    /*$(".juzshow_img1").attr("src","{$lang_company_img2}");*/
};
/*$('a').attr("href","#");*/
$('.dts_gotop a').attr("href","#page1");
/*$('.dts_foot p a').attr("href","http://www.redyue.org/");
$('.tem_head nav ul li:first-child a').attr("href","http://dts.y.redyue.org/");
$('.tem_head nav ul li:nth-child(2) a').attr("href","../dts_jj/");*/
$('.dts_foot_opc').mouseenter(function(){
    $('.dts_foot').animate({"bottom":"0"},'fast');
})


$('.dts_foot').mouseenter(function(){
    $('.dts_foot').animate({"bottom":"0"},'fast');
})
$('.dts_foot').mouseleave(function(){
    $('.dts_foot').animate({"bottom":"-80px"},'fast','swing');
})
$('.dts_foot_opc').mouseleave(function(){
    $('.dts_foot').animate({"bottom":"-80px"},'fast','swing');
})


$('#dts_dowebok .ttq_section1').removeClass("active");



/*首页*/
$('#dts_index_dowebok .dts_index_img3 .aaa').fadeOut();
$('#dts_index_dowebok .dts_index_img3 .index3_map').click(function(){
    $('#dts_index_dowebok .dts_index_img3 .index3_dtsmap').css({"border-width":"6px"});
    $('#dts_index_dowebok .dts_index_img3 .index3_dtsmap').animate({"height":"478px"},'fast','swing');
    $('#dts_index_dowebok .dts_index_img3 .aaa').delay(100).fadeIn();
})
$('#dts_index_dowebok .dts_index_img3 .index3_dtsmap .dtsmap_xx').click(function(){
    $('#dts_index_dowebok .dts_index_img3 .index3_dtsmap').animate({"height":"0","border-width":"0px"},'fast','swing');
    $('#dts_index_dowebok .dts_index_img3 .aaa').delay(100).fadeOut();
})

$('#dts_index_dowebok .dts_index_img3 .index3_company').click(function(){
    $('#dts_index_dowebok .dts_index_img3 .index3_dtcom').css({"border-width":"6px"});
    $('#dts_index_dowebok .dts_index_img3 .index3_dtcom').animate({"height":"478px"},'fast','swing');
    $('#dts_index_dowebok .dts_index_img3 .aaa').delay(100).fadeIn();
})
$('#dts_index_dowebok .dts_index_img3 .index3_dtcom .dtsmap_xx').click(function(){
    $('#dts_index_dowebok .dts_index_img3 .index3_dtcom').animate({"height":"0","border-width":"0px"},'fast','swing');
    $('#dts_index_dowebok .dts_index_img3 .aaa').delay(100).fadeOut();
})
if (juzw<=1366) {
    $('#dts_index_dowebok .dts_index_img3 .index3_map').click(function(){
        $('#dts_index_dowebok .dts_index_img3 .index3_dtsmap').css({"border-width":"6px"});
        $('#dts_index_dowebok .dts_index_img3 .index3_dtsmap').animate({"height":"400px"},200,'swing');
        $('#dts_index_dowebok .dts_index_img3 .aaa').delay(100).fadeIn();
    })
    $('#dts_index_dowebok .dts_index_img3 .index3_company').click(function(){
        $('#dts_index_dowebok .dts_index_img3 .index3_dtcom').css({"border-width":"6px"});
        $('#dts_index_dowebok .dts_index_img3 .index3_dtcom').animate({"height":"400px"},200,'swing');
        $('#dts_index_dowebok .dts_index_img3 .aaa').delay(100).fadeIn();
    })
}




var tr_length = $(".contact_idx2_con .feedback_table tr").length;
var text="";
for(var i=0;i<tr_length-1;i++){
    text =$(".contact_idx2_con .feedback_table tr").eq(i).find("td.text").text();
    $(".contact_idx2_con .feedback_table tr").eq(i).find("td.input .input-text").attr({"placeholder":text});
    $(".contact_idx2_con .feedback_table tr").eq(i).find("td.input textarea").attr({"placeholder":text});

}
for(var i=0;i<tr_length;i++){
    $(".contact_idx2_con .feedback_table tr").eq(i).attr({"class":i});
}
$(".contact_idx2_con .feedback_table tr").eq(0).addClass("col-xs-4");
$(".contact_idx2_con .feedback_table tr").eq(1).addClass("col-xs-4");
$(".contact_idx2_con .feedback_table tr").eq(2).addClass("col-xs-4");

function span(){
    $("#dts_dowebok_yw .yw_section3 .yw_con3_des ul li").eq(i).addClass("on").siblings().removeClass("on");
    i++
    if(i>4){
        clearTimeout("span()")
        $("#dts_dowebok_yw .yw_section3 .yw_con3_des ul li").removeClass("on");
        $("#dts_dowebok_yw .yw_section3 .yw_con3_des ul li").fadeIn(3500);
        $("#dts_dowebok_yw .yw_section3 .yw_con3_des ul li.des5").fadeIn(2000);
    }
}




$(".nav-toggle").click(function() {
    $("#sideli").toggleClass("sideclk");
    $("body").toggleClass("sideopen");
});
$(".shadow").click(function() {
    $("#sideli").toggleClass("sideclk");
    $("body").toggleClass("sideopen");
});



setTimeout(function(){
    $('.dts_section2').css({'opacity':"1"});
    $('.dts_section3').css({'opacity':"1"});
    $('.ttq_section2').css({'opacity':"1"});
    $('.ttq_section3').css({'opacity':"1"});
    $('.yw_section2').css({'opacity':"1"});
    $('.yw_section3').css({'opacity':"1"});
    $('.fa_section2').css({'opacity':"1"});

},1000);