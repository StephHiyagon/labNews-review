'use strict';

const Footer = () => {
    const footerContainer = $('<footer class="footer"></footer>');

    const part1 = $(`<div class="footer__content col-sm-4">
                            <img src="assets/img/logo-footer.png" alt="">
                            <p>© Editado por Laboratoria
                                Av. José Pardo #601 Lima 1 Perú
                                Copyright © Laboratoria.la
                                Todos los derechos reservados.</p>
                       </div>`);
    footerContainer.append(part1);

    const part2 = $(`<div class="footer__content col-sm-4 hidden-xs">
                        <ul>
                          <li>
                            <p>DIRECTOR GENERAL:</p>
                            <p>Francisco Miró Quesada Cantuarias </p>
                          </li>
                          <li>
                            <p>DIRECTOR PERIODÍSTICO:</p>
                            <p>Fernando Berckemeyer Olaechea </p>
                          </li>
                          <li>
                            <p>SUSCRIPCIONES:</p>
                            <p>suscriptores@comercio.com.pe </p>
                          </li>
                          <li>
                            <p>PUBLICIDAD ONLINE:</p>
                            <p>fonoavisos@comercio.com.pe </p>
                          </li>
                          <li>
                            <p>CLUB EL COMERCIO:</p>
                            <p>clubelcomercio@comercio.com.pe
                            Compromiso de Autorregulación Comercial</p>
                          </li>
                        </ul>
                       </div>`);
    footerContainer.append(part2);

    const part3 = $(`<div class="footer__content col-sm-4 hidden-xs">
                            <p>TÉRMINOS Y CONDICIONES DE USO
                                TRABAJA CON NOSOTROS
                                LIBRO DE RECLAMACIONES
                                SEDES PRINCIPALES
                                POLÍTICAS DE PRIVACIDAD</p>
                            <span>Siguenos:
                                <a><img src="assets/img/fb.png" alt=""></a>
                                <a><img src="assets/img/tw.png" alt=""></a>
                                <a><img src="assets/img/in.png" alt=""></a>
                            </span>
                       </div>`);
    footerContainer.append(part3);
    return footerContainer;

}
