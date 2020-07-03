function solution(skill, skill_trees) {

    const regx = new RegExp(`[^${skill}]`, 'g');

    return skill_trees.map(v => v.replace(regx, '')).filter(v => {

        return skill.indexOf(v) === 0 || v === ''
    }).length;

}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript

            //CBD BCD
        // CBD CBD
        // CBD CB
        // CBD BD
 */