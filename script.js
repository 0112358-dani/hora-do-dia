function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde     
        img.src = 'tarde.png.png'
    } else {
        //boa noite
        img.src = 'noite.png'
    }























}












