import React from 'react';

function Header () {
    return <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="images/logo-png.png" alt=""  class="d-inline-block align-text-top container-fluid"/> 
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sistemas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Downloads</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
        <span class="navbar-text">
          Inovando com qualidade!
        </span>
      </div>
    </div>
  </nav>
}

export default Header;