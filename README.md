# Proyecto JavaScript

### Integrantes:

- #### Andres David Paniagua Villada

- #### María Jose Pinto Aparicio



##### Descripcion:



Se utiliza boostrap para maquetar el sidebar y el navbar de la pagina, asi mismo para asignarle  iconos a cada categoria del menu.



El archivo que contiene los datos ingresados esta en la carpeta data, en un archivo llamado data.json



Toda la información se carga en un servidor JSON utilizando JSON Server



Este implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para activos utilizando una API RESTful. Las funciones manejan las interacciones del usuario, realizan solicitudes a la API y actualizan la interfaz de usuario, construimos la introducción de datos con modal. 



Entre ellas encontramos (POST, GET, PUT Y DELETE):



- Utilizamos la solicitud fetch de tipo POST para agregar nueva información de activos al archivo JSON en el servidor, aqui se recibe los datos y los agrega al archivo json con la informacion digitada.

  

- La solicitud fetch de tipo GET se utiliza para buscar un elemento  específico dentro del archivo JSON que contiene la información de los  activos, aqui busca en el archivo JSON el activo correspondiente al código proporcionado y devuelve la información de ese activo en formato JSON  como respuesta a la solicitud.

  

- Utilizamos la solicitud fetch de tipo PUT para actualizar la información de un activo existente en el archivo JSON en el servidor,  aqui busca el activo correspondiente al ID  proporcionado, actualiza los campos con la nueva información  proporcionada por el usuario y guarda los cambios en el archivo JSON.

  

- La solicitud fetch de tipo DELETE se utiliza para eliminar un activo existente del archivo JSON en el servidor al ingresar la id.



Se usara el servicio de Activos como ejemplo para los demas servicios ya que de este reutilizamos el codigo para crear las solicitudes al servidor con fetch. Asi mismo el uso de las opciones del side-dropdown menu.



1. **buscarActivos:** Esta función se llama cuando el usuario desea buscar un activo por su código. Toma el código ingresado por el usuario, realiza una solicitud GET a la API para buscar el activo correspondiente y luego muestra la información del activo encontrado en el HTML.

   

2. **addActivos:** Esta función se utiliza para agregar un nuevo activo. Toma un objeto `Activo`, realiza una solicitud POST a la API para agregar el activo y devuelve la respuesta de la API.

   

3. **editarActivos:** Esta función se llama cuando el usuario desea editar un activo. Realiza una búsqueda del activo por su código, carga la información del activo en un formulario de edición y permite al usuario modificar los campos.

   

4. **guardarEdicionActivos:** Esta función se llama cuando el usuario confirma la edición de un activo. Obtiene los valores del formulario de edición, realiza una solicitud PUT a la API para actualizar el activo y muestra una alerta al usuario con el resultado.

   

5. **buscadorEliminarActivos:** Esta función se utiliza para buscar un activo antes de eliminarlo. Similar a la función `buscarActivos()`, toma un código de activo, busca el activo correspondiente en la API y muestra la información del activo junto con un botón para eliminarlo.

   

6. **eliminarActivos** Esta función se llama cuando el usuario confirma la eliminación de un activo. Busca el activo por su ID, verifica si el estado del activo es No asignado, y si lo es, realiza una solicitud DELETE a la API para eliminar el activo.



El resto de servicios siguen un patron similar a este ya que la mayoria tenia las mismas opciones y bajo esta estructura se construyo el manejo de datos dentro del programa.



