var tabela = document.querySelector('table')
var media = []
var aluno = document.getElementById('nome')
var alg = document.getElementById('alg')
var html_css = document.getElementById('html_css')
var js = document.getElementById('js')

var btn = document.getElementById('btn').addEventListener('click', function () {
    if (aluno.value == null || alg.value == null || html_css.value == null || js.value == null) {
        alert('nao digitou em alguma das caixas acima')
    } else {
        let m = (Number(alg.value)+ Number(html_css.value)+ Number(js.value))/3
        media.push(m)
        tabela.innerHTML += `<tr>
        <td>${aluno.value}</td><td>${alg.value}</td><td>${html_css.value}</td><td>${js.value}</td><td >${m}</td>
    </tr>`
    notas()
        
    }
})
function notas() {
    for(var i = 1; i< tabela.rows.length; i++){
    
        let n1 = Number(tabela.rows[i].cells[1].innerHTML)
        let n2 = Number(tabela.rows[i].cells[2].innerHTML)
        let n3 =  Number(tabela.rows[i].cells[3].innerHTML)
        media[i] =  (n1 +n2 + n3)/3
        tabela.rows[i].cells[4].innerHTML = media[i]
        if (media[i] > 70){
            tabela.rows[i].cells[4].style.color = 'blue'

        }else{
            tabela.rows[i].cells[4].style.color = 'red'
        }
    }
}

notas()