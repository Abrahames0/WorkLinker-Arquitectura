export async function notificacionEnvio(pkg, repartidorCorreo) {
    try {
      console.log("notificacionCompra: Inicio de la función");        
        
      // URL de la función lambda que envía la notificación de seguimiento
      const url = process.env.REACT_APP_API_WORKLINKER+ "/correoseguimientopaquete";

      const requestData ={
        repartidor: {
            email: pkg.correoCliente,
            cliente: pkg.informacionDeCliente,
            producto: pkg.productosParaEntregar,
            estado: "En camino",
            destino: pkg.direccionDeEntrega,
            correoElectronico: repartidorCorreo
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
  