const groupAnagrams = strs => {
    const map = {};

    for (let str of strs) {
        const key = [...str].sort().join('');

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(str);
    }

    return Object.values(map);
};


/**
 * 배운 내용
 * Object.values 을 이용하여 객체를 배열로 바꾼 점
 * 객체를 이용한 점
 */
