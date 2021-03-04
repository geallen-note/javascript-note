var singleNumber = function(nums) {
    let ans = 0;
    for(const num of nums) {
        ans ^= num;
    }
    return ans;
};
console.log(singleNumber([4,1,2,1,2]))

async function test(){
    const ret = 10;
    return ret;
}

console.log(test())
// console
