var $square = $('.open-square');
var $star = $('.open-star');
var $circle = $('.open-circle');

var animationTime ={
    openTime:5
}
opening();


function opening(){
    TweenLite.to($star, animationTime.openTime, {rotation:360, ease: Power2.easeInOut});
    TweenLite.to($circle, animationTime.openTime, {rotation:360, ease: Power2.easeInOut});
    TweenLite.to($square, animationTime.openTime, {rotation:-360, ease: Power2.easeInOut});

    TweenLite.to($circle, animationTime.openTime/2, {css: {scale:1.1}});
    TweenLite.to($circle, animationTime.openTime/2, {css: {scale:1}, delay:animationTime.openTime/2});

    TweenLite.to($square, 1.6, {css: {scale:7}, ease: Power2.easeInOut, delay:animationTime.openTime-1});
    TweenLite.to($circle, 1.6, {css: {scale:7}, ease: Power2.easeInOut, delay:animationTime.openTime-0.7});
    TweenLite.to($star, 0.6, {css: {scale:7}, ease: Power2.easeInOut, delay:animationTime.openTime-0.4, onComplete: function(){
        $('.opening>div').fadeOut(1000);
        $('.opening').css('background-color','#1469FF').delay(1000).animate({width:0}, 2000, function(){
           $('.opening').addClass('hide');
        });
        //QA1_Star();
    }});
}
//QA1_Star();
function QA1_Star(){
    
    
}


