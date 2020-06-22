function solution(clothes) {
    const countOfEachClothes = new Map();

    clothes.forEach(([_, clothesKind]) => {
        if (countOfEachClothes.has(clothesKind)) countOfEachClothes.set(clothesKind, countOfEachClothes.get(clothesKind) + 1);
        else countOfEachClothes.set(clothesKind, 1);
    });

    return [...countOfEachClothes.values()].reduce((acc, v) => acc *= (v + 1), 1) - 1;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

    각각 하나씩 입는 부분
    사실 이건 수학으로 풀면 될 것 같음
    상의 2개, 하의 3개라고 하면 입을 수 있는 가지수에 +1 씩 하고 -1 해주기

 */