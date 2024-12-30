const select=document.getElementById("middle")

select.addEventListener('click',()=>{
    if(select.style.border==="none" || select.style.border===""){
        select.style.border="1px solid blue"
    }
    else{
        select.style.border="none"

    }
})