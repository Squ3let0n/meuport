document.querySelector (".menu-lines").addEventListener("click",() => 
    document.querySelector(".container").classList.toggle("show-menu")
);

function goTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    })
}
//abaixo o segundo quadradinho
function botao(){
    document.getElementById("clicou").innerHTML = "<b>Sendo redirecionado para o GitHub</b>";
    console.log(document.getElementById("clicou"));
    window.location = "https://github.com/Squ3let0n"
}
//abaixo o ultimo quadradinho
function button(){
    document.getElementById("saibamaishtml").innerHTML = "<b>Você clicou no ultimo</b>"
    console.log(document.getElementById("saibamaishtml"));
    window.location = "https://google.com"
}