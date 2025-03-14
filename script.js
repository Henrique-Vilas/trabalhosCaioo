function Impar(){
    let msg = "";

    for(let i = 1; i <= 100; i ++){
        if(i % 2 !== 0){
    
            msg +=  i + ", ";
        }
     }

    alert(msg);
}
function soma(){
    
    var n1 = parseFloat (prompt("Digite um numero"))
    var n2 = parseFloat (prompt("Digite outro numero"))
    
    var a = 0;
    
    a = n1 + n2
    
  alert(a);
}

function verifique(){

    let msg = ""
    let num = parseInt(prompt("digite um numero"))

    if(num%2!=0){
        msg="Este numero é impar"
    } else {
        msg="este numero e par"
    } 
    alert(msg)
}

function fatorial(){

    let msg = ""
    let num = parseInt(prompt("digite um numero"))
    let resultado = 1

    for( i = 1; i <= num; i++){
        resultado *= i
    }
    msg+=("" + resultado)

    alert(msg)
}

function inverte(){

var string =  (prompt("Digite uma palavra"))

alert(string.split('').reverse().join('')) //split - separa as palavra em letras
                                           //reverse - inverte a ordem das letras
                                           //join - junta as letras novamente em uma string(palavra) 
}
function fibonacci(){

    let a = 0
    let b = 1
    let num = parseInt(prompt("digite um numero"))

    for(let i  = 0; i < num; i++){
        let temp = a; //temp = vetores
        a = b;
        b = temp + b; //temp parametro usado para guardar um valor na memoria 
        
    }
    alert(a)
}
function pafrapa(){
    var string =  (prompt("Digite uma palavra"))
    var gnirts = ""
    gnirts = string.split('').reverse().join('')


    if (gnirts == string){
       alert(true)    
    }
        else{
            alert(false)
        }
    

}