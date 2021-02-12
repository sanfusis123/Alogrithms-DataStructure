const arr= [1,2,3,4,,5,6,7,8,9,,12,23,34,54,66,77,78,88,];

const binarySearch = (arr, elm)=>{
      let start = 0;
      let end= arr.length-1;
      let middle = Math.floor((start+end)/2);
      while(arr[middle] !== elm && middle.length < arr.length){
        if(arr[middle] <elm){
            start = middle +1
        }
        if(arr[middle] >elm){
            end = middle -1
        }
        middle = Math.floor((start+end)/2);
        console.log(middle);
       }
       if(arr[middle] ===elm){
           return middle;
       }
       return -1
}

console.log(binarySearch(arr , 100));

