function solution(arr) {
    if (arr.length === 1) return [-1];

    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    // arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1); // 이 방법으로도 가능

    return arr;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

    모든 케이스를 실패하고 있음
    심지어 시간초과도 있네..

    틀린 이유 : Math.min() 을 할 때, arr 로 하면 NaN 가 나오고 ...arr 하면 된다.

    왜일까 : arr 은 일단 배열이다.
    나는 배열을 Math.min() 에 넣으면 되는 줄 알았다.
    하지만, 배열이 들어가면 안되는 것이였다.
    숫자가 들어가야한다. 전개 연산자는 배열로 된 부분을 전개해줌으로써
    각각 인자로 들어갈 수 있게 해준다.
    Math.min.apply(null, arr) 이렇게 apply 로 첫번째는 this, 두번째는 배열을 넣어서 사용할 수 있다.

 */