import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiChakraui,
  SiBootstrap,
  SiFramer,
} from "react-icons/si";

const skillIcons = [
  { component: <FaReact />, color: "#61DBFB", name: "React" },
  { component: <FaAngular />, color: "#DD0031", name: "Angular" },
  { component: <FaVuejs />, color: "#42b883", name: "Vue.js" },
  { component: <FaNodeJs />, color: "#339933", name: "Node.js" },
  { component: <SiTypescript />, color: "#007acc", name: "TypeScript" },
  { component: <SiJavascript />, color: "#f7df1e", name: "JavaScript" },
  { component: <SiHtml5 />, color: "#e34f26", name: "HTML5" },
  { component: <SiCss3 />, color: "#1572B6", name: "CSS3" },
  { component: <SiMysql />, color: "#00758F", name: "MySQL" },
  { component: <SiPostgresql />, color: "#336791", name: "PostgreSQL" },
  { component: <SiMongodb />, color: "#47A248", name: "MongoDB" },
  { component: <FaPython />, color: "#3776AB", name: "Python" },
  { component: <FaPhp />, color: "#787CB5", name: "PHP" },
  { component: <SiLaravel />, color: "#FF2D20", name: "Laravel" },
  { component: <SiChakraui />, color: "#319795", name: "Chakra UI" },
  { component: <SiBootstrap />, color: "#7952B3", name: "Bootstrap" },
  { component: <SiFramer />, color: "#0055FF", name: "Framer Motion" },
];

const Sphere = () => {
  const ref = useRef<any>();

  useFrame(({ clock }) => {
    if (ref.current) {
      const elapsed = clock.getElapsedTime();
      ref.current.rotation.y = elapsed * 0.1; // Rotación lenta de la esfera completa
      ref.current.scale.setScalar(1 + Math.sin(elapsed * 2) * 0.05); // Pulsación suave
    }
  });

  return (
    <group ref={ref} scale={0.6}>
      {/* Esfera de neón con borde pulsante */}
      <mesh>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshBasicMaterial color="#17c3bb" wireframe={true} />
      </mesh>

      {skillIcons.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skillIcons.length);
        const theta = Math.sqrt(skillIcons.length * Math.PI) * phi;

        return (
          <Html
            position={[
              5 * Math.cos(theta) * Math.sin(phi),
              5 * Math.sin(theta) * Math.sin(phi),
              5 * Math.cos(phi),
            ]}
            key={index}
          >
            <div
              style={{
                color: skill.color,
                fontSize: "3rem",
                textAlign: "center",
                textShadow: `0 0 10px ${skill.color}, 0 0 20px ${skill.color}`,
                animation: "rotateIcon 5s linear infinite", // Rotación lenta de cada ícono
              }}
            >
            <div style={{ transform: "scale(1.5)" }}>
              {skill.component}
            </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  marginTop: "0.2rem",
                  color: "#fff",
                  textShadow: "0 0 10px #17c3bb, 0 0 20px #17c3bb",
                }}
              >
                {skill.name}
              </div>
            </div>
          </Html>
        );
      })}
    </group>
  );
};

const SkillWorld3D: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        animation: "gradientBackground 15s ease infinite",
      }}
    >
      {/* Texto Neon a la izquierda */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#17c3bb",
          fontSize: "4rem",
          fontWeight: "bold",
          textShadow: "0 0 15px #17c3bb, 0 0 30px #17c3bb",
          animation: "pulseNeon 2s ease-in-out infinite", // Pulsación del texto
        }}
      >
        Mis Skills
      </div>

      {/* Esfera de Habilidades 3D a la derecha */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color={"#17c3bb"} intensity={0.8} />
          <Sphere />
        </Canvas>
      </div>

      {/* Estilos para las animaciones */}
      <style jsx>{`
        @keyframes rotateIcon {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulseNeon {
          0%,
          100% {
            text-shadow: 0 0 15px #17c3bb, 0 0 30px #17c3bb;
          }
          50% {
            text-shadow: 0 0 20px #17c3bb, 0 0 40px #17c3bb;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillWorld3D;
