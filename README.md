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






## etc

자바 스크립트는 사용자와 상호작용하는 언어이다.

자바스크립트를 활용하면 HTML을 제어할 수 있고 동적으로 만들어준다.

HTML은 정적이고 자바스크립트는 동적이다.

F12 - console 에서 자바스크립트 실행가능

함수는 포괄적인 개념이고 메소드는 객체를 구성하는 함수 중에 미리 내장된 함수를 뜻한다.



