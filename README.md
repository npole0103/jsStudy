# jsStudy

Javascript

---

## 문법

스크립트 태그 : 자바스크립트를 사용하기 위한 태그 `<script>스크립트내용</script>`

``` html
<script>
    document.write("Hello World");
</script>
```

이벤트 : onclick, onchange, onkeydown 속성 등을 사용자의 요청에 따라 처리해주는 이벤트라고 지칭함.

hi라는 버튼을 누르면 hi라는 문구가 뜬다.  
 `<input type="button" value="hi" onclick="alert('hi')">`

text창에 변화가 있으면 changed라는 문구를 띄운다.  
`<input type="text" onchange="alert('changed')">`

text창에서 키를 누르면 key down!!이라는 문구를 출력한다.  
`<input type="text" onkeydown="alert('key down!!')">`

이벤트 속성의 속성 값으로는 반드시 자바스크립트가 와야한다. 

---
### 데이터 타입
Boolean : true / false

Null : 널

Undefined : 값을 할당하지 않은 변수는 undefined

Number : 숫자 값이 보통 표현됨.

String : 텍스트 데이터 나타낼 때 사용.

Symbol : 유일하고 변경 불가능한 값.

`A == B` : 숫자형이든 문자형이든 상관 않고 true로 반환. 10 == "10" True

`A === B` : 표기된 숫자와 더불어 자료형 까지 일치해야 true를 반환함.

---

### string method
`"abc".length` : 문자열의 길이를 나타냄

`"abc".toUpperCase()` : 문자열을 모두 대문자로 치환함.

`"abc".indexOf("b")` : 인자에 전달된 값이 몇번째 index에 위치했는지 알려줌.

`"abc".trim()` : 공백을 삭제해 줌.

### 변수

var 변수 / const 상수

`var name = 'suheon';`  가급 적이면 var을 앞에 붙이기.


---

버튼을 누르면 body 요소에 있는 배경과 글자색을 바꿔주는 코드.
``` html
<input type="button" value="night" onclick="
document.querySelector('body').style.backgroundColor='black';
document.querySelector('body').style.color='white';
">
```

---
### 조건문

토글 : 하나의 설정 값으로부터 다른 값으로 전환하는 것.

`===` : equal 연산자. 반환값은 true와 false이다.

boolean : true / false

 ``` html
    <br>
    중복의 제거 / 리펙토링
    <br>

    <input id='night_day'type="button" value="night" onclick="
    var target = document.querySelector('body');
    if(this.value === 'night')
    {
    target.style.backgroundColor='black';
    target.style.color='white';
    this.value = 'day';
    }
    else
    {
    target.style.backgroundColor='white';
    target.style.color='black';
    this.value = 'night';
    }
    ">

 ```

### Loop & Array

``` html

    <h1>Array</h1>
    <h2>Syntax</h2>
    <script>
        var coworkes = ["suheon", "hi"];
    </script>
    <h2>get</h2>
    <script>
        document.write(coworkes[0]);
        document.write(coworkes[1]);
    </script>

    <h2>Add</h2>
    <script>
        coworkes.push('duru');
        coworkes.push('taeho');
    </script>

    <h2>Count</h2>
    <script>
        document.write(coworkes.length);
    </script>




        <script>
            document.write('<li>1</li>');
            var i = 0;
            while (i < 3) {
                document.write('<li>2</li>');
                document.write('<li>3</li>');
                i++;
            }
            document.write('<li>4</li>');
        </script>



        <script>
            var coworkers = ["suheon", "leezche", "duru", "taeho"];
            var i = 0;
            while(i < coworkers.length)
            {
                document.write('<li>' + coworkers[i] + '</li>');
                document.write('<li><a href= "https://a.com/` + coworkers[i] + ` "> ' + coworkers[i] + '</a></li>');
                i = i + 1;
            }
        </script>

```

큰 따옴표와 작은 따옴표를 를 잘 활용해서 코드를 짜야함.

---

### 함수

사용법 : function 함수이름() { }

``` html

    <h2>Parameter & Argument</h2>
    <script>
        function onePlusOne()
        {
            document.write(1+1+'<br>');
        }
        onePlusOne();

        function sum(left, right)
        {
            document.write(left + right + '<br>');
        }
        sum(2,3);
        sum(3,4);
    </script>
    <h2>Return</h2>
    <script>
        function sum2(left, right)
        {
            return left+right;
        }
        document.write(sum2(2,3)+'<br>');
        document.write('<div style="color:red">'+sum2(2,3)+'</div>');
        document.write('<div style="font-size:3rem">'+sum2(2,3)+'</div>');
    </script>

```

CPP과 별 다른 점은 없지만 굳이 다른 점을 찾아보자면 파라미터를 전달할 때 자료형을 쓰지 않는다는 것이다.

---

### 객체

배열은 대괄호로 정의하지만 객체는 `var coworkers = {};`처럼 중괄호로 정의한다.

오브젝트 리터럴 `{ }`

오브젝트 엑세스 오퍼레이터 `.`

``` html
    <script>
        var coworkers = {
            "programmer":"suheon",
            "designer":"leezche"
        };
        document.write("programmer : "+coworkers.programmer + "<br>");
        document.write("designer : "+coworkers.designer + "<br>");
        coworkers.bookeepper = "duru";
        document.write("bookkeeper : "+coworkers.bookeepper + "<br>");
        coworkers['data scientist'] = "taeho";
        document.write("data scientist : "+coworkers['data scientist'] + "<br>");

        for(var key in coworkers) // coworkers 오브젝트 안에 있는 key 값을 순회
        {
            document.write(key + ' : ' + coworkers[key]+'<br>');
        }
    </script>
```
공백이 있는 정보를 넣을 때는 `객체이름['abc def]` 이런식으로 표현한다.

객체 내에 존재하는 변수 : Property

객체 내에 존재하는 함수 : Method

이런 방법으로도 객체 생성 가능

``` html
    <script>
        var tv = new Object();
        tv.color = "white";
        tv.price = "300000";
        tv.info = function()
        {
            document.write("tv 색상: "+ this.color, "<br>");
            document.write("tv 가격: "+ this.price, "<br>");
        }
    </script>
```

Date 객체 : 날짜 정보를 다루는 객체이다.

Math 객체 : 수학과 관련된 메서드를 다루는 객체. 하위 메소드로는 max, min, pow, random 등등이 있다.

[Array 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

[String 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#Methods)

브라우저 객체 : 브라우저에 내장된 객체.

window : 최상위 객체

doucment, screen, loaction, history, navigator : window의 하위 객체

body, div, img, a, form, input : document의 하위 객체

``` html
    <script>
        alert("경고 메시지");
        prompt("질의내용", "기본 답변");
        confirm("질의 내용"); //확인 클릭시 true 취소 클릭시 false 반환
    </script>
```

setInterval

`var auto = setInterval( function(){ } ,1000);` 1초마다 함수 내용 반복 실행

`clearInterval(auto);` auto가 참조하는 setInterval 기능 제거

setTimeout

`var tim = setTimeout( function(){ }, 1000);` 1초 후에 코드를 한번 실행하고 종료

`clearTimeout(tim);` tim이 참조하는 setTimeout 기능 제거

screen 객체 : width, height 등을 속성으로 갖고 있음. 반환 값 받을 수 있음.

location 객체 : 사용자 브라우저와 관련된 속성과 메소드를 제공함. 현재 URL에 대한 정보(속성)와 새로 고침(reload) 메소드 제공. ex) 경로값 가져오기, 브라우저 새로고침하기, 주소 변경하기

history 객체 : history 객체는 사용자가 방문한 사이트의 기록을 남기고 이전 방문 사이트와 다음 방문 사이트로 다시 돌아갈 수 있는 속성과 메소드를 제공함. history.back(), history.foward(), history.length : 방문 기록에 저장된 목록의 갯수 반환

navigator 객체 : 현재 방문자가 사용하는 브라우저 정보와 운영체제 정보를 제공하는 객체.

전역 변수/지역 변수 똑같이 존재.


### 제이쿼리

``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

모질라 사의 자바스크립트 개발자였던 존 레식이 자바스크립트를 이용해 만든 라이브러리 언어.

**장점**
- 호환성 문제 해결 
- 쉽고 편리한 애니메이션 효과 기능 구현.

**문서 객체 모델**
html, head, body, title, meta, img, h1, 등등

선택자 기본형
1. 선택자 요서에 지정한 스타일을 적용.
`$("CSS 선택자").css("스타일 속성명", "값");`
2. 선택한 요소에 지정한 속성을 적용.
`$("CSS 선택자").attr("속성명", "값");`



**★인접 관계 선택자★**
``` html
<body>
    <div id="wrap"> a -------------- a는 c의 상위(closet) 요소
        <div id="inner_wrap"> b----------b는 c의 부모(parent) 요소
            c--------------c는 b의 자식(children) 요소
            <h1>제목1</h1> d ------------- d는 e의 형(prev) 요소
            <h2>제목2</h2> e --------------e는 f의 동생(next) 요소
            <p>내용1</p> f
            ---------------c
    ....
    ....

    jQuery를 사용한 모든 웹 페이지는 이렇게 시작함.
    <script>
        $(document).ready(function() {
            내용;
        });
    </script>

    이를 간략하게 표현하면 다음과 같음
    <script>
        $(function() {

        });
    </script>

    

    <script>
        $("요소 선택자").parent().css("border", "2px dashed #f00");
        이런식으로 적으면 부모 요소에 적용

        var style_2 = {
            "background-color":"#ff0",
            "border":"2px dashed #f00"
        }
        $("요소 선택자").next().next().css(style_2);
        이런식으로 변수를 통해 형제 요소에 적용 가능.

        css( ) 안에 하나의 속성값만 전달할 경우
        css("border", "2px dashed #f00");

        css( ) 안에 두개 이상의 속성값을 전달하거나 변수로 전달할 경우
        css({"border":"2px dashed #f00", "background-color":"#ff0"});
        css(style_2);

        nextAll() 전체 형 요소 선택자
        prevAll() 전체 동생 요소 선택자
        siblings() 전체 형제 요소 선택 - 자기 자신은 빼고
        prevUntil("범위 제한 요소 선택")
        prverUntil("범위 제한 요소 선택")

        parents() 전체 상위 요소 선택
        parents("div") 상위 요소 중 div들만

        closest("div") 현재 요소 중 가장 가까운 div속성을 가진 요소 선택
    </script>
```

**제이쿼리 선택 탐색자**
``` html
위치 탐색 선택자
<script>
    $("요소 선택:first") or $("요소 선택").first() 전체 <li>요소 중 첫번째 요소만 선택
    $("요소 선택:last") or $("요소 선택").last() 전체 <li>요소 중 마지막 요소만 선택
    $("요소 선택:odd") <li>요소 무리 중 짝수 번째 요소만 선택
    $("요소 선택:even") <li>요소 무리 중 홀수 번째 요소만 선택
    $("요소 선택:first-of-type") <li> 요소 무리 중 첫번째 요소만 선택
    $("요소 선택:last-of-type") <li> 요소 무리 중 마지막 요소만 선택
    $("요소 선택:nth-child(숫자)") <li> 요소 무리 중 <숫자> 번재 요소만 선택
    $("요소 선택:nth-child(숫자n)") <li> 요소 무리 중 <숫자> 배수 번째에 있는 요소만 선택
    $("요소 선택:nth-last-of-type(숫자)") <li> 요소 무리 중 마지막 위치로부터 두번째에 있는 요소만 선택
    $("요소 선택:only-child") 부모 요소 내에 <li> 요소가 1개뿐인 <li> 요소만 선택
    $("요소 선택:eq(index)") or $("요소 선택").eq(index) <li> 요소 중 인덱스 2가 참조하는 요소를 불러옴
    $("요소 선택:gt(index)") 요소 중 인덱스 1보다 큰 인덱스가 참조하는 요소를 불러온다.
    $("요소 선택:lt(index)") 요소 중 인덱스 1보다 작은 인덱스가 참조하는 요소를 불러온다.
    $("요소 선택").slice(2) 요소 중 인덱스 2부터 참조하는 요소를 불러옵니다.
</script>

```

``` html
배열 관련 메소드 
<script>

    $("요소 선택").each(function)
    배열에 저장된 문서 객체만큼 메서드가 반복 실행됩니다. 배열에 저장된 객체의 순서대로 하나씩 접근하여 객체를 선택하고 인덱스를 구합니다.

    $.map() $.map(Aarry.function) 배열에 저장된 데이터 수만큼 메서드가 반복 실행됩니다. 함수에서 반환된 데이터는 새 배열에 순서대로 저장됩니다. 새로 저장된 배열 객체를 반환합니다.

    $.grep() $grep(Aarry.function) 배열에 저장된 데이터 수만큼 메서드가 반복 실행됩니다. 반환값이 true인 경우에만 배열의 데이터가 인덱스 오름차순으로 새 배열에 저장되며 그 배열을 반환합니다.

    **function(a, b)에서 a는 element, b는 index**

    $.inArray() $.inArray(data, Array, start index) 배열 안에서 데이터를 찾습니다. 데이터를 찾으면 가장 맨 앞 데이터의 인덱스를 반환하고, 찾지 못하면 -1을 반환합니다. start index의 값을 지정하면 해당 위치부터 데이터를 찾습니다. 

    $.isArray() $.isArray(object) 입력한 객체가 배열 객체라면 true를, 아니면 false를 반환합니다.

    $.merhe() $.merge(Array1, Array2) 인자값으로 입력한 2개의 배열 객체를 하나로 그룹화합니다.

    index() $("요소 선택").index("지정 요소 선택") 선택자로 요소를 먼저 선택합니다. 그런 다음 지정한 요소의 인덱스 정보를 가져옵니다.

</script>
```

``` html
속성 탐색 선택자
<script>
    $("요소 선택[속성]") $("li[title]") li 중 title속성이 포함된 요소만 선택.
    
    $("요소 선택[속성=값]") $("li[title='리스트']") li 중 title 속성값이 '리스트'인 요소만 선택.
    
    $("요소 선택[속성^=텍스트]") $("a[href^='http://']") href 속성값이 'http://'로 시작하는 요소만 선택. 
    
    $("요소 선택[속성$=텍스트]") $("a[href$='.com']") href 속성값이 '.com'으로 끝나는 요소만 선택.
    
    $("요소 선택[href*=텍스트]") $("a[href*='suheon']") href 속성값  'suheon'를 포함하는 요소만 선택.
    
    $("요소 선택:hidden") $("li:hidden") li 중 숨겨져 있는 요소만 선택.
    
    $("요소 선택:visible") $("li:visible") li 중 보이는 요소만 선택.
    
    $(".text") $(".text") input 중 type 속성값이 "text"인 요소만 선택.
    
    $(".selected") $(".selected") selected 속성이 적용된 요소만 선택.
    
    $(".checked") $(".checked") checked 속성이 적용된 요소만 선택.
</script>

```

``` html
콘텐츠 탐색 선택자
<script>

    $("요소 선택:contains(텍스트)") $("li:contains('내용2')") li 중 '내용2'라는 텍스트를 포함하는 요소만 선택.

    $("요소 선택").contents() $("p").contents() 선택 요소중 가장 가까운 하위요소 선택.

    $("요소 선택:has(요소명)") $("요소 선택").has(요소명) $("li:has('span')") $("li").has('span') li 요소 중 span을 포함하는 요소만 선택.

    $("요소 선택:not(:제외요소)") $("요소 선택").not(:제외요소)
    $("li:not(:first)") $("li") li 중 첫번째 요소만 제외하고 선택.

    $(요소 선택).fillter(필터요소) $("li").fillter(".list2") li 중 calss 값이 "list2"인 요소만 선택. 

    $(요소 선택).find(요소선택2) $("li").find("strong") li 요소의 하위 요소인 <strong> 만 선택. 

    $("요소 선택1").closest("요소선택2") $("strong").closest("div") <strong>을 감싸는 상위 <div>중 가장가까운 상위 요소 선택.

    $("요소 선택").탐색 선택자().end() $("li").children("a").end() 필터링이 실행되기 이전의 요소인 li가 선택.



알아두면 유용한 메소드

    is(".요소 상태") $(".txt1").is("visible") 선택한 요소가 보이면 true를 반복합니다. 
    
    $.noConflict() var 변수 = $.noConflict(); 변수("요소 선택")
    $.noConflict() 함수를 이용하면 현재 제이쿼리에서 사용중인 $메서드 사용을 중단하고 새로 지정한 변수명 메서드를 사용합니다.
    
    
    get() $("요소 선택").get(0).style.color="#f00"
    선택자에 get(0)을 적용하면 자바스크립트 DOM 방식의 스타일을 사용할 수 있습니다.


    $("요소 선택").is("[checked | selected | visible | hidden | animated}]")
    -> checked | selected | visible | hidden | animated 상태면 true, 아니면 false을 반환합니다.

</script>
```

### 객체 조작

속성 조작 메소드 : 메소드 요소의 속성을 바꿀 때 사용함.
``` html
<script>

    html() html("새 요소")
    $("요소 선택").html(); $("요소 선택").html("새 요소");
    선택한 요소의 하위 요소를 가져옵니다.
    선택한 요소의 하위 요소를 모두 제거하고, 그 위치에 지정한 새 요소를 생성합니다.

    text() text("새 텍스트")
    $("요소 선택").text(); $("요소 선택").text("새 텍스트");
    선택한 요소가 감싸는 모든 텍스트를 가져옵니다. 선택한 요소의 하위 요소를 모두 제거하고, 그 위치에 지정한 새 텍스트를 생성합니다.

    attr("속성명") attr("속성명","새 값")
    $("요소 선택").attr("속성명"); $("요소 선택").attr("속성명","새 값");
    선택한 요소의 지정한 속성(attribute)값을 가져 옵니다.  요소를 선택하여 지정한 속성에 새 값을 적용합니다.

    removeAttr("속성명") $("요소 선택").removeAttr("속성명");
    선택한 요소의 지정한 속성만 제거합니다.

    prop("상태 속성명") prop("상태 속성명".새 값)
    $("요소 선택").prop("상태 속성명"); $("요소 선택").prop("상태 속성명","새 값");
    선택한 요소의 상태 속성값을 가져옵니다. 요소를 선택하여 상태 속성에 새 값을 적용합니다.

    1. $("요소 선택").prop("[checked | selected]");

    폼 요소가 checked인지 selected된 상태인지 알수 있습니다. 
    선택된 상태에서 prop("checked")를 적용하였다면 true, 아니면 false를 반환합니다.

    2. $("요소 선택").prop("[checked | selected]",[true | false]);
    폼 요소를 선택하여 체크 또는 선택 상태를 바꿀 수 있습니다.

    3. $("요소 선택").prop("[tagName | nodeType | selectedIndex | defaultValue]");
    선택 요소의 태그명(tagName)이나 노드타입(node Type), 선택된 옵션의 인덱스 값을 구합니다.
    이때 폼 요소에 prop("defautValue")를 사용하면 사용자가 value 속성값을 바꿔도 초기의 value 속성값을   가져옵니다.

    val() val("새 값")
    $("요소 선택").val(); $("요소 선택").val("새 값");
    선택한 폼 요소의 value 값을 가져옵니다. 폼 요소를 선택하여 value 속성에 새 값을 적용합니다.

    css("속성명") css("속성명",새 값)
    $("요소 선택").css("속성명"); $("요소 선택").css("속성명","새 값");
    선택한 요소의 지정한 스타일(CSS) 속성값을 가져옵니다. 요소를 선택하여 지정한 스타일 속성에 새값을 적용합니다.

    addClass("class 값")
    $("요소 선택").addClass("class 값");
    선택한 요소의 .class. 속성에 새 값을 추가합니다.

    removeClass("class 값")
    $("요소 선택").removeClass("class 값");
    선택한 요소의 .class. 속성에서 지정한 값만 제거합니다.

    toggleClass("class 값")
    $("요소 선택").toggleClass("class 값");
    선택한 요소의 .class. 값에 지정한 값이 포함되어 있으면 제거하고 속성값이 없으면 추가합니다.

    hasClass("class 값")
    $("요소 선택").hasClass("class 값");
    선택한 요소의 .class. 값에 지정한 클래스 값이 포함되어 있으면 ture를, 없으면 fasle를 반환합니다.

    </script>
    ```

 ``` html
수치 조작 메소드
<script>

    height()
    $("요소 선택").height(); $("요소 선택")height(100);
    안쪽 여백과 선을 제외한 높잇값을 반환하거나 변환.
    
    width()
    $("요소 선택").width(); $("요소 선택").width(100);
    안쪽 여백과 선을 제외한 너빗값을 반환하거나 변환.
    
    innerHeight()
    $("요소 선택").innerHeight(); $("요소 선택").innerHeight(300);
    안쪽 여백을 포함한 높잇값을 반환하거나 변환.
    
    innerWidth()
    $("요소 선택").innerWidth(); $("요소 선택").innerWidth(100);
    안쪽 여백을 포함한 너빗값을 반환하거나 변환.
    
    outerHeight()
    $("요소 선택").outerHeight(); $("요소 선택").outerHeight(100);
    선과 안쪽 여백을 포함한 높잇값을 반환하거나 변환.
    
    outerWidth()
    $("요소 선택").outerWidth(); $("요소 선택").outerWidth(100);
    선과 안쪽 여백을 포함한 너빗값을 반환하거나 변환.
    
    position()
    $("요소 선택").position().left; $("요소 선택").position().top;
    선택한 요소의 포지션 위칫값을 반환.
    
    offset()
    $("요소 선택").offset().left; $("요소 선택").offset().top;*
        선택한 요소가 문서에서 수평 / 수직으로 얼마나 떨어져 있는지에 대한 값을 반환.
    
    scrollLeft()
    $("window").scrollLet();
    브라우저의 수평 스크롤 이동 높잇값을 반환.
    
    scrollTop()
    $("window").scrollTop();
    브라우저의 수직 스크롤 이동 너빗값을 반환.

</script>

```

``` html
<script>
    before()
    $("요소 선택").before("새 요소");
    선택 요소 이전 위치에 새 요소 추가.
    
    after()
    $("요소 선택").after("새 요소");
    선택 요소 다음 위치에 새 요소 추가. 
    
    append()
    $("요소 선택").append("새 요소");
    선택 요소 마지막 위치에 새 요소 추가. 
    
    appendTo()
    $("새 요소").appendTo("요소 선택");
    선택 요소 마지막 위치에 새 요소 추가. 
    
    prepend()
    $("요소 선택").prepend("새 요소");
    선택 요소 맨 앞에 새 요소 추가. 
    
    prependTo()
    $("새 요소").prependTo("요소 선택");
    선택 요소 맨 앞 위치에 새 요소 추가. 
    
    insertBefore()
    $("새 요소").insertBefore("요소 선택");
    선택 요소 이전 위치에 새 요소 추가. 
    
    insertAfter()
    $("새 요소").insertAfter("요소 선택");
    선택 요소 다음 위치에 새 요소 추가.
    
    clone()
    $("요소 선택").clone(true or false);
    선택한 문서 객체를 복제합니다. 이때 인자값이 true 일 경우 하위 요소까지 모두 복제하고, false일 경우에는 선택한 요소만 복제합니다.

    empty() $("요소 선택").empty(); 
    선택 요소 하위 내용들을 모두 삭제.
    
    remove() $("요소 선택").remove();
    선택 요소 삭제.

    replaceAll()
    replaceWith()
    $("새 요소").replaceAll("요소 선택");
    $("요소 선택").replaceWith("새 요소");
    선택한 요소를 내 요소로 교체.
    
    unwrap()
    $("요소 선택").unwrap();
    선택 요소의 부모 요소를 삭제.
    
    wrap()
    $("요소 선택").wrap(새 요소);
    선택 요소를 새 요소로 각각 감쌈.
    
    wrapAll()
    $("요소 선택").wrapAll()
    선택 요소를 새 요소로 한꺼번에 감쌈.
    
    wrapInner()
    $("요소 선택").wrapInner(새 요소);
    선택 요소의 내용을 새 요소로 각각 감쌈.

</script>

```
### 제이쿼리 이벤트

이벤트 등록 메소드란? 사이트에서 방문자가 취하는 모든 행위를 일컫는 말.

이벤트 핸들러란? 이벤트가 발생했을 때 실행되는 코드를 말함.

``` html

<script>
    로딩 이벤트
    load()	선택한 이미지 또는 프레임 요소에 연동된 소스의 로딩이 완료 된 후 이벤트가 발생
    ready()	지정한 HTML 문서 객체의 로딩이 완료된 후 이벤트가 발생
    error()	이벤트 대산 요소에서 오류가 발생하면 이벤트가 발생
    
    마우스 이벤트
    click()	선택한 요소를 클릭했을 때 이벤트 발생
    dbclick()	선택한 요소를 연속해서 두 번 클릭했을 때 이벤트 발생
    mouseout()	선택 요소의 영역에서 마우스 포인터가 벗어났을 때 이벤트가 발생(하위요소의 영향)
    mousehover()	선택 요소의 영역에 마우스 포인터 올렸을 때 이벤트 발생
    hover()	선택한 요소에 마우스 포인터를 올렸을 때와 벗어났을 때 각각 이벤트가 발생
    mousedown()	선택한 요소에서 마우스 버튼을 눌렀을 때 이벤트가 발생
    mouseup()	선택한 요소 범위에 마우스 버튼을 눌렀다 떼었을 때 이벤트가 발생
    mouseenter()	선택한 요소 범위에 마우스 포인터를 올렸을 때 이벤트가 발생
    mouseleave()	선택한 요소 범위에서 마우스 포인터가 벗어났을 때 이벤트가 발생
    mousemove()	선택한 요소 범위에서 마우스 포인터를 움직였을 때 이벤트가 발생
    scroll()	가로, 세로 스크롤바를 움직일 때마다 이벤트가 발생
    
    포커스 이벤트
    focus()	선택한 요소에 포커스가 생성되었을 때 이벤트를 발생하거나 선택한 요소에 강제로 포커스 생성
    focusin()	선택한 요소에 포커스가 생성되었을 때 이벤트 발생
    focusout()	포커스가 선택한 요소에서 다른 요소로 이동되었을 때 이벤트 발생
    blur()	포커스가 선택한 요소에서 다른 요소로 이동되었을 때 이벤트가 발생하거나 선택한 요소의 포커스가 강제로 사라지도록 함
    change()	이벤트 대상인 입력 요소의 값이 변경되고, 포커스가 이동하면 이벤트가 발생. 그리고 강제로 change 이벤트를 발생시킬 때도 사용.
    키보드 

    이벤트
    keypress()	선택한 요소에서 키보드를 눌렀을 때 이벤트가 발생. 문자키를 제외한 키의 코드값 반환
    keydown()	선택한 요소에서 키보드를 눌렀을 때 이벤트 발생. 키보드의 모든 기의 코드값을 반환
    keyup()	선택한 요소에서 키보드에서 손을 떼었을 때 이벤트가 발생.


    여러 이벤트로 하나의 기능을 등록할 때

    $("이벤트 대상 선택").on("이벤트 종류1 이벤트종류2....이벤트 종류n",
    function(){
    자바스크립트 코드;
    });

    

    여러 이벤트로 하나의 기능을 등록할 때 2

    $("이벤트 대상 선택").on({
    "이벤트 종류1 이벤트 종류2 ... 이벤트 종류n" : function() {
    자바스크립트 코드;
    }
    });

    

    여러 이벤트로 각각의 기능을 등록할 때

    $("이벤트 대상 선택").on({
    "이벤트 종류1" : function() {자바스크립트 코드;1},
    "이벤트 종류2" : function() {자바스크립트 코드;2},
    ....
    "이벤트 종류n" : function() {자바스크립트 코드;n},
    });

</script>
```

`$("이벤트 대상").trigger("이벤트 종류");` : 강제로 이벤트 발생시키기  
`$("이벤트 대상").off("이벤트 종류");` : 이벤트 제거하기

ready() 이벤트 메소드는 사용자가 사이트를 방문할 때 요청한 HTML 문서 객체의 로딩이 끝나면 이벤트를 발생시킴  
`$(document).ready(function() { 자바스크립트 코드; });`
`$(document).on("ready", function() { 자바스크립트 코드; });`

load() 이벤트 메소드는 외부에 연동된(iframe, img, video)의 로딩이 끝나면 이벤트를 발생시킨다.  
`$(document).load(function() { 자바스크립트 코드; });`
`$(document).on("load", function() { 자바스크립트 코드; });`

``` html
이벤트 객체의 속성 종류
<script>
    마우스 이벤트
    clientX 마우스 포인터의 X좌푯값 반환 (스크롤 이동거리 무시)
    clientY 마우스 포인터의 Y좌푯값 반환 (스크롤 이동거리 무시)
    pageX 스크롤 X축의 이동한 거리를 계산하여 마우스 포인터의 X 좌표값을 반환
    pageY 스크롤 Y축의 이동한 거리를 계산하여 마우스 포인터의 Y 좌표값을 반환
    screenX 화면 모니터를 기준으로 마우스 포인터의 X 좌표값을 반환
    screenY 화면 모니터를 기준으로 마우스 포인터의 Y 좌표값을 반환
    layerX position을 적용한 요소를 기준으로 마우스 포인터의 X 좌표값을 반환
    layerY position을 적용한 요소를 기준으로 마우스 포인터의 Y 좌표값을 반환
    button 마우스 버튼의 종류에 따라 값을 반환 (왼쪽:0, 휠:1, 오른쪽:2)
    
    키보드 이벤트
    keyCode 키보드의 아스키 코드값을 반환
    altKey 이벤트 발생 시 Alt 키가 눌렸으면 true를, 아니면 false를 반환
    ctrlKey 이벤트 발생 시 Ctrl 키가 눌렸으면 true를, 아니면 false를 반환
    shiftKey 이벤트 발생 시 Shift 키가 눌렸으면 true를, 아니면 false를 반환
    
    전체 이벤트
    target 이벤트가 전파된 마지막 요소를 가리킵니다.
    cancelBubble 이벤트 전파를 차단하는 속성, 기본값은 false이며, true로 설정하면 전파가 차단.
    stopPropagation() 이벤트 전파를 차단
    preventDefault() 기본 이벤트 차단. 예를 들어 <a> 에 클릭 이벤트를 적용하고 사용자가 이벤트를 발생시키면 기본 이벤트가 등록되어 있어 링크 주소로 이동하는데, 이런 기본 이벤트를 차단할 수 있습니다.
</script>
```

``` html
포커스 이벤트
<script>
    포커스 이벤트 : 키보드 탭(Tab) 키를 누를 때 생성됨. focus는 mouseover에 대응되며 blur는 mouseout에 대응됨.
    focus() / blur() / focusin() / focusout() 이벤트 메서드
    focus()	대상 요소로 포커스가 이동하면 이벤트를 발생.
    blur()	포커스가 대상 요소에서 다른 요소로 이동하면 이벤트를 발생.
    focusin()	대상 요소의 하위 요소 중 입력 요소로 포커스가 이동하면 이벤트를 발생.
    focusout()	대상 요소의 하위 요소 중 입력 요소에서 외부 요소로 이동하면 이벤트 발생.
</script>
```
`<form action="URL"></form>`에서 action 값은 form에 있는 데이터를 서버로 보낼 때 도착지점 URL을 명시함.

var, let, const

var는 function-scoped 단위로 hosting, let, const는 block-scoped 단위로 hosting 되어 있다.

쉽게 말하자면 전자는 전역변수 후자는 지역 변수 같은 느낌?

둘 다 함수 내에서 사용되었다면 소멸되지만 if문이나 for문 내에서 사용된 것이라면

var는 전역 변수 단위 hosting이라 값이 살아 있는 반면 let과 hosting은 소멸된다.

또한 let, const 두개의 공통점은 var와 다르게 변수 재선언 불가능이다.

그리고 let과 const의 차이점은 변수의 immutable여부이다.

let은 변수에 재할당이 가능하지만, const는 변수 재선언, 재할당 모두 불가능하다.

**요약**
var 재선언 가능 / 변수 재할당 가능

let 재선언 불가 / 변수 재할당 가능

const 재선언 불가 / 변수 재할당 불가

---

### Bootstrap

[bootstrap 예시 소스 코드](bootstrap.html)

웹 사이트나 웹 응용프로그램 제작을 위해 사용되는 무료 프레임워크

기본적으로 반응형 웹을 지원해줌.

우리가 자주 사용하는 UI를 전부 컴포넌트화 해서 제공함으로써 그냥 가져다 쓸 수 있음.

현재 전 세계 개발자들이 가장 많이 사용함.

bootstrap themes 검색하고 자신이 만들자고자하는 페이지 소스를 다운하고 그 소스를 활용하는 것이 현명.

[레진 WAI-ARIA 목록](https://yongbeomkim.github.io/html/html-web-aria/)

[템플릿 판매 사이트 wrapbootstrap](https://wrapbootstrap.com)

[테마포레스트 themeforest](https://themeforest.net)

처음부터 비효율적으로 전부 만들기 보단 프로젝트 진행 시 각각에 필요한 테마를 찾아서 적용하는 것도 능력.

처음부터 전부 만드는 게 무의미해진 시대임. 단점은 모든 사이트마다 전부 비슷비슷한 템플릿. 모든 사이트 UI가 상향 평준화 되어버림. 장점은 웹퍼블리셔 없이 아주 빠르게 웹사이트를 높은 수준으로 제작할 수 있다.

템플릿을 보고 분석하는 것만으로도 자신이 간단한 웹사이트 제작시 어떻게 설계해야할지 실력을 향상시킬 수 있음.

부트스트랩 템플릿 다운 후 /assets 폴더에 css, img, js, plugin이 존재함.

app.min.css bootstrap을 재정의해서 사용함

head 상단에는 bootstrap + plugin 관련 css 정의 / body 맨 하단에는 bootstrap + plugin 관련 js 정의

body 하단에 js를 정의하는 이유는 html이 로딩이 끝난 후에 js문법 검사를 해야 사용자 체감상 좀 더 빠르게 느껴지기 때문.

Assan-kit 구매 추천 - $11 다양한 종류의 템플릿 존재

**테마를 다운 받아서 분석해보고 간단한 웹페이지를 만들어 보는 것이 실력 향상에 있어서 가장 중요함**

#### grid system
12 grid System 구조. `class="com-md-4"` 를 3개 쓰면 합이 12라서 3개의 영역으로 나눠짐.  
md는 medium의 약자. md 사이즈 이상일 경우 4개의 col을 차지해라. 라는 뜻  
만약 화면 크기를 md 사이즈보다 작게하면 원래 사이즈로 돌아가라는 뜻.  
sm은 small의 약자. lg는 large의 약자.

### component
Alerts : div 사용 / 메시지를 전달하기 위해 사용. primary, secondary, success 등 각 클래스 네임에 따라 색상이 달라짐.

Badges : span 사용 / 알림의 갯수, 혹은 새로운 것이 등록되었을 때 New 알림

Breadcrumb : nav / ol  li 사용 / 현재 경로를 표시할 때 사용 주로 사용.

Buttons : button 사용 / 클래스 네임에 따라 색상 달라짐. outline, sizes, block 등등의 옵션이 있음.

Cards : div 사용 / 제품 소개하는 화면에서 자주 사용.

Carousel : div 사용 / 화면 최상단에 오른쪽 왼쪽으로 넘어가는 슬라이드 라벨

Collapse : div, button 사용 / 버튼을 누르게 되면 숨겨진 컨텐츠를 표시함.

Dropdowns : div 사용 / 버튼을 누르면 아래에 목록을 출력해줌.

Forms : form, div 같이 사용 / 입력 폼 양식을 만들어 줌.

input group : div 사용 / 입력 양식과 입력을 같이 띄울 때 사용.

list group : ul 사용 / 리스트를 나타냄. active 속성을 부여하면 선택한 것처럼 나타냄. badge랑 같이 쓸 수도 있음.

Modal : button 사용 / 특정 버튼 누르면 팝업창 뜨는 것을 modal이라 함. 자주 사용 됨. backdrop 옵션을 주게 되면 다른 부분을 클릭해도 팝업창이 닫히지 않음.

Navs : ul, li 사용 / 메뉴나 탭을 만들 때 사용함. 

Navbar : nav 사용 / 실제 메뉴바와 가장 유사한 형태

Pagination : nav 사용 / 게시판 하단에 앞 페이지로 가기 다음 페이지로 가기 등등

Popover : button 사용 / 특정 버튼에 대해 부가적인 설명을 하고 싶을 때 popover 사용. 상세하게 설명해줄 때 ex) 물음표 버튼을 누르면 그 기능에 대한 설명이 나옴.

Progress : div 사용 / 진행도 표시할 때 사용.

Scrollspy : nav 사용 / nav 내부에서 스크롤 되게 만들 때 사용함.

Spinners : div 사용 / progress와 유사함. 로딩이나 진행중임을 나타내는 스피너.

Toasts : div 사용 / 알람 같은 기능. ex) 15분전에 어떤 작업에 변경이 있었다. 라는 문구를 띄워줌.

Tooltips : button 사용 / 버튼 위 에다가 가져다 놓으면 부가적으로 설명해줌. popover와 유사하지만 클릭의 유무에 그 차이가 있음.

#### Utilities

Colors : 모든 요소에 적용 가능 / 글자나 배경 색상 변경 시 사용

Display : 컨텐츠가 화면에 보이는지에 대한 유무를 컨트롤 함. 어떤 사이즈에선 보이고 어떤 사이즈에선 안 보이게 하는 것 가능. 프린트 할 때 원하지 않는 것은 숨길 수 있다.

Interactions : 클릭 시 1. 복사하기 쉽게 끔 전체 선택 2. 기본형 3. 선택 불가능 하게 로 설정할 수 있음.

Text : 텍스트 관련 기능들이 전부 들어 있음. aligned, wrapping, 텍스트 길 경우 `..`으로 표시, word-break, text-transform 대문자 소문자, bold 기능 등.

## fetch
URL
GET : query / POST : body 방식
BODY 

GET 방식
``` html
    <script>
        // 동기 처리
        let response = fetch('https://reqres.in/api/users?page=2').then(function(res) {
            return res.json()
        }).then(function(res) {
            console.log(res)

            if (res.total == 12) {
                document.write(res.data[0].email)
            } else {
                document.write("False!")
            }
        })
        console.log(response)
    </script>
```

POST 방식
``` html
<script>
    var url = 'https://example.com/profile';
    var data = {username: 'example'};

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
</script>
```


---
## etc

자바 스크립트는 사용자와 상호작용하는 언어이다.

자바스크립트를 활용하면 HTML을 제어할 수 있고 동적으로 만들어준다.

HTML은 정적이고 자바스크립트는 동적이다.

F12 - console 에서 자바스크립트 실행가능

함수는 포괄적인 개념이고 메소드는 객체를 구성하는 함수 중에 미리 내장된 함수를 뜻한다.

자바스크립트는 컴퓨터 언어이면서 프로그래밍 언어이다.

`<script></script>`태그 사용시 만약 두 개의 스크립트 태그를 사용한다면,
위쪽 스크립트에서 선언한 변수를 아래쪽 스크립트 태그에서 사용할 수 있다.

캐시(cache) 덕에 파일을 분할하여 작성하여도 서버 측면에서는 파일을 재사용할 수 있고 사용자 측면에서는 네트워크 트래픽을 절감할 수 있기 때문에 효율적이다.

라이브러리 : 내가 만들고자 하는 프로그램에 필요한 부품들이 되는 소프트웨어를 잘 정리정돈 해놓은 소프트웨어. 부품을 가져오는 느낌. 자재랑 가구 등 집에 필요한 재료라고 생각하면 됨.

프레임워크 : 내가 만들고자 하는 프로그램이 무엇인지에 따라 공통적인 부분은 프레임워크가 만들어놓고 시작하는 반제품 같은 느낌. 이미 집의 수도나 뼈대 같은 기본적인 구조들이 있어서 입맛대로 꾸미면 됨.

jQuery : 대표적인 자바스크립트의 라이브러리.

User Interface : 사용자가 시스템을 제어하기 위해 사용하는 조작 장치.

Application Progarmming Interface : 어플리케이션을 만들 때 사용하는 조작 장치.

document 객체 공부해보기

DOM(Document Object Model) 객체

window 객체

ajax 윈도우 정보 변경

cookie 사용자에 대한 개인적인 서비스

offline web application 인터넷이 끊겨도 사용 가능한 어플리케이션

webRTC : 화상통신 앱

---
