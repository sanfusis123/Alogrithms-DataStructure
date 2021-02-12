// ///Native solution

const same = (arr1 , arr2)=>{
      if(arr1.length !==arr2.length){
          return false;
      }
      for(i=0 ; i<arr1.length ; i++){
        let correctIndex  = arr2.indexOf(arr1[i]**2) ;
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex , 1);

      }
      return true;
}

const samer = (arr1 ,arr2)=>{
     for(i=0; i<arr1.length; i++){
        let findIndexfun = (arr, val)=>{
            for(j=0 ;j<arr.length; j++ ){
                 let a= arr[j] === (val**2)
                  if(a){
                      return j;
                  }
                }
                return -1;
              }

       let  correctIndex = findIndexfun(arr2 , arr1[i]);
       if(correctIndex === -1){
            return false
       }
       arr2.splice(correctIndex , 1);

     }
     return true;
}








console.log(samer([1,2,3] , [1,4,7]));
console.log(same([1,2,3] , [1,4,9]));


// factorised  solutions 

const frequency = (arr1 , arr2)=>{
   let frequency1 = {};
   let frequency2 = {};

   for(i=0 ; i<arr1.length; i++){
       let a = arr1[i];
        
       if(frequency1[a] == 'undefined'){
           frequency1[a] =  1
       }else{
        frequency1[a] =  frequency1[a] || 0 +1;
       }
   
   }
   for(i=0 ; i<arr1.length; i++){
    let a = arr1[i];
     
    if(frequency1[a] == 'undefined'){
        frequency1[a] =  1
    }else{
     frequency1[a] =  frequency1[a] +1;
    }

}



}





