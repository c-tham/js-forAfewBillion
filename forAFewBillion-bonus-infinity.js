var days=99;
var amt=0.01

for (x=1;x<=days;x++){
    console.log(amt+" - "+x);
    amt=amt+amt;
    if (amt > Infinity) {
        break;
    }
}
console.log("Total amount for "+x+" is $"+amt);