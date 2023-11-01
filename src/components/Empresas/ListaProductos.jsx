import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

import { DataStore } from "aws-amplify";
import { Producto, Proveedor } from "../../models";

import EditarProducto from "./EditarProducto";

import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { Button, Card, useMediaQuery } from "@mui/material";

import { GrEdit } from 'react-icons/gr';
import { TbCategory } from 'react-icons/tb';
import { AiOutlineStock } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaMoneyBillWave, FaAudioDescription, } from "react-icons/fa";

function ListaProductos({ producto, selectedproducto }) {
  const navigate = useNavigate();

  const [, setProvedor] = useState({});
  const [openModal, setOpenModal] = useState(false); 

  const isMobile = useMediaQuery('(max-width: 1024px)');
  const TextCard = { fontSize: '15px', color: '#566573' };
  const TitleCard = { fontSize: '20px' };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const cardStyle = {
    marginTop: "15px",
    paddingBottom: "10px",
    cursor: "pointer",
  };
  
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

  const handleDeleteProducto = async (producto) => {
    try {
      await DataStore.delete(Producto, producto.id);
    } catch (error) {
      console.log(error);
    }
};

const handleNext = async (producto) => {
    console.log("Entrando a handleNext");
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5d4fc6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          handleDeleteProducto(producto);
          navigate('/inicio-empresa');
          window.location.reload();
      }
    });
};

  function renderCardContent() {
    if (!producto || Object.keys(producto).length === 0) {
      return null;
    }

  return (
    <div>
      <motion.div className="m-2" whileHover={{ scale: 1.05 }} >
          <Card className="my-3" variant="outlined" style={producto.id === selectedproducto?.id ? { ...cardStyle, ...selectedBorderStyle } : cardStyle} >
            <div className="p-2 row d-flex align-items-center justify-content-center">
                <Image src={producto.imagenURL} alt='imagen' boxSize='250px' objectFit='contain' />
              </div>
              <div className="col-12 pb-2 text-center" style={titleStyle}> {producto.nombreProducto.length > 26 ? producto.nombreProducto.substring(0, 26) + '...' : producto.nombreProducto}</div>
              <div className="col-lg-12 pb-2 text-center" style={textStyle}> <FaAudioDescription size={18} /> 
                Descripcion: {producto.descripcion.length > 18 ? producto.descripcion.substring(0, 18) + '...' : producto.descripcion}
              </div>
              <div className="col-lg-12 pb-2 text-center" style={textStyle}> <FaMoneyBillWave size={18} />Precio:  ${producto.precio} </div>
              <div className="col-lg-12 pb-2 text-center" style={textStyle}><AiOutlineStock size={18} />Stock: {producto.stock}</div>
              <div className="col-lg-12 pb-2 text-center" style={textStyle}> <TbCategory size={18} />Catalogo: {producto.categoria}</div>
              <div className="my-2 text-center">
              <Button variant="text" onClick={() => handleNext(producto)}>
                <RiDeleteBin6Line size={25} className="mx-5" style={{ color: 'red' }} />
              </Button>
              <Button variant="text" onClick={handleOpenModal}>
                <GrEdit size={25} className="mx-5" style={{ color: '#5d4fc6' }} />
              </Button>
              </div>
          </Card>
          <EditarProducto open={openModal} handleClose={handleCloseModal} producto={producto} productoId={producto.id} />
      </motion.div>
    </div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} >
      {isMobile ? (
        <div>
          {renderCardContent()}
        </div>
      ) : (
        renderCardContent()
      )}
    </motion.div>
  )
}

export default ListaProductos;