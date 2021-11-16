for(i=0; i<=20;i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

for(i=100; i>=0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

var sum = 0;

for(i=0;i<=100;i++){
    sum += i;
    if(i == 100){
        console.log(sum);
    }
}

product=1

for(i=1;i<=12;i++){
    product*=i;
    if(i==12){
        console.log(product);
    }
}