function multiplos3(){
    let msg = "";

for(let i = 1; i <= 100; i ++){
    if(i % 3 == 0){

        msg +=  i + ", ";
    }
 }

alert(msg);

}
function quadrado(){
    
    var n1 = parseFloat (prompt("Digite um numero"))
    q = n1*n1
    alert(q)
}

function numcaracteres(){

    var strg = (prompt("Digite uma palavra"))

    alert(strg.length) /*.length é usado para retornar  
                          o numero de caracteres*/      

}

function maiorValor(){

    var n1 = parseFloat(prompt("Digite o primeiro numero"))
    var n2 = parseFloat(prompt("Digite o segundo numero"))

    if(n1 > n2){
        msg = n1 + " é maior que " + n2;
    }else if(n1 < n2){
        msg = n1 + " é menor que " + n2;
    }else{
        msg = n1 + " é igual a " + n2;
    }
    alert(msg)
}
function verificanumero(){

    var n1 = parseFloat(prompt("digite um numero"))

    if(n1  < 0){
        msg = n1 + " É menor que 0"
    }else if(n1 > 0){
        msg = n1 + " É maior que 0"
    }else{
        msg = n1 +" É igual a 0"
    }
        alert(msg)
}

function numaleatorio(){
    var n1 =  parseFloat( prompt("Digite a quantidade de numeros a serem gerados"))
    let numeros = [];

    for(let num = 0; num < n1; num++){
       let numgerado = Math.floor(Math.random() * 100) + 1; /*Math.random() gera um número entre 0 e 1
                                              Math.random() * 100 transforma isso em um número entre 0 e 99.9999  
                                               Math.floor(...) arredonda para baixo, resultando em um número entre 0 e 99
                                                +1 ajusta para o intervalo desejado 1 a 100 */
         
                                                numeros.push(numgerado)
    
    
    }

    alert(numeros)
}
function consoantes (){
    let string = prompt("Digite uma frase ou palavra")
    let vogais = "aeiouAEIOU"
    let count = 0
    
    for(let i = 0; i < string.length; i++){
        if(vogais.includes(string[i])){
            count++
        }
        }
        conc = string.length - count

    
    alert("Número de consoantes : " + conc)
}
function divisores(){

    var n1 = parseInt( prompt("Digite o numero para ver seus divisores"))
    div = []

    for(let i = 1; i <= n1; i++){
        if(n1 % i == 0){
            div.push(i)
        }
    }
    alert(div)
}
function media(){

    let num = parseInt(prompt("Digite a quantidade de numeros a serem escritos:"))
    let numeros = []
    let total = 0

    for(let i = 0; i < num; i++){
        let temp = parseInt(prompt(`Digite o numero na posição ${i+1}`))
        numeros.push(temp)
    }

    for(let i = 0; i < num; i++){
        total = total + numeros[i]  
    }
    total = total/num

alert(total)
}
