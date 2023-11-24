// 제이쿼리 실행문
$(function(){

    var time = setInterval(function(){

        // 변수에 내장객체 시간정보 저장
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var hNum
        var mNum
        var sNum

        if(hr>=10){hNum = hr}
        else{hNum = '0'+hr}

        if(min>=10){mNum = min} 
        else{mNum = '0'+min}
            
        if(sec>=10){sNum = sec}
        else{sNum = '0'+sec}
        
        // 피규어 구간 안에 있는 span에 출력하기
        $('p span').eq(0).text(hNum)
        $('p span').eq(1).text(mNum)
        $('p span').eq(2).text(sec) 

        if(hr>=15){
            $('#wrap').removeClass()
            $('#wrap').addClass('afternoon')
        }

    },1000);

    // nav에 li를 클릭할때마다 #wrap의 테마가 바뀌어라
    // li의 자식에 내용을 찾아라
    // 자식의 내용을 변수로 저장

    // 변수를 #wrap의 addClass 이름으로 더해라
    // 이때 클래스를 더하기 전 모든 클래스를 먼저 없애라

    $('nav li').click(function(){
        var className = $(this).children('a').text()

        $('#wrap').removeClass()
        $('#wrap').addClass(className)

    })

})
