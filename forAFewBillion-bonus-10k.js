var days=99;
var amt=0.01

for (x=1;x<=days;x++){
    console.log(amt+" - "+x);
    amt=amt+amt;
    if (amt > 20000) {
        console.log(amt+" - "+(x+1));
        break;
    }
}
console.log("The total of "+(x+1)+" days to generated total amount is $"+amt);