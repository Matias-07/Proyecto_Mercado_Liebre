# Mercado Liebre
 
Clon de la página principal de Mercado Libre, hecho como práctica de maquetado web responsive y servidor estático con Node.js + Express. Incluye páginas de inicio, registro y login.
 
## Qué es
 
Una recreación del front-end de Mercado Libre ("Mercado Liebre") construida desde cero con HTML y CSS, servida por un pequeño backend en Express que define las rutas de las distintas páginas. El foco del proyecto fue practicar diseño responsive (mobile, tablet y desktop) y el ruteo básico de un servidor web.
 
## Características
 
- **Diseño responsive**: media queries para tres breakpoints (mobile, tablet, desktop).
- **Tres vistas**: home con grilla de productos, formulario de registro y formulario de login.
- **Validación de formularios**: validación nativa de HTML5 con `pattern` y estados `:invalid`.
- **Servidor Express**: ruteo de páginas y servido de archivos estáticos.
- **Detalles de UI**: efectos hover, animaciones de rotación e íconos de Font Awesome.
## Cómo correrlo
 
```bash
# Clonar el repo
git clone https://github.com/Matias-07/Proyecto_Mercado_Liebre.git
cd Proyecto_Mercado_Liebre
 
# Instalar dependencias
npm install
 
# Levantar el servidor
npm start
```
 
Luego abrir [http://localhost:3002](http://localhost:3002) en el navegador.
 
 
## Rutas disponibles
 
| Ruta | Página |
|---|---|
| `/` | Home con productos destacados |
| `/crea-tu-cuenta` | Formulario de registro |
| `/ingresa` | Formulario de login |
 
## Stack
 
`HTML` · `CSS` · `JavaScript` · `Node.js` · `Express` · `Font Awesome`
 
---
 
