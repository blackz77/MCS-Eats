function clique(btnclicado){
     //agora, quando clicar em outro botao, ele remove a marcação desse
    // 1- chama o botão colocando dentro do () a classe que vai ser removida, no caso a marcação//
    const btnanterior = document.querySelector('.clicado');
    //agora verifico o que tem o clicado, e boto pra o que na tiver null, remover o clicado
    if(btnanterior !== null){
        btnanterior.classList.remove('clicado');
    }

    //passo 1- pegar o botão//
    const btn = document.querySelector(btnclicado);
    //passo 2 - adicionar a classe do clique ao botao//
    btn.classList.add('clicado');
    //passo 3 - adicionar um parametro a função, que guarda o botão dentro dela para editar//
    //ao inves de colocar pra pegar uma classe, eu coloco pra pegar  o que foi guardado na função, nesse caso eu substituo o .alimentos por btnclicado

   
}

//-------------------------------------bebida

function cliqueb(bebid){
    const bbdanterior = document.querySelector('.clicadob');
    if(bbdanterior !== null){
        bbdanterior.classList.remove('clicadob');
    }

    const bbd = document.querySelector(bebid);
    bbd.classList.add('clicadob');
}

//--------------------------------------sobremesa

function cliques(sobr){
    const sobranterior = document.querySelector('.clicados');
    if(sobranterior !==null){
        sobranterior.classList.remove('clicados');
    }


    const sobrm = document.querySelector(sobr);
    sobrm.classList.add('clicados');
}