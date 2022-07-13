import * as React from "react";
import * as styles from "./index.module.css";

// markup
const IndexPage = () => {
  return (
    <main className="text-white p-28 pb-0">
      <div className="flex mb-28">
        <div className="w-1/2">
          <h1 className="text-3xl">
            <span className={styles.textGreen}>Eco</span>limpio
          </h1>
        </div>
        <div className="w-1/2 text-right">
          <span className="font-bold">25 años </span>
          <span>comprometidos con el medio ambiente</span>
        </div>
      </div>

      <div className={`${styles.borderBlue} flex mb-4 pb-12`}>
        <div className="w-5/12 pr-7">
          <p className={`${styles.textGreen} font-bold text-base mb-4`}>GRUPO ECOLIMPIO</p>
          <p className="text-3xl mb-3 font-light">
            Creamos soluciones ambientales a la medida a traves de la gestión, reciclaje, valorización, coprocesamiento y confinamiento
            seguro de residuos industriales.
          </p>
          <p className="text-3xl font-light mb-8">
            Con nuestra filosofía zero waste to landfill te ayudamos a contribuir a un México más limpio y sustentable.
          </p>
          <a href="http://ecolimpio.com.mx/empresa/" target="_blank" className={`${styles.borderGreen} text-white rounded-3xl px-8 py-1`}>
            más información
          </a>
        </div>
        <div className="w-7/12 pl-7">
          <video className="h-full w-full" controls>
            <source src="https://arphase-cdn.s3.amazonaws.com/ecolimpio-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 text-xl">
          <span className={`${styles.textGreen} text-base`}>Contacto</span>
          <p className="mt-3">
            <span className="font-bold">Ecolimpio. </span>
            Servicios Ambientales
          </p>
          <p>La Madrid 2241 República Ote. Saltillo, Coahuila</p>
        </div>
        <div className="w-3/4 pl-24 pt-16 text-xl">
          <p>contacto@ecolimpio.com.mx</p>
          <p>844 450 1300</p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
