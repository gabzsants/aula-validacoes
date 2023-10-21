import ehCpf from './cpf.js';

let inputs;
inputs=document.querySelectorAll("[required]");
console.log(inputs);

inputs.forEach((campo)=>{
    campo.addEventListener("blur",()=>{verificaCampos(campo)});
});

function verificaCampos(campo){
if(campo.name=="cpf" && campo.value.length>=11)
    ehCpf(campo);

}

$(document).ready(function(){
$('#rg').inputmask('99.999.999-9')
});

$(document).ready(function(){
 $('#cpf').inputmask('999.999.999-99')
});