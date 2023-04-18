# Ejercicio N°1 - Trabajo Práctico N°5
En este trabajo práctico realizamos diferentes ejercicios para aprender algunos conceptos básicos del lenguaje JavaScript.
Se resolvió haciendo uso de los conceptos aprendidos previamente en Trabajo Prácticos anteriores y se integraron nuevos conocimientos:
* DOM "Document Object Model":
    * `document.getElementByID`: para obtener un elemento con su ID
    * `document.querySelector('tag')`: para obtener un elemento con su tag
    * `document.querySelector('.container')`: para obtener un elemento con una clase
    * `document.querySelector('#nombreId')`: ara obtener un elemento con su ID
    * `document.getElementsByTagName('h1')` : devuelve un htmlCollection, a partir de un tag
    * `document.getElementById('tituloPrincipal')`: devuelve un objeto, a partir de un ID
    * `document.getElementsByClassName('container')`: devuelve un htmlCollection, a partir del nombre de la clase
    * `document.elemento.classlist.metodos()`: para agregar(`.add()`), remover(`.remove()`), reemplazar(`.replace()`) clases a los elementos, entre otros.
    * `document.elemento.className`: para escribir la clase del elemento.
    * `document.innerHTML`: para escribir dentro de un elemento.
    * `document.createElement("tag")`: para crear un elemento nuevo con un tag
 * BOM "Browser Object Model":
    * `window.setTimeout(funcion a ejecutar,intervalo en ms)`: para ejecutar una funcion luego de cierto tiempo
    * `window.setInterval(funcion a ejecutar,intervalo en ms)`: para ejecutar una funcion cada cierto tiempo
    * `clearInterval(IDintervalo)`: para detener el `setInterval`
## Uso de GIT
Dado que es requerimiento del Trabajo Práctico hacer un repositorio por cada ejercicio, se creó una carpeta por cada ejercicio de Trabajo Práctico. Dentro de cada carpeta de ejercicio, se tomó la estructura básica de careptas y archivos de los Trabajos Prácticos anteriores y se realiza el commit inicial. Luego se creó una rama `dev` a partir de la rama `main`. Por cada funcionalidad requerida en el ejercicio se creó una rama `nombreFuncialidad` donde se trabajó la resolución de dicha funcionalidad y luego se unieron los cambios a la rama `dev`. Una vez finalizado el ejercicio y comprobado su funcionamiento, se unió la rama `dev` a la rama `main` para tener todos los cambios. 
## Ejercicios JavaScript
### Prácticas con DOM y BOM
-------------------
#### Números Mágicos

1. Crea una web con **Bootstrap** y **JS**, que contenga un **botón** **"comenzar el juego"**, en ese momento **se crea un número aleatorio** que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
## Autor
[**César Luciano Angeleri**](https://www.linkedin.com/in/cesar-luciano-angeleri/)
## Tecnologías utilizadas
* HTML
* CSS
* **JavaScript**
*  GIT y GitHub
