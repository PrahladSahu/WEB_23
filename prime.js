function checkPrime(number){
let facter=0;
for(let i=1;i<=number;i++){
if(number%i==0){
factor++
}

}
if(factor==2){
console.log(num,"prime")
}else{
console.log("Not a prime")
}
}
checkPrime(17);
