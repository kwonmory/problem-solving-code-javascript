function solution(strings, n) {
    console.log(strings);
    strings.sort((a,b) => {
        const cmp = a.charAt(n).localeCompare(b.charAt(n));
        if (cmp === 0) return a.localeCompare(b) > 0 ? 1 : -1;
         else return cmp > 0 ? 1 : -1;
    });

    return strings;
}

module.exports = solution;