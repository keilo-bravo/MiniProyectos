# Ejercicio Indicador de Carga

#### Pre-requisitos:
No es necesario nigun pre-requisito especifico para realizar este mini proyecto, solo necesitas un editor de codigo de preferencia.

> De usar Visual Studio Code es recomendable instalar la extencion `Live Server` [pagina de descarga](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


#### Inicio del proyecto:
Escribe codigo en los archivos `index.html` y `styles.css` para crear el `Indicador de carga` o `Loading page`:

- En el index.html crea 2 etiquetas `<div>` con un `id` diferente para cada uno, una de las etiquetas debe quedar dentro de la otra.

```html
    <div class="contenedor_carga">
        <div class="carga">
        </div>
    </div>
```
![img](./img/01-html.png)

#### Agregar estilos:
- En el style.css procedemos a trabajar con los estilos para darle forma.

> Este primer paso es opcional, ya que tiene poca influencia en el resultado final, solo nos ayuda a dimencionar el Loading de un tamaño en especifico.

* Aplicamos los artibutos `margin` y `padding` en 0 para evitar margenes en todos los elementos del HTML y para eso haremos uso del selector universal (*), tambien haremos uso del artibuto `box-sizing`con un comportamiento `border-box` el cual nos hara mucho más fácil dimensionarlos, al darle valores a su tamaño de ancho y largo se limitaran a ocupar este.

```css
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
```
![img](./img/02-css-step-1.png)



