const isHappy = (n) => {
    let set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        } else {
            set.add(n);
        }
        n = splitAndSum(n);
    }

    return n !== 1 ? false : true;
};

const splitAndSum = (n) => {
    let num = n.toString().split("").map(Number);

    return num.reduce((acc, curr) => {
        return acc + Math.pow(curr, 2);
    }, 0);
};

/** 배운점
    Set을 활용하여,같은 숫자가 나오면,또 같은 행동을 반복할 것이므로
    같은 숫자가 나올 경우 false 를 반환하는 방법

 */
