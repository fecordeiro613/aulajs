var carros = [];

function Carro (a,b,c,d,e){    //uma função que é uma classe 
    this.modelo = a;
    this.cor = b;
    this.ano = c;
    this.valor = d;
    
} 




/*console.log(lista);

console.log(lista[1]);

lista.push("Felipe"); //adiciona o dado
console.log(lista);

lista.pop("Felipe");  //tira o dado 
console.log(lista);

console.log(lista.length);


carro = [
    {modelo:"Siena", ano: 2001, cor: "prata"}

]*/



console.log(carros);

var carro1 = new Carro ('siena', 'laranja', 2006, 80000);

carros.push(carro1); //adiciona o dado
console.log(carros);

console.log(carros.length);

var carro2 = new Carro ('polo', 'laranja', 2020, 80000);

carros.push(carro2); //adiciona o dado
console.log(carros);

console.log(carros.length);


/*function Carro (a,b,c,d,e){    //uma função que é uma classe 
    this.modelo = a;
    this.cor = b;
    this.ano = c;
    this.valor = d;
    

    if (e = true){
        console.log("o carro é popular ");
    }else{
        console.log ("o número não é popular");
    }
}    





var carro = new Carro ('siena', 'laranja', 2006, 80000  , false);  //declarou a var p classe 


console.log (carro);

//praticamente POO com Python do 3 semestre mas com JS*/







/*function Carro (a,b,c,d,e){    //uma função que é uma classe 
    this.modelo = a;
    this.cor = b;
    this.ano = c;
    this.valor = d;
    this.popular = e;


    if (e = true){
        console.log("o carro é popular ");
    }else{
        console.log ("o número não é popular");
    }
}    





var carro = new Carro ('siena', 'laranja', 2006, 80000  , false);  //declarou a var p classe 


console.log (carro);

//praticamente POO com Python do 3 semestre mas com JS*/