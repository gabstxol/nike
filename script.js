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