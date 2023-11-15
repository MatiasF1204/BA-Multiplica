// Inyectamos el header y el footer en cada una de las páginas para reducir el código

//menu responsivo
document.getElementById("idheader").innerHTML = `

<div class="container">
<div class="row v-center">
    <div class="header-item item-left">
        <div class="logo">
            <a href="../index.html">Ecomoda</a>
        </div>
    </div>

    <!-- El menú comienza acá -->
    <div class="header-item item-center">

        <div class="menu-overlay">
        </div>

        <nav class="menu">

            <div class="mobile-menu-head">
                <div class="go-back"><i class="fa fa-angle-left"></i></div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
            </div>

            <ul class="menu-main">
                <li>
                    <a href="../index.html">Home</a>
                </li>

                <li class="menu-item-has-children">
                    <a href="#">Productos <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                        <div class="list-item">
                            <h4 class="title">Men's Fashion</h4>

                            <ul>
                                <li><a href="../pages/remeras.html">Remeras</a></li>
                                <li><a href="#">Camisas</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Sweaters</a></li>
                                <li><a href="#">Camperas</a></li>
                            </ul>

                        </div>
                        <div class="list-item">
                            <h4 class="title">Women's Fashion</h4>
                            <ul>
                                <li><a href="#">Vestidos</a></li>
                                <li><a href="#">Remeras</a></li>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Camperas</a></li>
                            </ul>

                        </div>

                        <div class="list-item">

                            <h4 class="title">Unisex</h4>
                            <ul>
                                <li><a href="#">Remeras</a></li>
                                <li><a href="#">Pantalones</a></li>
                                <li><a href="#">Camperas</a></li>
                                <li><a href="#">Camisas</a></li>
                                <li><a href="#">Borcegos</a></li>
                            </ul>

                        </div>
                        <div class="list-item">
                            <img src="../banner/p1.jpg" alt="shop">
                        </div>
                    </div>
                </li>

                <li class="menu-item-has-children">
                    <a href="../pages/sobreNosotros.html">Sobre nosotros</a>
                </li>

                <li>
                    <a href="../pages/contacto.html">Contacto</a>
                </li>

            </ul>
        </nav>

    </div>
    <!-- menu fin-->
    <div class="header-item item-right">
        <!-- iconos del carrito y demas -->
        <a href="#"><i class="fas fa-search"></i></a>
        <a href="#"><i class="far fa-heart"></i></a>

        <!-- acá comienza el carrito -->
        <div class="container-icon">
            <div class="container-cart-icon">
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="count-products">
                    <span id="contador-productos">0</span>
                </div>
            </div>

            <div class="container-cart-products hidden-cart">
                <div class="row-product hidden">
                    <div class="cart-product">
                        <div class="info-cart-product">
                            <span class="cantidad-producto-carrito">1</span>
                            <p class="titulo-producto-carrito">Remera a rayas</p>
                            <span class="precio-producto-carrito">$ 8.900</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="icon-close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <div class="cart-total hidden">
                    <h3>Total:</h3>
                    <span class="total-pagar"></span>
                </div>
                <p class="cart-empty">El carrito está vacío</p>
            </div>
        </div>
        <!-- mobile menu trigger -->
        <div class="mobile-menu-trigger">
            <span></span>
        </div>
    </div>
</div>
</div>
`;



// footer
document.getElementById("idfooter").innerHTML = `
<div class="footer-container">

    <div class="footer-content-container">
        <h3 class="website-logo">ECOMODA</h3>
        <span class="footer-info">239 131 487</span>
        <span class="footer-info">ecomoda@gmail.com</span>
    </div>

    <div class="footer-menus">
        <div class="footer-content-container">
            <span class="menu-title">menu</span>
            <a href="" class="menu-item-footer">Home</a>
            <a href="" class="menu-item-footer">Reazlizar reclamo</a>
            <a href="" class="menu-item-footer">Realizar consulta</a>
    </div>

    <div class="footer-content-container">
        <span class="menu-title">legal</span>
        <a href="" class="menu-item-footer">Políticas de privacidad</a>
        <a href="" class="menu-item-footer">Cookies</a>
        <a href="" class="menu-item-footer">Avisos legales</a>
    </div>

</div>

<div class="footer-content-container">
    <span class="menu-title">REDES SOCIALES</span>
    <div class="social-container">
    <a href="" class="social-link"></a>
    <a href="" class="social-link"></a>
    <a href="" class="social-link"></a>
    </div>
</div>
</div>

<div class="copyright-container">
    <span class="copyright">Copyright 2023. Todos los derechos de autor reservados.</span>
</div>
`;

