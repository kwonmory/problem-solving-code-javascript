function solution(tickets) {

    // dfs 로 풀기
    let ans = 0;
    let check = new Array(10000).fill(false);
    let stack = [];
    console.log(tickets);

    tickets.sort();

    console.log(tickets);


    dfs("ICN", 0);

    return ans;

    function dfs(current, cnt) {
        stack.push(current);

        if (cnt === tickets.length) {
            ans = stack;
            return true;
        }

        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] === current && !check[i]) {
                check[i] = true;
                if (dfs(tickets[i][1], cnt + 1)) {
                    return true;
                }
                check[i] = false;
            }
        }

        stack.pop();
        return false;
    }
}


module.exports = solution;