# THIS IS ABOUT
이미지 element를 lazy loading처리하기 위해 만들었던 컴포넌트와 훅입니다.

`useImageVisible`: 이미지가 유저의 눈에 포착되었는지를 판단하는 커스텀 훅. ([`useIntersection`](https://github.com/luke7231/hooks_or_compound_components/blob/613dec401b6f19cefc3f358957b2e4b9ec75958a/intersection%20observer%20api%20%EC%9C%A0%ED%8B%B8/use-intersection.ts) 이라는 훅을 적용하여 만들었습니다.)

`LazyImg`: 위 훅을 적용하여 imageURL만 입력하면 lazying이 적용되도록 컴포넌트화.


look likes:
```

    // useImageVisible
    const { elementRef, isLoaded } = useImageVisible(lazy);
    
    // LazyImg
    <LazyImg src="" ... />
    

```