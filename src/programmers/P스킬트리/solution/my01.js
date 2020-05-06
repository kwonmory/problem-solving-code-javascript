function solution(skill, skill_trees) {

    let ans = 0;
    let skillArr = [...skill];

    for (let target in skill_trees) {
        const indexArr = []; // 인덱스 저장, 순서를 보기 위함
        const strArr = new Array(skill_trees[target].length).fill(''); // 문자열 저장, 순서 보장하기 위함

        skillArr.forEach(v => {
            const index = skill_trees[target].indexOf(v);

            if (index !== -1) {
                indexArr.push(index);
                strArr[index] = v;
            }
        });

        const indexArrStr = indexArr.join('');

        const sortedArrStr = indexArr.sort((a, b) => a - b).join('');
        // 여기에다가 skill 뒷 부분부터 하나씩 있는지 검사 필요
        // 추가로 문자 배열을 저장해놓자
        // strArr 를 이용하여 skillArr와 순서가 맞는지 체크해야함

        const checkNumber = skillArr.join('').indexOf(strArr.join(''));

        if (indexArrStr === sortedArrStr && checkNumber === 0) {
            // 일단 순서에 변화가 없어야하며, 앞에부터 시작해야되니 검사했을 때, 0 인덱스를 가지고 있어야한다.
            ans++;
        }
    }
    return ans;
}

module.exports = solution;

/*

각각 스킬 하나를 가지고 indexof 로 검사해서
배열로 저장하고 그리고 순서대로 되어있는지만 체크하면 되겠는걸?
 */