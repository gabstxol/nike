const select=document.getElementById("middle")
const menu=document.getElementById("fita")
const header=document.getElementById("cabeca")

select.addEventListener('click',()=>{
    if(select.style.border==="none" || select.style.border===""){
        select.style.border="1px solid blue"
    }
    else{
        select.style.border="none"

    }
})
const lista = document.getElementById('lista');
const btnEsquerdo = document.getElementById('click-esquerdo');
const btnDireito = document.getElementById('click-direito');
let leftValue = 0; // Valor inicial de `left`

btnEsquerdo.addEventListener('click', () => {
    leftValue -= 10; // Diminui 10%
    lista.style.left = `${leftValue}%`;
    lista.style.transition = "all 0.5s ease-in-out";
});

btnDireito.addEventListener('click', () => {
    leftValue += 10; // Aumenta 10%
    lista.style.left = `${leftValue}%`;
    lista.style.transition = "all 0.5s ease-in-out";
});
