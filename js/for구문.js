const navidata =  [
    {link_product_list:"/category/야구잠바/24/"
    ,name:"야구잠바"
    ,param:"?cate_no=24"
    ,cate_no:24
    ,design_page_url:"product/list.html"
    },
    {link_product_list:"/category/반팔티/25/"
    ,name:"반팔티"
    ,param:"?cate_no=25"
    ,cate_no:25
    ,design_page_url:"product/list.html"
    },
    {link_product_list:"/category/단체티/26/"
    ,name:"단체티"
    ,param:"?cate_no=26"
    ,cate_no:26
    ,design_page_url:"product/list.html"
    }
    ]

// var navitext = "<a href=\'"+navidata[0].design_page_url+"\'>'"+navidata[0].design_page_url+"'</a>"
// ec6 이상.... ec6 + 라고 표현...

// for(navidata[i]=0 [i]<i++){ 내가 작성한 구문 틀린 부분 보고 연구해 보기....
var star = '';
    
// for(var i=0; i < navidata.length; i++){ 
//      if(i == 0) star = " ---------------------- "; else i>{2} star = '----------------------';
//     console.log(star + navidata[i].name)
// }

for(var i=0; i < navidata.length; i++){ 
    if(i == 0) console.log('--------------------------')
    console.log(navidata[i].name)
    if(i == navidata.length -1 ) console.log('--------------------------')

}

// 여러번 처리하겠다... 콘솔 로그를...여러번 처리 하려 할때는 for문... for(var i in navidata){console.log(navidata[i].name)}
// navidata 는 반드시 array 이다. array를 하나하나 처리할때 발생하는 index....
// index를 담을 변수
// i는 index 라는거...

// 아닐때 는 비워두라... '' 따옴표 안에 아무것도 안하면됨




