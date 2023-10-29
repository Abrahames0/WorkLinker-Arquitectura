import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { motion } from "framer-motion";
import { Card, useMediaQuery } from "@mui/material";
import { FaMoneyBillWave, FaAudioDescription, } from "react-icons/fa";
import { AiOutlineStock } from 'react-icons/ai';
import { TbCategory } from 'react-icons/tb';
import { Link } from "react-router-dom";
import { Proveedor } from "../../models";

function ListaProductos({ producto, selectedproducto, setSelectedproducto }) {
  const [provedor, setProvedor] = useState({});
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const TextCard = { fontSize: '15px', color: '#566573' };
  const TitleCard = { fontSize: '20px' };

  const cardStyle = {
    marginTop: "15px",
    paddingBottom: "10px",
    cursor: "pointer",
  };
  
  const titleStyle = {
    ...TitleCard,
    // Agrega cualquier otro estilo que desees aquí.
  };
  
  const textStyle = {
    ...TextCard,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", // Espacio entre ícono y texto
  };
  
  const selectedBorderStyle = {
    borderLeft: "5px solid #d63384",
  };

  useEffect(() => {
    async function getData() {
      if (producto) {
        const provedor = await DataStore.query(Proveedor, (c) => c.id.eq(producto.provedorID));
        setProvedor(provedor[0]);
      }
    }
    getData();
  }, [producto]);

  function renderCardContent() {
    /* Valida que la producto recibida contenga información para que no se mapeen cards vacias */
    if (!producto || Object.keys(producto).length === 0) {
      return null;
    }

    return (
        <Card 
        className="my-3"
        variant="outlined"
        style={
          producto.id === selectedproducto?.id 
            ? { ...cardStyle, ...selectedBorderStyle } 
            : cardStyle
        }
        onClick={() => setSelectedproducto(producto)}
      >
        <div className="p-2 row">
          <div className="col-12 pb-2" style={titleStyle}>{producto.nombreProducto}</div>
          <div className="col-lg-12 pb-2" style={textStyle}><FaAudioDescription size={18}/> {producto.descripcion}</div>
          <div className="col-lg-12 pb-2" style={textStyle}><FaMoneyBillWave size={18}/> ${producto.precio}</div>
          <div className="col-lg-12 pb-2" style={textStyle}><AiOutlineStock size={18}/> {producto.stock}</div>
          <div className="col-lg-12 pb-2" style={textStyle}><TbCategory size={18} /> {producto.categoria}</div>
          <div className="col-lg-12 pb-2 d-flex align-items-center justify-content-between">
            {provedor?.imagenURL && (
              <img src={provedor?.imagenURL} alt='' style={{ width: "5rem" }} />
            )}
          </div>
        </div>
      </Card>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} >
      {isMobile ? (
        <Link to={`/empleo/${producto?.id}`} target="_blank">
          {renderCardContent()}
        </Link>
      ) : (
        renderCardContent()
      )}
    </motion.div>
  )
}

export default ListaProductos;

