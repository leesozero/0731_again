

    var navidata = [
        {
            d1 : ['회사소개','company.html'],
            d2 : [

                ['비전',''],
                ['인사말',''],
                ['주요연혁',''],
                ['CI 소개',''],
                ['찾아오시는길','w.html'],

                ]
        },
        {
            d1 : ['사업영역','company.html'],
            d2 : [

                ['소재사업','v.html'],
                ['포장설비 엔지니어링','c.html'],
             
                ]
        },
        {
            d1 : ['NEWS','n.html'],
            d2 : [
            ]
        },
        {
            d1 : ['구매조달시스템','n.html'],
            d2 : [
            ]
        }
    ]
    
    // console.log('a태그안의 값',navidata[1].d2[0][0],'href 링크값',navidata[1].d2[0][1])
    // for( var i in navidata )  반복 할건데.. 대메뉴... 변수 i에를 네비데이타에 넣고.. var in..
    // navitag 라는 변수는.. 맨위에 쌍따옴표로 ""; 세미콜론 닫고... for문 안에 
    // navitag 식을 써줘야 하는데.. += 추가대입식 으로 시작해야함.. 반복되는 대메뉴 할려면...
    // link 자리 식>> ${navidata[i].d1[1]}  
    // text 자리 식>> ${navidata[i].d1[0]}

    $(document).ready(function(){
        var navitag = "";
    
        for( var i in navidata ){
        
           navitag += `<li><a href='${navidata[i].d1[1]}'>${navidata[i].d1[0]}</a>` 
                for( var j in navidata[i].d2 ){ //각메뉴의 소메뉴정렬>>> j는 초... i분 j변수가 다 돌때까지 i는 증가하질 못하고 대기
                    if(j ==0) navitag += `<ul>`;
                    navitag += `<li><a href='${navidata[i].d2[j][1]}'>${navidata[i].d2[j][0]}</a>` 
                    if(j == navidata[i].d2.length -1) navitag += '</ul>'; // 제일 마지막 끝나고 추가

                }
           navitag += `</li>`
        }
        
        
       
        // navitag += `<li><a href='${navidata[0].d1[1]}'>${navidata[0].d1[0]}</a></li>` 
        // navitag += `<li><a href='${navidata[1].d1[1]}'>${navidata[1].d1[0]}</a></li>` 
        // navitag += `<li><a href='${navidata[2].d1[1]}'>${navidata[2].d1[0]}</a></li>` 
        // navitag += `<li><a href='${navidata[3].d1[1]}'>${navidata[3].d1[0]}</a></li>` 
        // 나자신은 어레이 라는데...ㅠㅠ?
        //  = 대입식 이고...navidata
        //  += 추가대입식...
   
        $('ul#navi').html(navitag);
     })

