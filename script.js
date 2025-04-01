document.addEventListener('DOMContentLoaded', function(){
    const aumentarFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualfonte = 1;

    aumentarFonteBotao.addEventListener('click', function(){
        tamanhoAtualfonte += 0.1
        document.body.style.fontsize = `${tamanhoAtualfonte}rem`;
    });
});