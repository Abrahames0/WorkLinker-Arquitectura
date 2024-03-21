import React from "react";
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import FeatureCard from "./FeatureCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const data = [
  {
    icon: <TbTruckDelivery size={50} />,
    title: "Envío Gratis",
    desc: "Pedidos de todos los artículos",
  },
  {
    icon: <RiRefund2Fill size={50} />,
    title: "Devolución y Reembolso",
    desc: "Garantía de devolución de dinero",
  },
  {
    icon: <TbDiscount2 size={50} />,
    title: "Descuento para Miembros",
    desc: "En pedidos superiores a $99",
  },
  {
    icon: <MdSupportAgent size={50} />,
    title: "Soporte 24/7",
    desc: "Contáctanos las 24 horas del día",
  },
]; 

const Features = () => (
  <Container>
      <Grid container spacing={3} className="mt-2">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <FeatureCard
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
);

export default Features;
