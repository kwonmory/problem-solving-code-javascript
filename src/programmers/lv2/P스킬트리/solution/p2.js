function solution(skill, skill_trees) {
    let ans = 0;
    const skills = skill.split('');

    skill_trees.forEach((v, _) => {
        const answerSkill = v.split('');
        const jar = [];

        answerSkill.forEach((as) => {
            for (let i = 0; i < skills.length; i++) {
                if (as === skills[i]) {
                    jar.push(i);
                    break;
                }
            }
        })
        const jarString = jar.join('');

        const cmpJoin = [...Array(jar.length)].map((_, i) => i).join('');

        if (jarString === jar.sort((a, b) => a - b).join('')
        && cmpJoin === jarString) ans++;
    });

    return ans;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript
 */