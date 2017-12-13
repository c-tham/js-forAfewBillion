var days=99;
var amt=0.01

for (x=1;x<=days;x++){
    console.log(amt+" - "+x);
    amt=amt+amt;
    if (amt > 1000000000) {
        break;
    }
}
console.log("The total of "+x+" days to generated total amount is $"+amt);