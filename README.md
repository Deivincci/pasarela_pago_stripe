![Imagen de la Pasarela de Pago](https://github.com/Deivincci/pasarela_pago_stripe/blob/main/pasarel.png?raw=true)

### Descripción Completa del Proyecto: Pasarela de Pago con Stripe

Este proyecto implementa una tienda en línea básica con integración de Stripe para pagos. Es ideal para aprender cómo configurar y trabajar con una pasarela de pagos en aplicaciones web modernas. La tienda incluye dos productos con precios fijos y permite a los usuarios realizar pagos a través de la API de Stripe en modo de prueba.

#### Funcionalidades principales:
1. **Interfaz intuitiva**: 
   - Fondo visualmente atractivo.
   - Productos con imágenes, precios y botón para agregar al carrito.
   - Icono de carrito intuitivo para proceder al pago.
2. **Gestión de pagos**:
   - Uso de la API de Stripe para manejar sesiones de pago.
   - Redirección automática a la página de Stripe para completar el pago.
3. **Backend seguro y funcional**:
   - Servidor Node.js con rutas para gestionar los datos del carrito y la comunicación con Stripe.
   - Implementación de `CORS` para permitir solicitudes entre el cliente y el servidor.

---

### Requisitos previos
1. Tener instalado **Node.js** en tu máquina.
2. Contar con una cuenta de Stripe para obtener las claves API (puedes usar las claves de prueba proporcionadas por Stripe para fines educativos).

---

### Pasos para ejecutar el proyecto localmente

1. **Clonar el repositorio**:

   git clone https://github.com/tu_usuario/pasarela_pago_stripe.git
   cd pasarela_pago_stripe
Instalar dependencias: Este repositorio no incluye la carpeta node_modules por seguridad y prácticas recomendadas. Al instalar las dependencias, se generará automáticamente.

Ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install express stripe body-parser cors
Esto añadirá:

express: Framework para manejar el servidor.
stripe: Librería oficial para integrarse con Stripe.
body-parser: Para procesar solicitudes en formato JSON.
cors: Para habilitar solicitudes entre dominios (cross-origin).
Configurar las claves de Stripe:

Abre el archivo server.js.
Sustituye las claves de Stripe (stripeSecretKey y stripePublicKey) con tus propias claves de prueba o producción desde tu cuenta de Stripe.
Iniciar el servidor: Ejecuta el siguiente comando:

node server.js
Esto iniciará el servidor en http://localhost:3000.

Acceder a la tienda:

Abre tu navegador y navega a http://localhost:3000.
Explora los productos, agrega al carrito y prueba el flujo de pagos con Stripe.
Notas importantes:
Este proyecto está configurado para funcionar en modo de prueba con Stripe. No se realizarán transacciones reales.
Puedes modificar el código para añadir más productos o personalizar precios y funcionalidades.
En un entorno de producción, asegúrate de:
Usar claves de producción de Stripe.
Implementar HTTPS para una comunicación segura.
