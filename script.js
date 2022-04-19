
let imagem = document.querySelector("img");
let hidden = "hidden.png";
let view = "eye.png";


let input = document.querySelector("#senha");

imagem.addEventListener("click", troca);

function troca(){
    
   if(input.type == "password"){
        input.type = "text";
        imagem.src = view;
   }else{
       input.type = "password";
       imagem.src = hidden;
   }

}
