/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    const map = new Map();
    nums.forEach(v => {
        if(map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });

    const a = map.entries();

    for (const [key, value] of a) {
        if (value >= 2) {
            return key;
        }
    }
    return nums[0];
};

export default findDuplicate;