function Carro (a,b,c,d,e){    //uma função que é uma classe 
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





var carro = new Carro ('siena', 'laranja', 2006, 80000  , true);  //declarou a var p classe 


console.log (carro);

//praticamente POO com Python do 3 semestre mas com JS