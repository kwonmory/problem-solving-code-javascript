/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {

    const filterData = nums.filter(v => v >= 0);

    if (filterData.length === 0) {
        return 1;
    }

    filterData.sort((a,b) => a - b);
    for (let i = 1; i <= filterData[filterData.length-1]+1; i++) {
        if (!filterData.includes(i)) {
            return i;
        }
    }
};

export default firstMissingPositive;