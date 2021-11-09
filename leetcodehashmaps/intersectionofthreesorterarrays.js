var arraysIntersection = function(arr1, arr2, arr3) {
    let result = [];
    let duplicates = [];
    
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                duplicates.push(arr1[i])
            }
        }
    }
    for (let i = 0; i < duplicates.length; i++){
        for (let j = 0; j < arr3.length; j++){
            if (duplicates[i] === arr3[j]){
                result.push(duplicates[i])
            }
        }
    }
    return result;
};

//