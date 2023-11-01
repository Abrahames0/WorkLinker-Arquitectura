import { useState, useEffect } from "react";
import {  Link, useNavigate } from "react-router-dom";

import { DataStore } from "aws-amplify";
import { Proveedor } from "../../models";

import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { Card, useMediaQuery } from "@mui/material";

import { TbCategory, TbH5 } from 'react-icons/tb';
import { AiOutlineStock } from 'react-icons/ai';
import { FaMoneyBillWave, FaAudioDescription, } from "react-icons/fa";

function ListaProductosUsuarios({ producto, selectedproducto }) {

  const [, setProvedor] = useState({});

  const isMobile = useMediaQuery('(max-width: 1024px)');
  const TextCard = { fontSize: '15px', color: '#566573' };
  const TitleCard = { fontSize: '20px' };

  /* const cardStyle = {
    marginTop: "15px",
    paddingBottom: "10px",
    cursor: "pointer",
  }; */
  
  const titleStyle = {
    ...TitleCard,
  };
  
  const textStyle = {
    ...TextCard,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", 
  };
  
  const selectedBorderStyle = {
    borderLeft: "5px solid #d63384",
  };

  const cardStyle = {
    marginTop: "15px",
    paddingBottom: "10px",
    cursor: "pointer",
    backgroundColor: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",  // sombra sutil
    borderRadius: "5px", // bordes redondeados
  };

  useEffect(() => {
    async function getData() {
      if (producto) {
        try {
          const provedor = await DataStore.query(Proveedor, (c) => c.id.eq(producto.provedorID));
          setProvedor(provedor[0]);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getData();
  }, [producto]);

  function renderCardContent() {
    if (!producto || Object.keys(producto).length === 0) {
      return null;
    }

  return (
    <div>
        <motion.div className="m-2" whileHover={{ scale: 1.05 }}>
          <Card 
            className="my-3" 
            variant="outlined" 
            style={producto.id === selectedproducto?.id ? { ...cardStyle, ...selectedBorderStyle } : cardStyle} 
          >
            <div className="p-2 row d-flex align-items-center justify-content-center">
              <Image src={producto.imagenURL} alt='imagen' boxSize='250px' objectFit='contain' />
            </div>
            <div className="col-12 pb-2 text-center" style={titleStyle}> 
              {producto.nombreProducto.length > 26 ? producto.nombreProducto.substring(0, 26) + '...' : producto.nombreProducto}
            </div>
            <h2 className="text-center justify-content-center" style={textStyle}> ${producto.precio} </h2>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} >
      {isMobile ? (
        <Link to='' >
          {renderCardContent()}
        </Link>
      ) : (
        renderCardContent()
      )}
    </motion.div>
  )
}

export default ListaProductosUsuarios;