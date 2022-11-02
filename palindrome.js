function palinDrome(string){
let str="";
for(let i=string.length-1;i>=0;i--){
str += string[i];
}
if(str==string){
return true
}
return false
}
let ans = palinDrome("naman");
console.log(ans);


