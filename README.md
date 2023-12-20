# scfe
## Pasos para instalar
npm install <br>
npm start
## Capas del Proyecto React
La estructura para este proyecto en React esta basada en una arquitectura modular, que se concentra principalmente en las capas de components y services, estas ayudan a la separación de responsabilidades y promueven un codigo mantenible y escalable
### Components
- **Finalidad**: Constituye el núcleo de la interfaz de usuario.
- **Descripción**: Compuesta por elementos reutilizables que definen la apariencia y el comportamiento de la aplicación.
- **Estructura**: Incluye desde componentes pequeños y funcionales hasta páginas completas.
- **Principio**: Sigue el principio de responsabilidad única, donde cada componente gestiona su propia lógica y estado.
- **Interacción**: Los componentes interactúan entre sí para construir la interfaz de usuario, pasando datos y eventos a través de props.
### Service
- **Objetivo**: Gestión de las comunicaciones con fuentes externas, como APIs de backend.
- **Función**: Encapsula la lógica de acceso a datos, manteniendo los componentes libres de esta responsabilidad.
- **Implementación**: Utiliza herramientas como Axios para realizar peticiones HTTP, manejando las respuestas y posibles errores.
- **Integración**: Los servicios se integran con los componentes para proveer datos o realizar acciones como carga, actualización y eliminación.
- **Ventaja**: Favorece una arquitectura limpia, donde la capa de presentación se separa claramente de la lógica de negocio.

