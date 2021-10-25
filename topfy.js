let indexMusica = 0
let mscPlaying = document.querySelector('audio')
let duraçãoMsc = document.querySelector('.fim')
let picMsc = document.querySelector('.picart.biggest img')
let mscNameActual = document.querySelector('.mscname.biggest p')
let artistActual = document.querySelector('.artistnameactual')
document.querySelector('.musicaarea').style.height = `calc(inherit + 94px + (54px * ${musicas.length}))`

renderizarMusica(indexMusica)
document.querySelector('.playsh').addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = 0
        renderizarMusica(indexMusica)
        mscPlaying.play() 
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.lil').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 10 
    renderizarMusica(indexMusica)
    mscPlaying.play()
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.arn').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 0
    renderizarMusica(indexMusica)
    mscPlaying.play()
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.kil').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 6
    renderizarMusica(indexMusica)
    mscPlaying.play()
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.alk').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 8
    renderizarMusica(indexMusica)
    mscPlaying.play() 
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.tcc').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 4
    renderizarMusica(indexMusica)
    mscPlaying.play() 
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.byb').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 2
    renderizarMusica(indexMusica)
    mscPlaying.play()
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none' 
})
document.querySelector('.playsh.npt').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 15
    renderizarMusica(indexMusica)
    mscPlaying.play() 
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.tpg').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 17
    renderizarMusica(indexMusica)
    mscPlaying.play() 
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.mysc').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 0
    renderizarMusica(indexMusica)
    mscPlaying.play() 
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})
document.querySelector('.playsh.doismil').addEventListener('click', ()=> {
    mscPlaying.pause()
    indexMusica = 19
    renderizarMusica(indexMusica)
    mscPlaying.play() 
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
})

document.querySelector('.buton-play').addEventListener('click', tocarMusica)
document.querySelector('.buton-pause').addEventListener('click', pausarMusica)
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--
    if(indexMusica < 0) {
        indexMusica = 20
    }
    renderizarMusica(indexMusica)
})
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++
    if(indexMusica > 20) {
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
})
document.querySelector('.curtidasmb').addEventListener('click', ()=> {
    cleanMain()
    playlike.style.display = 'block'
    mylikes.classList.add('selected')
})

musicas.map((item) => {
    let valueMsc = document.querySelector('.likedmsz')
    let value = item.id
    valueMsc.innerHTML = `${value} Músicas Curtidas`
    if(item.id < 5) {
    let crtd = document.querySelector('.cmb').cloneNode(true)
    let name = item.nome
    let albm = item.musicName
    crtd.innerHTML = `${name} - ${albm}`
    document.querySelector('.cmb--').append(crtd)
}
})

function renderizarMusica(index) {
    mscPlaying.setAttribute('src', musicas[index].musica)
    mscPlaying.addEventListener('loadeddata', () => {
        mscNameActual.textContent = musicas[index].musicName
        artistActual.textContent = musicas[index].nome
        picMsc.src = musicas[index].foto 
        duraçãoMsc.textContent = musicas[index].tempo
    })
}
duraçãoMsc.textContent = segundosParaMinuto(Math.floor(mscPlaying.duration))
mscPlaying.addEventListener('timeupdate', atualizarBarra)

let msclike1 = document.querySelector('.msc.pl1 p')
let msclike2 = document.querySelector('.msc.pl2')
let msclike3 = document.querySelector('.msc.pl3')
let msclike4 = document.querySelector('.msc.pl5')
let msclike6 = document.querySelector('.msc.pl6')

/*MENU*/
let home = document.querySelector('.mn.home')
let search = document.querySelector('.mn.search')
let mnbiblioteca = document.querySelector('.mn.biblioteca')
let crplaylist = document.querySelector('.mn.playlist')
let mylikes = document.querySelector('.mn.curtidas')
let menu = document.querySelector('.menu')

/*ABAS*/
let principal = document.querySelector('.principal')
let searchaba = document.querySelector('.search--')
let biblioteca = document.querySelector('.minhaBiblioteca')
let playmain = document.querySelector('.playmain')
let playlike = document.querySelector('.playlike')
let NoRepeat = document.querySelector('.norepeat')
let topGaming = document.querySelector('.topgaming')
let lilx = document.querySelector('.lilx')
let mymscz = document.querySelector('.mymusics---') 
let oldYears = document.querySelector('.mix2000') 

/*ABAS 2*/
let baby = document.querySelector('.dababy--')
let teca = document.querySelector('.tecca--')
let lok = document.querySelector('.alok--')
let kill = document.querySelector('.thiaguinho--')
let argrande = document.querySelector('.ariana--')


/*ações principais */
let firstplay = document.querySelector('.playlist1')
let secondplay = document.querySelector('.playlist2')
let thirdplay = document.querySelector('.playlist3')
let fourthplay = document.querySelector('.playlist4')
let fifthplay = document.querySelector('.playlist5')
let sixthplay = document.querySelector('.playlist6')

let daily1 = document.querySelector('.dl.daily1')
let daily2 = document.querySelector('.dl.daily2')
let daily3 = document.querySelector('.dl.daily3')
let daily4 = document.querySelector('.dl.daily4')
let daily5 = document.querySelector('.dl.daily5')

daily1.addEventListener('click', dby)
daily2.addEventListener('click', tca)
daily3.addEventListener('click', alk)
daily4.addEventListener('click', kbk)
daily5.addEventListener('click', arn)
/*ADICIONAR AÇÕES DO MENU */
home.addEventListener('click', homeMenu)
search.addEventListener('click', searchMenu)
mnbiblioteca.addEventListener('click', bibMenu)
crplaylist.addEventListener('click', plty)
mylikes.addEventListener('click', myLikeMusic)
firstplay.addEventListener('click', minhaPlayList)
secondplay.addEventListener('click', noRepeat)
thirdplay.addEventListener('click', gaming)
fourthplay.addEventListener('click', lilnas)
fifthplay.addEventListener('click', minhasMusicas)
sixthplay.addEventListener('click', oldMusics)

/*FUNÇÕES MENU */
function homeMenu() {
    cleanMain() 
    home.classList.add('selected')
    principal.style.display = 'block'
}
function searchMenu() {
    cleanMain()
    search.classList.add('selected')
    searchaba.style.display = 'block'
}
function bibMenu() {
    cleanMain()
    mnbiblioteca.classList.add('selected')
    biblioteca.style.display = 'block'
}
function plty() {
    cleanMain()
    crplaylist.classList.add('selected')
    playmain.style.display = 'block'
}
function myLikeMusic() {
    cleanMain()
    mylikes.classList.add('selected')
    playlike.style.display = 'block'
}

function minhaPlayList() {
    cleanMain()
    playlike.style.display = 'block'
}
function noRepeat() {
    cleanMain()
    NoRepeat.style.display = 'flex'
}
function gaming() {
    cleanMain()
    topGaming.style.display = 'flex'
}
function lilnas() {
    cleanMain()
    lilx.style.display = 'flex'
}
function minhasMusicas() {
    cleanMain()
    mymscz.style.display = 'flex'
}
function oldMusics() {
    cleanMain()
    oldYears.style.display = 'flex'
}

/*funçoes cantores */
function dby() {
    cleanMain()
    baby.style.display = 'flex'
}
function tca() {
    cleanMain()
    teca.style.display = 'flex'
}
function alk() {
    cleanMain()
    lok.style.display = 'flex'
}
function kbk() {
    cleanMain()
    kill.style.display = 'flex'
}
function arn() {
    cleanMain()
    argrande.style.display = 'flex'
}
/*Playlist*/
function mouseOver(e) {
    e.style.background = 'rgba(120, 120, 120, 0.658)'
    e.style.cursor = 'pointer'
}
function mouseOut(e) {
    e.style.background = 'rgba(78, 78, 78, 0.384)'
}

musicas.map((item, index) => {
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })
    musicItem.querySelector('.id').innerHTML = `${index + 1}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`

    document.querySelector('.musicaarea').append(musicItem)
})

/*Dababy aba */
musicas.map((item) => {
    if(item.nome === 'DaBaby'){
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`

    document.querySelector('.dababy-- .musicaarea').append(musicItem)
    }
})
/*tecca aba */
musicas.map((item) => {
    if(item.nome === 'Lil Tecca'){
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`

    document.querySelector('.tecca-- .musicaarea').append(musicItem)
    }
})
/*alok */
musicas.map((item) => {
    if(item.nome === 'Alok'){
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`

    document.querySelector('.alok-- .musicaarea').append(musicItem)
    }
})
/*killbunk */
musicas.map((item) => {
    if(item.nome === 'Killbunk'){
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`

    document.querySelector('.thiaguinho-- .musicaarea').append(musicItem)
    }
})
/*ariana */
musicas.map((item) => {
    if(item.nome === 'Ariana Grande'){
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })
    
    musicItem.setAttribute('music--data', `${item.musica}`)
    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`

    document.querySelector('.ariana-- .musicaarea').append(musicItem)
    }
})
/*Lil Nas X */
musicas.map((item) => {
    if(item.nome === 'Lil Nas X') {
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`
    
    document.querySelector('.lilx .musicaarea').append(musicItem)
    }
})
/*norepeat */
musicas.map((item) => {
    if(item.nome === 'Ariana Grande.' || item.nome === 'Poze Do Rodo') {
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`
    
    document.querySelector('.norepeat .musicaarea').append(musicItem)
    }
})
/*top gaming tracks */
musicas.map((item) => {
    if(item.nome === 'Drake' || item.nome === 'Ayo & Teo') {
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`
    
    document.querySelector('.topgaming .musicaarea').append(musicItem)
    }
})
/*top2000 */
musicas.map((item) => {
    if(item.nome === 'Soulja Boy' || item.nome === 'Chris Brown') {
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`
    
    document.querySelector('.mix2000 .musicaarea').append(musicItem)
    }
})
/*ariana apenas */
musicas.map((item) => {
    if(item.musicName === 'Positions') {
    let musicItem = document.querySelector('.musictoplay').cloneNode(true)
    musicItem.style.display = 'grid'
    musicItem.setAttribute('data-key', `${item.musica}`)
    musicItem.addEventListener('click', ()=> {
        mscPlaying.pause()
        indexMusica = item.id - 1
        mscPlaying.src = musicItem.getAttribute('data-key')
        renderizarMusica(indexMusica)
        mscPlaying.play()
        document.querySelector('.buton-pause').style.display = 'block'
        document.querySelector('.buton-play').style.display = 'none'
    })

    musicItem.querySelector('.id').innerHTML = `${item.id}`
    musicItem.querySelector('.picart').innerHTML = `<img src= "${item.foto}">`
    musicItem.querySelector('.mscname').innerHTML = `<p>${item.musicName}</p>`
    musicItem.querySelector('.msc.pl3 p').innerHTML = `${item.album}`
    musicItem.querySelector('.msc.pl4').innerHTML = `<p>${'14 de SET de 2021'}</p>`
    musicItem.querySelector('.msc.pl5').innerHTML = `<p>${item.tempo}</p>`
    
    document.querySelector('.mymusics--- .musicaarea').append(musicItem)
    }
})

/*Tocar musica */

function tocarMusica() {
    mscPlaying.play()
    document.querySelector('.buton-pause').style.display = 'block'
    document.querySelector('.buton-play').style.display = 'none'
}
function pausarMusica() {
    mscPlaying.pause()
    document.querySelector('.buton-pause').style.display = 'none'
    document.querySelector('.buton-play').style.display = 'block'
}
function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((mscPlaying.currentTime / mscPlaying.duration) * 100) +'%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinuto(Math.floor(mscPlaying.currentTime))
}
function segundosParaMinuto(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60 
    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos+':'+campoSegundos
}

/*functions gerais */
function cleanMain() {
    document.querySelectorAll('section').forEach((item) => {
        item.style.display = 'none'
    })
    document.querySelectorAll('.mn').forEach((item)=> {
        item.classList.remove('selected')
    })
}
/*inputs */


