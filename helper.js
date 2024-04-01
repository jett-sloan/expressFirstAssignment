function calculateMean(nums){
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum 
}

function calculateMedian(nums){
    const sortedNums = nums.slice().sort(function(a, b){
        if (a < b){
            return -1
        }else if (a > b){
            return 1
        }else{
            return 0
        }
    })
    const n = sortedNums.length;
    if(!n % 2 === 0 ){
        return sortedNums[Math.floor(n / 2)]
    }else{
        let middle = n / 2
        return (sortedNums[middle - 1] + sortedNums[middle]) / 2;
    }
}

function calculateMode(nums){
    let count = {};
    for(let num of nums){
        if(count[num]){
            count[num]++;
        }else {
            count[num] = 1;
        }
    }

    let mostFrequentNumber;
    let maxCount = 0;

    for (let num in count) {
        if (count[num] > maxCount) {
            mostFrequentNumber = num;
            maxCount = count[num];
        }
    }

    return {
        mostFrequentNumber: mostFrequentNumber,
        count: maxCount
    };
    
}


module.exports =  { calculateMean , calculateMedian, calculateMode};