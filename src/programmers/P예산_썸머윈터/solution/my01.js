function solution(d, budget) {
   d.sort((a,b) => a-b);

   let ans = 0;
   for (let i = 0; i < d.length; i+=1) {
       let subtractBudget = budget - d[i];
       if (subtractBudget < budget && subtractBudget >= 0) {
            ans++;
            budget -= d[i];
            console.log(budget);
        } else {
            break;
        }
   }
   
   return ans;

}

module.exports = solution;

/*
[첫번째 생각]
정렬하고 하나씩 빼주면 끝나는 문제 아닌가?


 */