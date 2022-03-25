function isSubsequence(str1,str2) {
  if(str1.length === 0) return false;
  
  let count = 0;
  
  for(let c of str2){
      if(str1[count] === c) count++;
  }
  console.log(count);
  return (str1.length === count);
}


isSubsequence('abc','abracadabra')
