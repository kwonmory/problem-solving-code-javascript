function solution(user_id, banned_id) {
    const set = new Set();
    const visited = new Array(10).fill(false);
    dfs(user_id, banned_id, 0, set,visited);
    // console.log(user_id[0].length);
    return set.size;
}

function dfs(user_id, banned_id, index, set, visited) {
    if (index >= banned_id.length) {
        let res = '';
        for (let i = 0; i < user_id.length; i++) {
            if (visited[i]) {
                res += i;
            }
        }
        set.add(res);
        return;
    }


    for (let i = 0; i < user_id.length; i++) {
        if (banned_id[index].length !== user_id[i].length || visited[i]) {
            continue;
        }

        let toggle = true;

        for (let j = 0; j < user_id[i].length; j++) {
            if (banned_id[index].charAt(j) === '*') {
                continue;
            }
            if (user_id[i].charAt(j) !== banned_id[index].charAt(j)) {
                toggle = false;
                break;
            }
        }
        if (toggle) {
            visited[i] = true;
            dfs(user_id, banned_id, index + 1, set, visited);
            visited[i] = false;
        }

    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/64064?language=javascript

    밴 당한 아이디 별로 가능한 거 체크해서
    저장해놓고, 그리고 가지수 별로 조합해보고, 조합한걸 가지고 정렬하고, 합치고 SET 에 넣어서
    결과값 가져오면 될듯 한다.


    참고 소스코드
    https://taxijjang.tistory.com/53
 */