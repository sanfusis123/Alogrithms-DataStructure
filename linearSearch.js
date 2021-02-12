const arr = ['India' , 'Nepal' , 'Korea' , 'China' , 'Japan' , 'South Korea' , 'Abudabi' , 'Dubai', 'India', 'Japan' , 'Russia'];

const linearSearchFindOne = (arr , elm)=>{
    let result = 0;
    let indexes = [];
     for(let i=0; i<arr.length; i++){
           if(arr[i].toLowerCase() == elm.toLowerCase()){
               indexes.push(i);
               result++;
               break;
           }
        }
  return {result , indexes};
}

console.log(linearSearchFindOne(arr , 'japan'));


const linearSearchAll = (arr , elm)=>{
    let result =0;
    let indexes = [];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i].toLowerCase()=== elm.toLowerCase()){
            indexes.push(i);
            result++
        }
    }
    return{result , indexes}
}



console.log(linearSearchAll(arr , 'india'));


