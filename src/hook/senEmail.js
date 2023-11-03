export async function notificacionCompra(userData,productosCarrito,totalPrecio,nombresProductosSeparadosPorComas) {
    try {
      console.log("notificacionCompra: Inicio de la función");
  
      // Obtén el token de autenticación del usuario actual (si es necesario)
        
        
      // URL de la función lambda que envía la notificación de seguimiento
      const url = process.env.REACT_APP_API_WORKLINKER+ "/correoCompra";
  
      // Datos que coinciden con la estructura de 'event' de la función lambda
      const fechaActual = new Date();
      const fechaCompra = fechaActual.toISOString();

      const requestData ={
        repartidor: {
            nombre: userData.nombreUsuario,
            nombrePaquete: nombresProductosSeparadosPorComas,
            precioPaquete: totalPrecio,
            fechaCompra: fechaCompra,
            email: userData.correo
          }
      }
  
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData), // Incluye los datos en el cuerpo de la solicitud
      };
  
      const response = await fetch(url, requestOptions);
  
      // Verificar la respuesta
      if (!response.ok) {
        throw new Error(`Error al enviar la notificación de compra: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      // Puedes hacer algo con 'data' si es necesario
  
    } catch (error) {
      console.error("Error al enviar la notificación de compra:", error);
    }
  }
  