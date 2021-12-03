```
//이런식으로 reset 파일 만들어서 import 해올 수 있음   
이런 파일들 관습적으로 앞에 _ 붙여서 작명
@import './_reset.scss';

//변수처럼 만들어서 사용 가능
$메인컬러 : #ff0000;

.red {
    color: $메인컬러;
}

//이런식으로 함수처럼 mixin 만들어서
@mixin function() {

}

.my-alert {
    background: #eeeeee;
    padding: 215x;
    border-radius: 5px;
    max-width: 500px;
    width:100%;
    margin:auto;
    //위 내용을 mixin에 담아서 아래와 같이 쓰면 한줄로 끝
    @include funtion()
}

.my-alert2 {
    //이런식으로 확장해서 색상만 바꿔줄 수 있음
    @extend .my-alert;
    background: #ffe591;
}


.my-alert p {
    margin-bottom: 0;
}

//이렇게 선택자를 한 곳에 모아줄 수 있음
div.container {
    h4 {
        color: blue;
    }

    p {
        color: green;
    }
}
```
