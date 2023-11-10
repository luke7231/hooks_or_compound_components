# THIS IS ABOUT

유저가 특정 엘리먼트를 관측했다는 것을 코드상으로 포착하고 그 이후의 액션을 쉽게 다룰 수 있도록 `useIntersection`이라는 훅을 만들었고,

이 훅을 활용하여 `intersection-area` 라는 단일목적 컴포넌트도 추가로 만들어주었습니다.

**looks like:**
```
    <IntersectionArea onIntersectionStart={()=> console.log("노출")}>
        <div>보이면 console.log!</div>
    </IntersectionArea>
```