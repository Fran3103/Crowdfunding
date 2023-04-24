let menuHamburguesa = document.querySelector('.hamburgesa');
let cerrarMenu = document.querySelector('.cerrar-menu');
let botonBack = document.querySelector('.back-btn');
let imagenbooked = document.querySelector('.bookmarked');
let bookImagen = document.querySelector('.bookmarkedOff');
let continuar = document.querySelectorAll('.continuar');
let cerrar = document.querySelector('.cerrar-modal');
let ratio = document.querySelectorAll('.ratio');
let go = document.querySelector('.go');
let capaGris = document.querySelector('.capa');
let menuMobile = document.querySelector('.menu-mobile');
let backSeccion = document.querySelector('.back-project');
let selec = document.querySelectorAll('.selec')
let alerta = document.querySelector('.alerta')
let btnAbout = document.querySelectorAll('.btn-about');
let bookmarkedTxt = document.querySelector ('.txt-book')
let bookmarkContainer = document.querySelector('.bookmark')



menuHamburguesa.addEventListener('click', ()=>{
    abrirMenu();
})

cerrarMenu.addEventListener('click', ()=>{
    cierreMenu()
})

bookImagen.addEventListener('click', () =>{
    imagenbookON()
})

imagenbooked.addEventListener('click', () =>{
    imagenbookOFF()
})

botonBack.addEventListener('click', ()=>{
    abrirBack()
})
cerrar.addEventListener('click', ()=>{
    cerrarBack()
})




ratio.forEach(btn => {
    btn.addEventListener('click', ()=>{
        selec.forEach(act =>{
            act.addEventListener('click', ()=>{
                act.classList.add('activo');
            })
            act.classList.remove('activo');
        })
    })
    
})

continuar.forEach(btn => {
    btn.addEventListener('click', ()=>{
        cerrarBack();
        alerta.style.display='flex';
        capaGris.style.display='flex';

    })
})

go.addEventListener('click', ()=>{
    alerta.style.display='none';
    capaGris.style.display='none';
})
console.log(ratio)

btnAbout.forEach(btn=>{
    btn.addEventListener('click', () =>{
        abrirBack();
        
    })
    
})




function imagenbookON(){
    imagenbooked.style.display = 'flex';
    bookImagen.style.display = 'none';
    bookmarkContainer.classList.add('bookmarked-sel')
    
}
function imagenbookOFF(){
    imagenbooked.style.display = 'none';
    bookImagen.style.display = 'flex';
    bookmarkContainer.classList.remove('bookmarked-sel')
}
function abrirMenu(){
    menuMobile.style.display = 'flex';
    menuHamburguesa.style.display= ' none';
    cerrarMenu.style.display = 'flex';
    capaGris.style.display='flex';
}
function cierreMenu(){
    menuMobile.style.display = 'none';
    menuHamburguesa.style.display= ' flex';
    cerrarMenu.style.display = 'none';
    capaGris.style.display =' none';
}
function abrirBack(){
    backSeccion.style.display = 'flex';
    capaGris.style.display='flex';
    
}

function cerrarBack(){
    backSeccion.style.display = 'none';
    capaGris.style.display='none';
}

