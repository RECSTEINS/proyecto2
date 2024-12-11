import "./menu.css";
import "./global.css";
import platillos from "../Home/imag/MENU/PALTILLOS.png";
import { Link } from "react-router-dom";
import FACEB from "./imag/Iconos/Iconos/Face.png";
import Insta from "./imag/Iconos/Iconos/Insta.png";
import WhatsApp from "./imag/Iconos/Iconos/WhatsApp.png";
import X from "./imag/Iconos/Iconos/X.png";
import { Fade } from "react-bootstrap";


function Menu(){
    return(
        <body>
            <div class="menu">
      <header class="barra-de-navegacin1">
        <div class="logos" id="logosContainer">
          <Link to={"/"}>
          <img
            class="logo-icon1"
            loading="lazy"
            alt=""
            src="./public/logo1@2x.png"
          />
          </Link>
        </div>
        <nav class="nav-links1">
          <div class="nav-link-items4" id="navLinkItems">
            <Link to={"/"}>
            <div class="inicio1">INICIO</div>
            </Link>
          </div>
          <div class="nav-link-items5" id="navLinkItems1">
            <Link to={"/menu"}>
              <div class="men4">MENÚ</div>
            </Link>
          </div>
          <div class="nav-link-items6" id="navLinkItems2">
            <Link to={"/reservacion"}>
              <div class="reservacin2">RESERVACIÓN</div>
            </Link>
          </div>
          <div class="nav-link-items7" id="navLinkItems3">
            <Link to={"/login"}>
              <div class="contacto1">Login</div>
            </Link>
          </div>
        </nav>
      </header>
      <main class="secciones1">
        <section class="h1">
          <h1 class="menu1">MENU</h1>
        </section>
        <section class="frame-entradas">
          <div class="subtitulo">
            <div class="subtitle-items">
              <h1 class="entradas">Entradas</h1>
            </div>
          </div>
          <div class="entradas1">
            <div class="entries-title-items">
              <div class="label6">
                <h1 class="label7">CLASICOS REINTERPRETADOS</h1>
              </div>
              <div class="entries-description-items">
                <div class="guacamole-tradicional-100-container">
                  <p class="guacamole-tradicional-100">
                    GUACAMOLE TRADICIONAL 100 g
                  </p>
                  <p class="con-pico-de">Con pico de gallo y cilantro</p>
                  <p class="blank-line2">&nbsp;</p>
                  <p class="tlayuda-de-picaa">
                    TLAYUDA DE PICAÑA AHUMADA Y CHORIZO 170 g
                  </p>
                  <p class="frijol-negro-quesillo">
                    Frijol negro, quesillo gratinado y aguacate
                  </p>
                </div>
                <div class="guacamole-con-chicharrn-container">
                  <p class="guacamole-con-chicharrn">
                    GUACAMOLE CON CHICHARRÓN DE RIB EYE 120 g
                  </p>
                  <p class="con-tortillas-de">
                    Con tortillas de maíz y chile serrano
                  </p>
                  <p class="blank-line3">&nbsp;</p>
                  <p class="queso-fundido-con">
                    QUESO FUNDIDO CON CHISTORRA 50 g
                  </p>
                  <p class="con-tortillas-de1">Con tortillas de harina</p>
                </div>
              </div>
            </div>
            <div class="entries-description-items1">
              <div class="label8">
                <h1 class="label9">SABORES DIFERENTES</h1>
              </div>
              <div class="entries-description-items2">
                <div class="tostadas-de-atn-container">
                  <p class="blank-line4">&nbsp;</p>
                  <p class="tostadas-de-atn">TOSTADAS DE ATÚN 2 pza</p>
                  <p class="de-maz-azul">
                    De maíz azul con aguacate, mayonesa de chipotle, salsa de
                    soya y cilantro
                  </p>
                  <p class="blank-line5">&nbsp;</p>
                  <p class="chicharrones-de-salmn">
                    CHICHARRONES DE SALMÓN CROCANTES 120 g
                  </p>
                  <p class="con-salsa-trtara">Con salsa tártara macha</p>
                </div>
                <div class="aguachile-180-g-container">
                  <p class="aguachile-180-g">AGUACHILE 180 g</p>
                  <p class="aguacate-ajo-cebolla">
                    Aguacate, ajo, cebolla y cilantro. Flameado en mesa con
                    mezcal
                  </p>
                  <p class="blank-line6">&nbsp;</p>
                  <p class="tiradito-de-salmn">TIRADITO DE SALMÓN 120 g</p>
                  <p class="aguachile-verde-naranja">
                    Aguachile verde, naranja agria, lima yucateca, cebolla
                    encurtida y aguacate
                  </p>
                </div>
              </div>
            </div>
            <div class="entries-description-items3">
              <div class="label10">
                <h1 class="label11">COMPARTIDOS</h1>
              </div>
              <div class="entries-description-items4">
                <div class="torre-de-papas-container">
                  <p class="torre-de-papas">
                    TORRE DE PAPAS A LA FRANCESA 200 g
                  </p>
                  <p class="queso-parmesano-pimienta">
                    Queso parmesano, pimienta quebrada, sal de colima y aceite
                    de trufa
                  </p>
                  <p class="blank-line7">&nbsp;</p>
                  <p class="empanadas-2-pza">EMPANADAS 2 pza</p>
                  <p class="con-con-chimichurri">
                    Con con chimichurri de habanero. A elegir: Carne picante,
                    Rajas poblanas con elote o Quesillo
                  </p>
                </div>
                <div class="albondigas-de-res-container">
                  <p class="albondigas-de-res">
                    ALBONDIGAS DE RES DE LA ABUELA 200 g
                  </p>
                  <p class="salsa-de-chipotle">
                    Salsa de chipotle y queso parmesano
                  </p>
                  <p class="blank-line8">&nbsp;</p>
                  <p class="queso-cilantro-160">QUESO CILANTRO 160 g</p>
                  <p class="queso-gouda-empanizado">
                    Queso gouda empanizado, salsa verde y ajonjolí con papa paja
                    crujiente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="frame-platillos">
          <div class="subtitulo1">
            
            <div class="subtitulo7">
              <div class="dishes-title-item">
                <h1 class="entradas"></h1>
              </div>
            </div>
            <div class="dishes-image-items">
              
            </div>
          </div>
          <div class="entradas2">
            <div class="dishes-labels">
              <div class="label12">
                <h1 class="label13">CON UN TOQUE MODERNO</h1>
              </div>
              <div class="dishes-descriptions">
                <div class="pechuga-de-pollo-container">
                  <p class="pechuga-de-pollo">PECHUGA DE POLLO AL MOLE 250 g</p>
                  <p class="asada-con-mole">
                    Asada con mole de tamarindo, vegetales de la milpa y
                    ajonjolí
                  </p>
                  <p class="blank-line9">&nbsp;</p>
                  <p class="sabana-de-res">SABANA DE RES INVIERNO 180 g</p>
                  <p class="frijoles-refritos-salsa">
                    Frijoles refritos, salsa verde, queso gouda, cilantro y
                    tortillas de maíz
                  </p>
                  <p class="blank-line10">&nbsp;</p>
                  <p class="filete-chemita-240">FILETE CHEMITA 240 g</p>
                  <p class="con-pur-de">
                    Con puré de papa mantequilla y jugo de carne
                  </p>
                  <p class="blank-line11">&nbsp;</p>
                  <p class="cazuela-de-cochinita">
                    CAZUELA DE COCHINITA PIBIL 250 g
                  </p>
                  <p class="receta-original-del">
                    Receta original del chef. Con tortillas de maíz, salsa
                    xnipec, cebolla encurtida y rabanitos
                  </p>
                  <p class="blank-line12">&nbsp;</p>
                  <p class="salmn-zarandeado-250">SALMÓN ZARANDEADO 250 g</p>
                  <p class="a-la-parrilla">
                    A la parrilla con mantequilla de mostaza, acelgas, salsa
                    zarandeada y esquites asados
                  </p>
                </div>
                <div class="pescado-a-la-container">
                  <p class="pescado-a-la">PESCADO A LA PLANCHA 200 g</p>
                  <p class="pur-de-papa">
                    Puré de papa, hongos al ajillo, limón amarillo asado y adobo
                    de chiles
                  </p>
                  <p class="blank-line13">&nbsp;</p>
                  <p class="fetuccini-alfredo-con">
                    FETUCCINI ALFREDO CON CAMARONES AL TEQUILA 150 g
                  </p>
                  <p class="con-polvo-de">
                    Con polvo de chiles secos y perejil
                  </p>
                  <p class="blank-line14">&nbsp;</p>
                  <p class="camarones-al-ajillo">CAMARONES AL AJILLO 180 g</p>
                  <p class="con-papas-bravas">Con papas bravas y pimientos</p>
                  <p class="blank-line15">&nbsp;</p>
                  <p class="pulpo-a-las">PULPO A LAS BRASAS 250 g</p>
                  <p class="con-papas-asadas">
                    Con papas asadas, aguacate y mantequilla de hierbas finas
                  </p>
                </div>
              </div>
            </div>
            <div class="dishes-labels1">
              <div class="label14">
                <h1 class="label15">TACOS</h1>
              </div>
              <div class="de-salmn-3-pzas-en-tortilla-d-parent">
                <div class="de-salmn-3-container">
                  <p class="de-salmn-3">DE SALMÓN 3 pzas</p>
                  <p class="en-tortilla-de">
                    En tortilla de maíz con costra de queso, salsa de frijol y
                    cebolla caramelizada
                  </p>
                  <p class="blank-line16">&nbsp;</p>
                  <p class="gaoneras-de-rib">GAONERAS DE RIB EYE 2 pzas</p>
                  <p class="con-costra-de">
                    Con costra de queso gouda y oaxaca
                  </p>
                  <p class="blank-line17">&nbsp;</p>
                  <p class="sonoritas-de-camarn">SONORITAS DE CAMARÓN 4 pzas</p>
                  <p class="en-tortilla-de1">
                    En tortilla de harina a la parrilla rellenos de tinga de
                    camarón, frijol y queso. Con salsa aguacatada
                  </p>
                </div>
                <div class="quesabirrias-de-short-container">
                  <p class="quesabirrias-de-short">
                    QUESABIRRIAS DE SHORT RIB 2 pzas
                  </p>
                  <p class="en-tortilla-de2">
                    En tortilla de maíz con queso, birria de costilla en adobo
                    de chiles y consome
                  </p>
                  <p class="blank-line18">&nbsp;</p>
                  <p class="tacos-chicharron-4">TACOS CHICHARRON 4 pzas</p>
                  <p class="de-rib-eye">
                    De Rib eye, costra de queso, chicharrón prensado en salsa
                    verde y cebolla asada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="frame-cocteles">
          <div class="subtitulo2">
            <div class="cocktail-title-item">
              <h1 class="cocteles">Cocteles</h1>
            </div>
          </div>
          <div class="entradas3">
            <div class="cocktails-labels">
              <div class="label16">
                <h1 class="label17">COCTELES DE LA CASA</h1>
              </div>
              <div class="cocktail-descriptions">
                <div class="axolote-leucistico-bacanora-container">
                  <p class="axolote-leucistico">AXOLOTE LEUCISTICO</p>
                  <p class="bacanora-45ml-campari">
                    Bacanora 45ml, Campari 15ml, mermelada de naranja, pulpa de
                    maracuyá, corona de albahaca y naranja deshidratada
                  </p>
                  <p class="blank-line19">&nbsp;</p>
                  <p class="axolote-albino">AXOLOTE ALBINO</p>
                  <p class="sotol-nocheluna-45ml">
                    Sotol Nocheluna 45ml, jugo de limón, jugo de arándano, jugo
                    de manzana, corona de menta y manzana deshidratada
                  </p>
                  <p class="blank-line20">&nbsp;</p>
                  <p class="axolote-melanoide">AXOLOTE MELANOIDE</p>
                  <p class="tequila-don-julio">
                    Tequila Don Julio Blanco 45ml, Chinchón dulce 15ml,
                    concentrado de fresa, jugo de pepino y limón, toronja
                    deshidrata
                  </p>
                  <p class="blank-line21">&nbsp;</p>
                  <p class="axolote-golden-albino">AXOLOTE GOLDEN ALBINO</p>
                  <p class="charanda-uruapan-blanco">
                    Charanda Uruapan blanco 45ml, jugo de piña y limón, vinagre
                    de mango, hoja de plátano y piña deshidratada
                  </p>
                </div>
                <div class="axolote-copper-whisky-container">
                  <p class="axolote-copper">AXOLOTE COPPER</p>
                  <p class="whisky-abasolo-45ml">
                    Whisky Abasolo 45ml, licor de banana 15ml, jugo de piña,
                    jugo de limón amarillo y obleas de colores
                  </p>
                  <p class="blank-line22">&nbsp;</p>
                  <p class="axolote-chimera">AXOLOTE CHIMERA</p>
                  <p class="mezcal-unin-joven">
                    Mezcal Unión joven 45ml, jugo de limón, cerveza de jengibre,
                    mole, disco de hoja santa y chapulines
                  </p>
                  <p class="blank-line23">&nbsp;</p>
                  <p class="axolote-harlequin">AXOLOTE HARLEQUIN</p>
                  <p class="pox-siglo-cero">
                    Pox siglo Cero 45ml, café americano, jarabe de piloncillo,
                    especias, Bitter de Angostura y naranja deshidratada
                  </p>
                  <p class="blank-line24">&nbsp;</p>
                  <p class="axolote-piebald">AXOLOTE PIEBALD</p>
                  <p class="gin-california-nativo">
                    Gin California Nativo 45ml, Kalani licor de coco 30ml, jugo
                    de pepino y limón, corona de menta y slide de pepino
                  </p>
                </div>
              </div>
            </div>
            <div class="cocktails-labels1">
              <div class="label18">
                <h1 class="label19">TRADICIONALES</h1>
              </div>
              <div class="sayulita-mezcal-unin-45-ml-parent">
                <div class="sayulita-mezcal-unin-container">
                  <p class="sayulita">SAYULITA</p>
                  <p class="mezcal-unin-45">
                    Mezcal Unión® 45 ml, mango, piña, pimiento, limón y sal de
                    cítricos
                  </p>
                  <p class="blank-line25">&nbsp;</p>
                  <p class="holbox">HOLBOX</p>
                  <p class="tanqueray-london-dry">
                    Tanqueray London Dry® gin 45 ml, Curacao azul® 15 ml, jarabe
                    de canela y limón
                  </p>
                  <p class="blank-line26">&nbsp;</p>
                  <p class="punta-mita">PUNTA MITA</p>
                  <p class="ron-bacard-blanco">
                    Ron Bacardí blanco® 45 ml, Frangelico® 15 ml, crema de coco,
                    leche de coco y hierbabuena
                  </p>
                </div>
                <div class="la-colorada-tequila-container">
                  <p class="la-colorada">LA COLORADA</p>
                  <p class="tequila-tradicional-plata">
                    Tequila Tradicional Plata® 45 ml, Campari® 15 ml, fresa,
                    limón y sal de Tutsi Pop®
                  </p>
                  <p class="blank-line27">&nbsp;</p>
                  <p class="zipolite">ZIPOLITE</p>
                  <p class="tequila-tradicional-plata1">
                    Tequila Tradicional Plata® 45 ml, Licor de coco Kalani® 15
                    ml, jícama, pepino, limón y Tajín®
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="frame-postres">
          <div class="subtitulo3">
            <div class="postres-wrapper">
              <h1 class="postres">Postres</h1>
            </div>
          </div>
          <div class="entradas4">
            <div class="label-parent">
              <div class="label20">
                <h1 class="label21">PASTEL</h1>
              </div>
              <div class="pastel-de-chocolate-con-browni-parent">
                <div class="pastel-de-chocolate-container">
                  <p class="pastel-de-chocolate">PASTEL DE CHOCOLATE</p>
                  <p class="con-brownie-ganache-de-carame">
                    Con brownie, ganache de caramelo y chocolate blanco.
                    Cubierto de betún de chocolate, polvo de Jamaica y coulis de
                    blueberry y oporto
                  </p>
                  <p class="blank-line28">&nbsp;</p>
                  <p class="cheesecake-de-frutos">CHEESECAKE DE FRUTOS ROJOS</p>
                  <p class="base-de-galleta">
                    Base de galleta de chocolate, yogurt, cremoso de fresa y
                    jelly de frutos rojos. Con coulis de frutos rojos,
                    hierbabuena y mandarina
                  </p>
                </div>
                <div class="pastel-de-tres-container">
                  <p class="pastel-de-tres">PASTEL DE TRES LECHES Y ROMPOPE</p>
                  <p class="servido-con-crema">
                    Servido con crema de canela, cacahuate garapiñado,
                    blueberries, tierra de galletas de chocolate y choco
                    piedras.
                  </p>
                </div>
              </div>
            </div>
            <div class="label-group">
              <div class="label22">
                <h1 class="label23">TRADICIONALES</h1>
              </div>
              <div class="flan-servido-con-caramelo-liqu-parent">
                <div class="flan-servido-con-container">
                  <p class="flan">FLAN</p>
                  <p class="servido-con-caramelo">
                    Servido con caramelo liquido. Decorado con crema diplomática
                    con canela, fresa, zarzamora y hierbabuena.
                  </p>
                  <p class="blank-line29">&nbsp;</p>
                  <p class="pay-de-queso">PAY DE QUESO CON GUAYABA</p>
                  <p class="crujiente-de-nuez">
                    Crujiente de nuez pecana, cítricos, ate de guayaba y jelly
                    de frutos rojos
                  </p>
                </div>
                <div class="pan-de-elote-container">
                  <p class="pan-de-elote">PAN DE ELOTE</p>
                  <p class="helado-de-vainilla">
                    Helado de vainilla (60 ml), cajeta y nueces tostados.
                  </p>
                </div>
              </div>
            </div>
            <div class="label-container">
              <div class="label24">
                <h1 class="label25">ORIGINALES DE AXOLOTL</h1>
              </div>
              <div class="molten-de-chocolate-con-frutos-parent">
                <div class="molten-de-chocolate-container">
                  <p class="molten-de-chocolate">MOLTEN DE CHOCOLATE</p>
                  <p class="con-frutos-rojos">
                    Con frutos rojos y galleta de vainillaA elegir: Helado de
                    vainilla o Helado de matcha
                  </p>
                  <p class="blank-line30">&nbsp;</p>
                  <p class="los-churros">LOS CHURROS</p>
                  <p class="los-tradicionales-son">
                    Los tradicionales son salsa de vainilla, fresa, caramelo y
                    chocolate
                  </p>
                </div>
                <div class="platano-horneado-servido-container">
                  <p class="platano-horneado">PLATANO HORNEADO</p>
                  <p class="servido-con-helado">
                    Servido con helado de vainilla (60 ml)
                  </p>
                  <p class="blank-line31">&nbsp;</p>
                  <p class="degustacion-de-helados">DEGUSTACION DE HELADOS</p>
                  <p class="helados-artesanales-de">
                    Helados artesanales de fresa de Irapuato, chocolate
                    Mexicano, mazapán y vainilla de Papantla
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="frame-bebidas">
          <div class="subtitulo4">
            <div class="drinks-title-item">
              <h1 class="bebidas">Bebidas</h1>
            </div>
          </div>
          <div class="bebidas1">
            <div class="drink-categories">
              <div class="label26">
                <h1 class="label27">JUGO</h1>
              </div>
              <div class="naranja-sandia-manzana-container">
                <ul class="naranja-sandia-manzana-fresa-l">
                  <li class="naranja">Naranja</li>
                  <li class="sandia">Sandia</li>
                  <li class="manzana">Manzana</li>
                  <li class="fresa">Fresa</li>
                  <li class="limonada">Limonada</li>
                  <li class="horchata">Horchata</li>
                  <li class="jamaica">Jamaica</li>
                  <li>Tamarindo</li>
                </ul>
              </div>
            </div>
            <div class="drink-categories1">
              <div class="label28">
                <h1 class="label29">GASEOSA</h1>
              </div>
              <div class="coca-cola-coca-container">
                <ul class="coca-cola-coca-cola-light-coca">
                  <li class="coca-cola">Coca Cola</li>
                  <li class="coca-cola-light">Coca Cola Light</li>
                  <li class="coca-cola-sin">Coca Cola sin azúcar</li>
                  <li class="sidral-mundet">Sidral Mundet</li>
                  <li class="sprite">Sprite</li>
                  <li class="fresca">Fresca</li>
                  <li class="sprite-zero">Sprite Zero</li>
                  <li>Fanta</li>
                </ul>
              </div>
            </div>
            <div class="drink-categories2">
              <div class="label30">
                <div class="label31">CAFÉ</div>
              </div>
              <div class="americano-expreso-capuchino-container">
                <ul class="americano-expreso-capuchino-do">
                  <li class="americano">Americano</li>
                  <li class="expreso">Expreso</li>
                  <li class="capuchino">Capuchino</li>
                  <li class="doble-expreso">Doble expreso</li>
                  <li class="doble-capuchino">Doble capuchino</li>
                  <li class="caf-caribe">Café Caribe</li>
                  <li>Café Mexicano</li>
                </ul>
              </div>
            </div>
            <div class="drink-categories3">
              <div class="label32">
                <h1 class="label33">TÉ</h1>
              </div>
              <div class="manzanilla-verde-lavanda-container">
                <ul class="manzanilla-verde-lavanda-espec">
                  <li class="manzanilla">Manzanilla</li>
                  <li class="verde">Verde</li>
                  <li class="lavanda">Lavanda</li>
                  <li class="especial-de-la">Especial de la casa</li>
                  <li class="jamaica1">Jamaica</li>
                  <li class="limn">Limón</li>
                  <li>Hierbabuena</li>
                </ul>
              </div>
            </div>
            <div class="drink-categories4">
              <div class="label34">
                <h1 class="label35">AGUA</h1>
              </div>
              <div class="ciel-bonafont-epura-container">
                <ul class="ciel-bonafont-epura-san-pelleg">
                  <li class="ciel">Ciel</li>
                  <li class="bonafont">Bonafont</li>
                  <li class="epura">Epura</li>
                  <li class="san-pellegrino">San Pellegrino</li>
                  <li>Acqua Panna</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="footer2">
          <img
            class="image-66-icon1"
            loading="lazy"
            alt=""
            src="./public/image-661@2x.png"
          />

          <div class="atencion-al-cliente-container2">
            <span class="atencion-al-cliente-container3">
              <p class="atencion-al-cliente1">Atencion al cliente:</p>
              <p class="p2">988-427-0589</p>
            </span>
          </div>
          <div class="social-media">
            <img
              class="whatsapp-icon1"
              loading="lazy"
              alt=""
              src={WhatsApp}
            />

            <img
              class="insta-icon1"
              loading="lazy"
              alt=""
              src={Insta}
            />

            <img
              class="social-media-icons"
              loading="lazy"
              alt=""
              src={FACEB}
            />

            <img
              class="social-media-icons1"
              loading="lazy"
              alt=""
              src={X}
            />
          </div>
          <div class="legal-info">
            <div class="copyright1">Copyright</div>
            <div class="poltica-de-privacidad1">
              Política de privacidad y términos de servicio.
            </div>
            <div class="certificaciones-de-seguridad1">
              Certificaciones de seguridad
            </div>
          </div>
        </section>
      </main>
    </div>
        </body>
    )
}

export default Menu;