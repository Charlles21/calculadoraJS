function calcular(n1, n2){
    n1 = parseFloat(document.getElementById("numero1").value)
    n2 = parseFloat(document.getElementById("numero2").value)   

    selector = document.getElementById("selector").value

  switch (selector) {
    case '+':
        calculo = (n1 + n2)
            document.getElementById("result").innerHTML = `o resultado é ${calculo}`
        break;
        case '*':
        calculo = (n1 * n2)
            document.getElementById("result").innerHTML = `o resultado é ${calculo}`
        break;
        case '÷':
        calculo = Math.round((n1 / n2))
        if(Number.isNaN(calculo)){
            document.getElementById("result").innerHTML = `insinra um divisivel valido!`
            break;
        }
            document.getElementById("result").innerHTML = `o resultado é ${calculo}`
        break;
        case '-':
        calculo = (n1 - n2)
        
            document.getElementById("result").innerHTML = `o resultado é ${calculo}`
        break;
  
    default:
        document.getElementById("result").innerHTML = `nao foi possivel calcular!`
        break;
  }
            
  

}