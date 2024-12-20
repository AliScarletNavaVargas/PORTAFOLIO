
let posicionScroll = 0;
let angulo = 0;
const circulo = document.querySelector('.circulo');
let CalScroll = 0;
actualizarPosicionCirculo();

window.addEventListener ('wheel', function(event) {
 
    posicionScroll += event.deltaY;
    posicionScroll = Math.max(0, Math.min(posicionScroll, window.innerWidth * 2));

    const parallaxContainer = document.querySelector('.contenedorParallax');
    
    parallaxContainer.style.transform = `translateX(-${posicionScroll}px)`;
    //CalScroll += event.deltaY;
});

window.addEventListener('scroll', function(event){
    const PoSscroll = window.scrollY;
    const MovScroll = Math.max(0, Math.min(PoSscroll, window.innerWidth * 3));
    angulo = MovScroll * 0.2;
    actualizarPosicionCirculo();
});

function actualizarPosicionCirculo(){ 
    const radio = 200;
    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;
    const radianes = angulo * (Math.PI / 180);

    const x = centroX + radio * Math.cos(radianes);
    const y = centroY + radio * Math.sin(radianes);

    circulo.style.left = `${x}px`;
    circulo.style.top = `${y}px`;
}