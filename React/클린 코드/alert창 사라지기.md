alert 창을 2초 후에 사라지게 만드는 기능

```
useEffect(()=>{
        let timer = setTimeout(()=>{ document.querySelector('.my-alert2').classList.add('hide') }, 2000)
    });
```

* css에 hide(display : none) 속성을 주고, 클래스 추가하는 방식으로 작업함. 작동하긴 하나 아쉬움

```
useEffect(()=>{
        let timer = setTimeout(()=>{ setAlert(false) }, 2000);
    });

    let [alert, setAlert] = useState(true);


{
         alert === true
         ?
         <div className="my-alert2">
             <p>재고가 얼마 남지 않았습니다</p>
         </div>
         : null
}
        
```
> 출처 : 코딩애플 리액트 강의
