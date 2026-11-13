class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const a=[];
        const sortedNums = nums.sort(function(a,b){return a-b})
        for(let x in nums){
            a[x] = nums[x];
            if(a[x] === a[x-1]) return true
        }
        return false
    }
}
