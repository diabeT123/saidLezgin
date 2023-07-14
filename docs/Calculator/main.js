let oneValueA = document.querySelector('.oneValueA');
let oneValueB = document.querySelector('.oneValueB');
let oneValueC = document.querySelector('.oneValueC');
let oneResult = document.querySelector('.oneResult');
let oneResultButton = document.querySelector('.oneResultButton');

function culcOne(a1,b1,c1)
{
    let result = null;
    result =((a1+b1)/(1+(a1*b1)/(c1*c1)));
    return result;
}



oneResultButton.addEventListener('click', function(){

    let a1 = Number(oneValueA.value);
    let b1 = Number(oneValueB.value);
    let c1 = Number(oneValueC.value);

    let result; 
    result = culcOne(a1,b1,c1);
    
    if(isNaN(result)){
        oneResult.textContent = 'Число вводи, отсталый';
    }
    else{
        oneResult.innerHTML = result.toFixed(2);   
    }

})