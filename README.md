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


