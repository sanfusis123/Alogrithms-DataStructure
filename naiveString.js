 const naiveSearch = (str , word)=>{
     let count = 0;
     let indexes = [];
     for(let i=0;i<str.length; i++){

        for(let j=0; j<word.length; j++){
           if(word[j] !== str[i+j]) {
            break;

        }
        if(j===word.length-1){
             count++;
               indexes.push(i);
        }
     }  
 }
 return {count, indexes};    
 
 }
 console.log(naiveSearch('hate me for the all time kiss me hat jao me is comming' , 'me'));


 


