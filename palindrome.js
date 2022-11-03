function palinDrome(string){

let rev="";
for(let i=string.length-1;i>=0;i--){
rev += string[i];
}
return rev==string;

}
let ans = palinDrome("madam");
console.log(ans);

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


