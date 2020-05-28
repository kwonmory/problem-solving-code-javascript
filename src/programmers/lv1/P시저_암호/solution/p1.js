function solution(s, n) {
    return s.split('').map(v => {
        if (v !== ' ') {
            let newVar = v.charCodeAt(0) + n;
            let newCharCode = 0;
            if (v >= 'a' && v <= 'z') {
                // 소문자
                newCharCode = (newVar > 122) ? newVar % 122 + 96 : newVar;
            } else {
                // 대문자
                newCharCode = (newVar > 90) ? newVar % 90 + 64 : newVar;
            }
            return String.fromCharCode(newCharCode);
        }

        return v;
    }).join('');
}

export default solution;