// 제이쿼리 설정

$(function(){
    // fa-bars를 클릭했을때, nav에 on이라는 클래스를 더하고
    // section에 on이라는 클래스를 더한다.
    
    $('.fa-bars').click(function(){
        $('nav').addClass('on')
        $('section').addClass('on')
        
        $(this).fadeOut(1500)
    });

    // nav li를 클릭했을때, 순서를 찾아서 변수로 바꾸어라.
    // section>div의 순번에 맞게 클래스 on 값을 더해라.
    $('nav li').click(function(){

        var i=$(this).index();

        $('section>div').removeClass('on')
        $('section>div').eq(i).addClass('on')

        $('nav').removeClass('on')
        $('section').removeClass('on')

        $('.fa-bars').fadeIn('fast')
    })

})