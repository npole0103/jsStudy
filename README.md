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