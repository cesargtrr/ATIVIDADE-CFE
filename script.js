//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo({
            top: 0,
            left: 0,
            behavior:'smooth'
    })
}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementsById('usuario').value;
    var senha = document.getElementsById('senha').value;

    if(usuario == "admin" && senha == "12345678"){
        windoww.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso Negado. Dados Incorretos");
    }
}

//Ativar alert no botão cadastrar
function cadastro() {
    alert("Caddastro com sucesso!")
    window.location.href = "index.html";
}