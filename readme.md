# Tipos de Fuentes:
  Existen diferentes tipos de fuentes
  *TTF True Type Font* 
  Fue el primer formato estandar. Al ser el primero es probable que existan mas recursos de este tipo

  *OTTF Open True Type Font*  Es muy similar al anterior. Se creo para implementar la creación de las curvas. (Funciona igual que el ttf y esta orientada a creadores de fuentes)

  *WOFF Web Open Font Format* Es un formato mas ligero que mejora el rendimiento. Trabajo a través de metadatos. Tiene un soporte en todos los navegadores, no es el caso de WOFF2 que en IE no tiene soporte.

  *SVG Scalable Vector Graphics* Se utiliza para efectos y animaciones sobre el texto pero no es recomendable para utilizarla en texto genérico

  *EOT Embedded Open Type* Primer formato digital propuesto para sitios web y es comprimido. Se quedo en una propuesta y no paso a estandar y ese quedo en IE (?)

# Regla CSS => Definición a nivel de sintaxis
Se recomienda definir las fuentes al inicio del css
```
  @font-face{
    font-family: Nombre de la familia, es un nombre que podemos asignar libremente. Se recomienda que sea un nombre que le aporte sentido. (Si tiene mas de una palabra debe ir entre comillas)
    src: La ruta donde se encuentra la fuente. Dependiendo del origen
        - local()  - Local a nivel de S.0.
        - url()    - La ubicación (ruta) ya sea relativa o absoluta
        - format() - Es opcional y se usa si queremos ser especificos con la fuente que vamos a buscar o descargar. Por ejemplo si solo queremos Arial Black, si encontrara otro tipo de Arial que no fuera black no la descargaria
  }

```
Se pueden colocar mas variantes dentro de src separadas por "," (coma) por si no se encuentra el primer recurso. Por ejemplo:

```
  src: url("../fonts/mi-fuente.ttf"), url("https://fuentes.dominio.com/mifuente.ttf")
  
```


