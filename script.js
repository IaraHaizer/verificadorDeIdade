function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade<=2) {
                //bebê
                img.setAttribute('src', 'foto_bebeM.png')
            }else if (idade<=12) {
                //criança
                img.setAttribute('src', 'foto_menino.png')
            }else if (idade<=21) {
                //adolescente
                img.setAttribute('src', 'foto_adolescenteM.png')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'foto_homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto_senhor.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade<=2) {
                //bebê
                img.setAttribute('src', 'foto_bebeF.png')
            }else if (idade<=12) {
                //criança
                img.setAttribute('src', 'foto_menina.png')
            }else if (idade<=21) {
                //adolescente
                img.setAttribute('src', 'foto_adolescenteF.png')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'foto_mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto_senhora')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}