const tituloTrabalho1 = "Lorem ipsum";
const tituloTrabalho2 = "Suspendisse eget";
const tituloTrabalho3 = "Fusce lorem";
const descricaoTrabalho1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim lobortis egestas.";
const descricaoTrabalho2 = "Suspendisse eget vehicula ante. Nunc molestie tellus mi, quis egestas erat vulputate in.";
const descricaoTrabalho3 = "Fusce lorem nunc, vehicula mattis bibendum eget, scelerisque sed ante. Integer rhoncus eget arcu at euismod.";
const precoTrabalho1 = "R$50,00";
const precoTrabalho2 = "R$15,00";
const precoTrabalho3 = "R$500,00";
const imagemTrabalho1 = "/img/trabalhos/trab1.jpg";
const imagemTrabalho2 = "/img/trabalhos/trab2.jpg";
const imagemTrabalho3 = "/img/trabalhos/trab3.jpg";
const altImagemTrabalho1 = "alt imagem 1";
const altImagemTrabalho2 = "alt imagem 2";
const altImagemTrabalho3 = "alt imagem 3";
const imagemEmDestaque = document.getElementById("imagemdestaque");
const tituloEmDestaque = document.getElementById("titulodestaque");
const descricaoEmDestaque = document.getElementById("descricaodestaque");
const precoEmDestaque = document.getElementById("precodestaque");



const trabalho1 = document.getElementById("trabalho1");
const trabalho2 = document.getElementById("trabalho2");
const trabalho3 = document.getElementById("trabalho3");

imagemEmDestaque.src = imagemTrabalho1;
imagemEmDestaque.alt = altImagemTrabalho1;
tituloEmDestaque.innerHTML = tituloTrabalho1;
descricaoEmDestaque.innerHTML = descricaoTrabalho1;
precoEmDestaque.innerHTML = precoTrabalho1;

trabalho1.alt = altImagemTrabalho1;
trabalho2.alt = altImagemTrabalho2;
trabalho3.alt = altImagemTrabalho3;

ContaClick();

function ContaClick() {
    document.getElementById("trabalho1").addEventListener("click", function(){
        console.log(altImagemTrabalho1);
        imagemEmDestaque.src=imagemTrabalho1;
        imagemEmDestaque.alt=altImagemTrabalho1;
        tituloEmDestaque.innerHTML=tituloTrabalho1;
        descricaoEmDestaque.innerHTML=descricaoTrabalho1;
        precoEmDestaque.innerHTML=precoTrabalho1;
        imagemEmDestaque.focus();
    })

    document.getElementById("trabalho2").addEventListener("click", function(){
        console.log(altImagemTrabalho2);
        imagemEmDestaque.src=imagemTrabalho2;
        imagemEmDestaque.alt=altImagemTrabalho2;
        tituloEmDestaque.innerHTML=tituloTrabalho2;
        descricaoEmDestaque.innerHTML=descricaoTrabalho2;
        precoEmDestaque.innerHTML=precoTrabalho2;
        imagemEmDestaque.focus();
    })

    document.getElementById("trabalho3").addEventListener("click", function(){
        console.log(altImagemTrabalho3);
        imagemEmDestaque.src=imagemTrabalho3;
        imagemEmDestaque.alt=altImagemTrabalho3;
        tituloEmDestaque.innerHTML=tituloTrabalho3;
        descricaoEmDestaque.innerHTML=descricaoTrabalho3;
        precoEmDestaque.innerHTML=precoTrabalho3;
        imagemEmDestaque.focus();
    })
};



const botaoEncomendar = document.getElementById("botaoencomendar");
const mensagemDoFormulario = document.getElementById("mensagemformulario");

EncomendaItem();

function EncomendaItem(){
    botaoEncomendar.addEventListener("click", function(){
    mensagemDoFormulario.innerHTML = "Gostaria de um " + tituloEmDestaque.innerHTML + ", " + descricaoEmDestaque.innerHTML + " por " + precoEmDestaque.innerHTML
    location.href = "#contato";
    })
}

