$(function(){


    // 윈도우의 높이값을 찾고
    // section의 높이값에 대입해라.
    var wht=$(window).height()
    $('section').height(wht);
    

    // 화면 크기가 바뀌었을때,
    // 윈도우의 높이값을 찾아
    // section의 높이값을 대입해라.
    $(window).resize(function(){
        var wht=$(window).height()
        $('section').height(wht)
    });


    // .gnb li를 클릭했을때,
    // li의 순번을 찾아라.
    // 클릭한 나 자신의 클래스 on값을 더해라.
    $('.gnb li').click(function(){
        var wht=$(window).height() // 윈도우 높이값 변수
        var i=$(this).index();

        $('.gnb li').removeClass('on')
        $(this).addClass('on');

        // html,body에 scrollTop easeOutBounce애니메이트 1초간 주기.
        $('html,body').animate({'scrollTop':wht*i},1000,'easeOutBounce')
    });

    
    // section에서 마우스 휠을 (실시간으로, 값을받아서)했을때,
    // 올리면 바뀌고 내리면 바뀌어라를 실행.
    $('section').mousewheel(function(event,delta){
        // 기본 동작을 중단
        event.preventDefault()

        // 마우스를 올렸을때
        if(delta>0){
            // 지금 나의 이전요소의 위치값을 찾아라
            var prev=$(this).prev().offset().top
            // html,body에 scrollTop easeOutBounce애니메이트 멈췄다가 1초간 주기
            $('html,body').stop().animate({'scrollTop':prev},1000,'easeOutBounce')
        }

        // 마우스를 내렸을때
        else if(delta<0){
            var next=$(this).next().offset().top
            $('html,body').stop().animate({'scrollTop':next},1000,'easeOutBounce')
        }

    });
    
    // 화면을 스크롤 했을때,
    // 스크롤의 위치값을 찾고.
    // 일정높이였을때 li에 on값을 더해라.
    $(window).scroll(function(){
        var wht=$(window).height() // 윈도우 높이값 변수
        var sc=$(this).scrollTop();
        // 스크롤의 위치값을 h1에 써라
        $('h1').text(sc)

        // 반복문 활용 /section 4개<5
        for(var h=0; h<5; h++){
            if(sc>=wht*h && sc<wht*(h+1)){
                // .gnb li에 on값을 더해라.
                $('.gnb li').removeClass('on')
                $('.gnb li').eq(h).addClass('on')
            }
        };
    });


})