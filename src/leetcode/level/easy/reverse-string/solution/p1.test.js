import reverseString from "./p1";

test.each([
    [["h","e","l","l","o"], ["o","l","l","e","h"]],
    [["H","a","n","n","a","h"], ["h","a","n","n","a","H"]]
])('reverse string', (input, output) => {
    expect(reverseString(input)).toEqual(output);
});