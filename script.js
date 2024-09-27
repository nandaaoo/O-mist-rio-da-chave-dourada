const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + thisAttribute('data-proximo')

        atual.ClassList.remove('ativo')
        document.getElementById(proximoPasso).ClassList.add('ativo')
    })
} )