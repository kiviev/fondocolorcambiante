
variables:
-rojo, verde y azul ( vamos a crear el color del fondo con rgba, que se definen por la cantidad de azul verde y rojo que tienen, los valores van entre 0 y 255, siendo 0 ausencia de color y 255 todo el color)

-interval esta va a ejecutar la funcion colorFondo cada segundo/lo que queramos ( asi irá mas o menos rapido)

-boolRojo, boolAzul y boolVerde --> son variables booleanas que nos van a servir para decidir en cambiaColor() si en cada intervalo vamos sumando 1 al color especifico o le vamos restando, depende si esta en true o false ( en true suma y en false resta).

funciones:

-colorFondo() --> es la que se  ejecutará cada intervalo y lo unico que hace es llamar a cambiaColor() y aplicar el estilo de background al body con el color mezcla de las tres variables de colores que esten en ese momento

-cambiaColor() --> Esta funcion lo que hace es que si la var booleana del color esta en true sumara 1 el valor de el color en concreto y restara si esta en false, al principio esta en true y el valor del color sera positivo ( un numero entre 0 y 255) y empezara a sumar, pero cuando llegue a 255 empezará a restar, tambien cuando llegue a 0 empezará a sumar, con lo cual siempre estará en un numero de entre 0 y 255, iterando cada vez de 1 en 1 , y esto lo hace por cada color por separado

--colorInicial() --> solo sirve para crear un color sobre el que empezar que sera aleatorio, y sobre ese se irá cambiando

- aleatorio(inferior,superior) --> sirve para crear un numero aleatorio que esté entreel numero inferior y superior que le pasemos como parametro

- init() --> funcion que se ejecutara al cargarse la pagina

---------------------Orden de ejecucion----------------------

Es muy sencillo , primero le añadimos un evento load a window para que se ejecute cuando este lista la pagina y le ordenamos que ejecute le funcion init() que a su vez lo unico que hace es llamar a colorInicial() para crear el primer color del fondo ( que será aleatorio).

Despues solo tiene que ejecutarse el intervalo con el tiempo que queramos 