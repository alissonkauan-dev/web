

let pound = parseFloat(prompt("Qual o seu peso?"))
let height = parseFloat(prompt("Qual a sua altura?"))

imc(pound, height);


function imc(kg, cm) {
    
    if (kg / (cm**2) <= 18.5) {
        console.log("Você está abaixo do peso");
    }

    else if (kg / (cm**2) >= 18.5 && kg / cm**2 <= 25) 
        console.log("Você está com o peso ideal");

    else if (kg / (cm**2) >= 25 && kg / cm**2 <= 30){
        console.log("Você está acima do peso");
    }

    else {
        console.log("Você está obeso");
    }
}
