import {twoSum} from "./my03";
import {expect} from "@jest/globals";

test('two sum test', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
})
