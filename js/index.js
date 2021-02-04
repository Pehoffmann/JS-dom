let header = document.querySelector('header');
header.style.backgroundColor = '#6d267566';

let linkHome = document.querySelectorAll('a');
console.log(linkHome[1].getAttribute('href'));

linkHome[1].setAttribute('href','https://www.google.com.br')


 let title = document.querySelector('h1')
    title.onclick = function() {
        title.style.fontSize = '10px';
    }
    let name = document.querySelector('.name');
        name.onfocus = function(){
            name.style.backgroundColor = '#00f'
        }
        document.querrySelector('form').onsubmit = function() {
            let erros

            let nome = document.querrySelector('#nome')
            let email = document.querrySelector('#email')
            let descricao = document.querrySelector('#descricao')
                if(nome.value.length == 0) {
                    erros.push({"nome": "Campo de nome precisa ser preenchido!"})
                }
        }
