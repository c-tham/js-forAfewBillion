var days=30;
var amt=0.01

for (x=1;x<=days;x++){
    console.log(amt+" - "+x);
    amt=amt+amt;
}
console.log("Total amount for "+days+" is $"+amt);