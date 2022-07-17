
$(document).ready(function(){
//스타일도 컨텐츼도 모두 태그에서 관리하도록 프로그래밍하기
// data- 라는 태그옵션을 사용해라!!!
   $('#navi li a').each(function(){
       // 각자들 실행해 
       // 태그에서 텍스트와 스타일까지 관리가 가능하도록 했다.
       $(this).html($(this).data('krnm'))
       //각 a태그의 data옵션 krnm의 값을 저장해두고 출력하기
       $(this).css('color', $(this).data('color'))
       //각 a태그의 data옵션 color의 값으로 글자색을 처리하겠다.
       $(this).parent().css('border-color', $(this).data('color'))
   })

   //상품출력
   $("#product .thumb  h2").html(
    $("#product .thumb").data('prnm')
   ); //상품명 출력하기 공주실내화 노출하기
   //상품가격도전!
   $("#product .thumb  p").html(
    $("#product .thumb").data('price')
   );
   //상품이미지출력
   $("#product .thumb  img").attr('src', $("#product .thumb").data('img'))
   // attr 태그의 속성접근 메서드

 

})