import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/halver-verdugo-42aa6b282" target="a_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          {/* <a href="https://candidato.co.computrabajo.com/candidate/cv/edit" target="a_blank">
            <img src="/computrabajo.png" alt="" />
          </a> */}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
