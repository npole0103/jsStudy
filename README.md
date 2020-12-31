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