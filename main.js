const array = [2,3,4,5,6]

array.forEach(item => {
    if (item % 2 == 0){
        console.log("o número é par: "+ item);
    }else{
        console.log ("o número é impar: " + item);
    }
})