function solution(phone_number) {
    return Array(phone_number.length - 4).fill('*').join('') + phone_number.substring(phone_number.length - 4)
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

    정규식

    s.repalce(/\d(?=\d{4}/g, "*");
    "*".repeat()

    "*".repeat(s.length - 4) + s.slice(-4);
 */