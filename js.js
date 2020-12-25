function anagram(s) {
    if(s.length%2 != 0){
        return -1;    
    }else {
        
        let sLength = s.length/2;
        let s1 =[],
            s2 =[];
        
//         CREATE THE TWO ARRAYS
        for(let i =0; i<sLength; i++){
            s1.push(s[i])
        }
        for(let i =sLength; i<s.length; i++){
            s2.push(s[i])
        }
        
//          COMPARE THEM
        
        for(var i=0; i<s1.length; i++){
            for(var x=0; x<s2.length; x++){
                if (s1[i]==s2[x]) {
                    s2.splice(s2.indexOf(s2[x]),1)
                    break;
                }
            }
        }
        console.log(s1)
        console.log(s2)

        return s2.length
    }
}

console.log(anagram('aaabbb'))




// function anagram(s) {
//     if(s.length%2 != 0){
//         return -1;    
//     }else {
        
//         let sLength = s.length/2;
//         let s1 =[],
//             s2 =[];
        
// //         CREATE THE TWO ARRAYS
//         for(let i =0; i<sLength; i++){
//             s1.push(s[i])
//         }
//         for(let i =sLength; i<s.length; i++){
//             s2.push(s[i])
//         }
        
// //         Arrange them then .. COMPARE THEM
//         s1.sort();
//         s2.sort();
//         let counter =0;
//         for(let i =0; i<sLength; i++){
//             if(s1[i] !== s2[i]){
//                 counter += 1;
//             }
//         }
        
//         return counter;
//     }
// }