function solution(nums) {
    const canICatchCount = Math.floor(nums.length / 2);

    const set = new Set(nums);

    return set.size > canICatchCount ? canICatchCount : set.size;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/1845
 */