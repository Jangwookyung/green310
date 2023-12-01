$(function(){


    // html에 소스를 추가하는 방법
    var imgs=''
    for(var a=0; a<200; a++){
        imgs +="<img src=img/pic"+a+".jpg>"
        console.log(imgs)
    }
    $('section').html(imgs)


    $('body').mousemove(function(e){
        var x = e.pageX
        var wd = $(window).width()
        // 자연수로 환산 - Math.floor
        var xNum = Math.floor((x/wd)*200)
        $('h1').text(xNum)

        // 속성값을 변경하는 방식 - 메서드 attr()
        // $('section img').attr({'src':'img/pic'+xNum+'.jpg'})


        // 지정된 숫자만 보여라
        $('section img').hide()
        $('section img').eq(xNum).show()
    })


})