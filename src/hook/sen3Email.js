export async function notificacionLLegada(pkg, repartidorCorreo, ) {
    try {
      console.log("notificacionCompra: Inicio de la función");        
      const url = process.env.REACT_APP_API_WORKLINKER+ "/correollegadapaquete";
  
      const requestData ={
        repartidor: {
            email: pkg.correoCliente,
            nombre: pkg.informacionDeCliente,
            paquetes: pkg.productosParaEntregar,
            correo: repartidorCorreo
          }
      }
  
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      };
  
      const response = await fetch(url, requestOptions);
  
      // Verificar la respuesta
      if (!response.ok) {
        throw new Error(`Error al enviar la notificación de compra: ${response.status} - ${response.statusText}`);
      }
  
    } catch (error) {
      console.error("Error al enviar la notificación de compra:", error);
    }
  }
  