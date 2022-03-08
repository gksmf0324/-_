$(function() {

    let items = $('.issue-slide .item')
    let totalPage = items.length
    let slidePage = 1

    $('.current-page').text(slidePage)
    $('.total-page').text(totalPage)




     // 메인이미지 슬라이드 시작!
     $('.slide-item ul').slick({
        dots: false,
        arrows: true,

        draggable : true, 	            //드래그 가능 여부 

        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 6000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수


        // pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        // pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        // pauseOnHover: true,             // 호버 시, 자동재생 멈춤


        /* 효과 */
        // fade: true,
        // cssEase: 'linear',


        // // 네비게이션 화살표 커스텀
        // prevArrow: '<span class="slide-arrow prev-arrow"></span>',
        // nextArrow: '<span class="slide-arrow next-arrow"></span>',


    })

    


    // 슬릭 슬라이드 시작!
    $('.issue-slide').slick({
        dots: false,
        arrows: true,

        draggable : true, 	            //드래그 가능 여부 

        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤


        /* 효과 */
        // fade: true,
        // cssEase: 'linear',


        // 네비게이션 화살표 커스텀
        prevArrow: '<span class="slide-arrow prev-arrow"></span>',
        nextArrow: '<span class="slide-arrow next-arrow"></span>',


    })

  

    // 일시정지
    $('.pause').on("click", function() {
        // 자동재생 일시정지
        $('.issue-slide').slick('slickPause')

        $('.pause').toggleClass('hide')
        $('.play').toggleClass('hide')
    })

    // 재생
    $('.play').on("click", function() {
        // 자동재생 재생
        $('.issue-slide').slick('slickPlay')

        $('.pause').toggleClass('hide')
        $('.play').toggleClass('hide')
    })
    
    // 이전
    $('.prev').on("click", function() {
        $('.prev-arrow').trigger('click')

        if( slidePage == 1 ) {
            slidePage = totalPage
        } else {
            slidePage--
        }

        $('.current-page').text(slidePage)
    })
    
    // 다음
    $('.next').on("click", function() {
        $('.next-arrow').trigger('click')
        
        if( slidePage == totalPage ) {
            slidePage = 1
        } else {
            slidePage++
        }
        
        $('.current-page').text(slidePage)
    })


    /*추천여행지--------------------------------------- */
    $('.trip-slide-box .slide')
        .slick({
            dots: false,
            arrows: true,

            draggable : false, 	            //드래그 가능 여부 

            autoplay: true,                 // 자동재생 여부
            autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
            infinite: true,                 // 무한 반복 
            speed:500,                      // 슬라이드가 전환되는 시간


            centerMode: true,               // 센터 모드
            variableWidth: true,            // 슬라이드 가변 크기 여부
            // centerPadding: '60px',       // 센터 모드 시, 내부여백
            slidesToShow: 3,                // 보여질 슬라이드 개수
            slidesToScroll: 1,              // 스크롤될 슬라이드 개수

            centerMode: true,

            pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
            pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
            pauseOnHover: true,             // 호버 시, 자동재생 멈춤


            /* 효과 */
            // fade: true,
            // cssEase: 'linear',


            // 네비게이션 화살표 커스텀
            prevArrow: '<span class="slide-arrow prev-arrow"></span>',
            nextArrow: '<span class="slide-arrow next-arrow"></span>',


        })
 

        


})