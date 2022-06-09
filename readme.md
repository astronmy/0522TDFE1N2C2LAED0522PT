# FlexBox

## Propiedades para el Flex Container
    display: flex;
    display: inline-flex;   No se centra. Debe tener un width definido y debe ser de bloque
    flex-direction: column; Define el main axis porque es unidireccional. En el caso de column el main axis es Y
    flex-wrap: Define el comportamiento de los flex items cuando su tamaño sumado rebalse el main axis
     nowrap       (default)
     wrap         (si se sobrepasa crea una nueva linea ya sea en columna o fila depende del main axis)
     wrap-reverse (igual que wrap pero me manda al final del cross axis) 

    flex-flow (shorthand de direccion y wrap => direction, wrap)

    justify-content: nos permite alinear en el main axis en relacion al espacio disponible
          flex-start    (default)
          flex-end      Al final del main axis
          center:       centra los elementos
          space-between Distribuye el espacio equitativemente. Pero el 1 elemento se coloca al inicio del 
                        main axis y el ultimo al final del main axis
          space-around  Distribuye equitativamente el espacio (los interiores se suman)
          space-evenly  Distribuye el espacio disponible hacia todos los lados
      
    align-items: Nos permite alinear o distribuir el espacio en el cross axis
          stretch    (default) estira el elmento para ocupar espacio disponible siempre que no tenga width o height
          center     Los centra en el cross
          flex-start comienzo del cross axis
          flex-end   al final del cross axis
          baseline   se alinean en relacion a su linea base que es el texto

     Evitamos el espacio despues del wrap

     align-content:  Alinea el cross axis. PERO solo funciona cuando hay mas de SOLA fila o COLUMNA
          flex-start  Inicio cross axis
          flex-end    Final cross axis

## Propiedades para los Flex Items

     order: Puedo modificar el orden si modificar la estructura empiezan todos en 0
            recibe valores negativos
     flex-grow:   Determina cuanto crece un elemento en relacion a otros
                  Afecta solo en el main axis
                  Trabaja sobre el espacio sobrante. por defecto es 0
     flex-shrink: Determina que tanto se encoge un elemento en relacion a otro
                  Por defecto el valor es 1
     
     flex-basis: Es el tamaño base antes de sufrir la transformacion por defecto es auto (contenido)
                 Afecta el main axis y predomina al width height. (max width si limita)

     flex : grow shrink basis  (shorthand)  => puede ser auto (1 1 auto)

     align-selft: center, flex-start, flex-end, baseline 
            Funciona sobre el cross axis


     Alinear a traves del main axis
     margin-left: auto (alinea el elmento a la derecha porque ocupa el espacio disponible)
