

const nums=[3,4,7,2,5,3,11,12,13];
const target=20;
for(i=0; i<nums.length; i++) {
    for(j=i;j<nums.length;j++) {
        if (i==j){
            continue;
        }
        console.log(nums[i]+nums[j]);
        if(nums[i]+nums[j]==target){
            console.log("pobjedio sam"); 
        }
    }
}
