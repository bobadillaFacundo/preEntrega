# 📦 API de Productos

Este proyecto permite interactuar con una API REST de productos desde la consola usando comandos `npm run`.

## 🚀 Requisitos Previos

- Tener Node.js instalado
- Ejecutar `npm install` para instalar las dependencias necesarias

---

## 📘 Comandos Disponibles

### 🔍 Consultar Todos los Productos

Ejecuta el siguiente comando para obtener la lista completa de productos:

```bash
npm run start GET products
```

Este comando realiza una petición `GET` a la API y muestra todos los productos en la consola.

---

### 🔎 Consultar un Producto Específico

Ejecuta el siguiente comando reemplazando `<productId>` por el ID del producto que deseas consultar:

```bash
npm run start GET products/<productId>
```

**Ejemplo:**

```bash
npm run start GET products/15
```

Este comando realiza una petición `GET` para obtener los detalles de un producto específico.

---

### 🆕 Crear un Producto Nuevo

Ejecuta el siguiente comando con los datos del nuevo producto (`<title>`, `<price>`, `<category>`) como parámetros:

```bash
npm run start POST products <title> <price> <category>
```

**Ejemplo:**

```bash
npm run start POST products "Monitor LED" 199.99 "Electrónica"
```

Esto enviará una petición `POST` a la API para crear un nuevo producto con los valores proporcionados y mostrará el resultado en la consola.

---

### ❌ Eliminar un Producto

Ejecuta el siguiente comando reemplazando `<productId>` por el ID del producto a eliminar:

```bash
npm run start DELETE products/<productId>
```

**Ejemplo:**

```bash
npm run start DELETE products/15
```

Este comando realiza una petición `DELETE` para eliminar el producto correspondiente y muestra la respuesta en la consola.

---

## 🛠️ Notas

- Asegúrate de que el servidor backend esté corriendo antes de ejecutar los comandos.
- Los parámetros deben estar correctamente formateados para evitar errores.
