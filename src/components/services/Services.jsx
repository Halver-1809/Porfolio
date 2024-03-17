import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Ideas</motion.b> Unicas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Para tu </motion.b>{" "}
            Empresa.
          </h1>
          <button>Skills</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            Software Developer <br />En HR SOLUTION S A S, Enero 2024 - presente
          </h2>{" "}
          <br />
          <p>
            Desarrollo de software movil y web utilizando lenguajes como
            JavaScript, PHP Y TypeScript. Creación y mantenimiento de bases de
            datos MySQL y MongoDB. Implementación de algoritmos y estructuras de
            datos eficientes en proyectos. Manipulacion de frameworks y
            librerias como React, react native, Angular y laravel.
          </p>{" "}
          <br />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            Aprendiz en prácticas <br />En HR SOLUTION S A S, Julio 2023 - Enero 2024
          </h2> <br />
          <p>
            Participacion en proyectos  de desarrollo web y movil, colaboracion en equipos multidisciplinarios
            para la solucion de problemas tecnologicos. Experiencia en pruebas de software, correccion de errores 
            y documentacion tecnica , apoyo al area tanto frontend como backend , utilizando microfrontends y microservicios.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mi exeperiencia como Freelance, 2022 - a la actualidad</h2>
          <p>
            Apoyo en software, soporte como dev de salesforce para un senior de la empresa
            automatizacion de procesos mediante flows (flujos), creacion de  nuevos campos,
            documentacion con gitlab, Soporte de softwares para empresas como FCA, FCA CANADA,
            FORD Y AUDI en sus portales de gestion , manejando lenguajes como python, JavaScript,
            APEX y HTML.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
