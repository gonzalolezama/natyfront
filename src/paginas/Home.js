import './../styles/home.css'
const Home = (props) => {
    return (
        <main className="holder">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/home/img01.jpg" class="d-block w-100" alt="casa 1" />
                    </div>
                    <div class="carousel-item">
                        <img src="img/home/img02.jpg" class="d-block w-100" alt="casa 2" />
                    </div>
                    <div class="carousel-item">
                        <img src="img/home/img03.jpg" class="d-block w-100" alt="casa 3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos a Inmuebles Gervasoni</h2>
                    <p>Nos complace darte la bienvenida a nuestra plataforma dedicada a la compra y venta de propiedades en Córdoba, Argentina. En Inmuebles Gervasoni, entendemos que cada transacción inmobiliaria es un paso importante en tu vida, y estamos aquí para acompañarte en cada etapa del proceso.</p>
                    <p>Nuestro equipo se distingue por su profesionalismo y amplia experiencia en el mercado. Nos comprometemos a ofrecerte un servicio excepcional, brindando consejos expertos y soluciones personalizadas que se ajusten a tus necesidades específicas. Ya sea que estés buscando tu hogar ideal, una inversión estratégica o necesites vender una propiedad, estamos listos para ayudarte.                  </p>
                    <p>Tu satisfacción es nuestra prioridad. Gracias por confiar en nosotros para hacer realidad tus sueños inmobiliarios en Córdoba. ¡Explora nuestras propiedades y déjanos guiarte hacia tu próximo gran paso!</p>
                    <p>Atentamente,</p>
                    <p>El equipo de Inmuebles Gervasoni</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Compramos nuestra vivienda familiar en RMX</span>
                        <p className="reseña">Juan Rodriguez</p>

                    </div>
                </div>
            </div>

        </main>
    )
}

export default Home;
