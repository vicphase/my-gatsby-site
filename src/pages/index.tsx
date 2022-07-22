import * as React from "react";

import logo from "../images/logo.svg";
import * as styles from "./index.module.css";

import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ecolimpio | Soluciones Ambientales" />
        <meta
          property="og:description"
          content="Con nuestra filosofía zero waste to landfill te ayudamos a contribuir a un México más limpio y sustentable. Creamos soluciones ambientales a la medida a traves de la gestión, reciclaje, valorización, coprocesamiento y confinamiento seguro de residuos industriales."
        />
        <meta property="og:url" content="http://ecolimpio.net" />
        <meta property="og:site_name" content="Ecolimpio | Soluciones Ambientales" />
        <meta property="og:image" content="/assets/ecolimpio-img.png" />
        <meta property="og:image:secure_url" content="http://ecolimpio.net/assets/ecolimpio-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ecolimpio | Soluciones Ambientale" />
        <title>Ecolimpio | Soluciones Ambientales</title>
      </Helmet>
      <main className="text-white p-5 lg:p-28">
        <div className={`${styles.lineGreen} fixed w-screen top-0 left-0`}></div>
        <div className="block lg:flex mb-14 lg:mb-28">
          <div className="py-16 lg:p-0 w-full lg:w-1/2 flex lg:block justify-center items-center lg:text-left">
            <img src={logo} alt="Company logo" />
          </div>
          <div className="block lg:hidden w-full mb-5">
            <video className="h-full w-full" controls>
              <source src="https://arphase-cdn.s3.amazonaws.com/ecolimpio-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-right px-20 lg:px-0">
            <span className="font-bold">25 años </span>
            <span>comprometidos con el medio ambiente</span>
          </div>
        </div>

        <div className={`${styles.borderBlue} block lg:flex mb-4 pb-12`}>
          <div className="w-full lg:w-5/12 pr-0 lg:pr-7 text-center lg:text-left">
            <p className={`${styles.textGreen} font-bold text-base mb-4`}>GRUPO ECOLIMPIO</p>
            <p className="text-base lg:text-3xl mb-3 font-light">
              Creamos soluciones ambientales a la medida a traves de la gestión, reciclaje, valorización, coprocesamiento y confinamiento
              seguro de residuos industriales.
            </p>
            <p className="text-base lg:text-3xl font-light mb-8">
              Con nuestra filosofía zero waste to landfill te ayudamos a contribuir a un México más limpio y sustentable.
            </p>
            <a href="http://ecolimpio.com.mx/empresa/" target="_blank" className={`${styles.borderGreen} text-white rounded-3xl px-6 py-3`}>
              más información
            </a>
          </div>
          <div className="hidden lg:block w-7/12 pl-0 lg:pl-7">
            <video className="h-full w-full" controls>
              <source src="https://arphase-cdn.s3.amazonaws.com/ecolimpio-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="block lg:flex text-center lg:text-left px-10 lg:px-0">
          <div className="w-full lg:w-4/12 text-base lg:text-xl mb-2 lg:mb-0">
            <span className={`${styles.textGreen} text-base font-bold`}>Contacto</span>
            <div className="block lg:flex mt-3">
              <p className="font-bold mr-0 lg:mr-2">Ecolimpio.</p>
              <p>Servicios Ambientales</p>
            </div>
            <p>La Madrid 2241 República Ote. Saltillo, Coahuila</p>
          </div>
          <div className="w-full lg:w-3/12 pt-0 lg:pt-16 text-base lg:text-xl">
            <p>contacto@ecolimpio.com.mx</p>
            <p>WhatsApp +52 1844 218 0487</p>
          </div>
          <div className="hidden lg:block w-5/12 pt-16 pl-5 text-xl">
            <p>Sugerencias y comentairos sobre nuestro servicio:</p>
            <p>servicio.cliente@ecolimpio.com.mx</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
