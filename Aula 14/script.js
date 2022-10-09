function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        //Bom Dia
        img.src = '/Modelo/imagens/fotomanha.png'
        document.body.style.backgroundColor = '#00BFFF'
    } else if (hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = '/Modelo/imagens/fototarde.png' 
        document.body.style.backgroundColor = '#F4A460'       
    } else {
        //Boa Noite
        img.src = '/Modelo/imagens/fotonoite.png'
        document.body.style.backgroundColor = '#808080'
    }
}