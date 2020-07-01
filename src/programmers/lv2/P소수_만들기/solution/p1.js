function solution(nums) {
    const MAX = 1000 * 50;
    let ans = 0;
    const isPrime = Array(MAX).fill(0);
    const check = Array(MAX).fill(false);

    for (let i = 2; i < MAX; i++) {
        if (!check[i]) {
            isPrime[i] = i;
            for (let j = i; j < MAX; j += i) check[j] = true;
        }
    }

    go([], 0);

    return ans;

    function go(selected, index) {
        if (selected.length === 3) {
            const result = selected.reduce((acc, v) => acc+=v, 0);
            if (isPrime[result] > 0) ans++;
            return;
        }

        if (index >= nums.length || selected.length > 3) return;

        go([...selected], index + 1);
        go([...selected, nums[index]], index + 1);
    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12977

    일단 값이 구해진다음에 소수 구하기는 힘드니깐
    에라테네스의 체 쓰고

   각 값은 재귀를 통해서 구하기 어떨까
 */