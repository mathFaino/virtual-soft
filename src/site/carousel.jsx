import React from 'react';

function Carousel(){
    return <div id="carouselExampleDark" class="carousel carousel-dark slide  container-xxl" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
                <img src="images/logo.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h5>Primeiro Slide</h5>
                <p>Legenda do primeiro Slide.</p>
            </div>
        </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="images/logo.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h5>Segundo Slide</h5>
                <p>Legenda do segundo Slide.</p>
            </div>
        </div>
            <div class="carousel-item">
                <img src="images/logo.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h5>Terceiro Slide</h5>
                <p>Legenda do terceiro Slide.</p>
            </div>
        </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
            </button>
    </div>
}

export default Carousel;