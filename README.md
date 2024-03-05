# boostrap_devs

# contendeores

tipos:

.container y .container-fluid segun se quiera o no que se ocupa la totalidad de ancho del viewport

.contenedores responsive: utilizan los breakpoints, es decir cubre en 100% del viewport hasta que se llegue a determinado tamaña por debajo del cual reajustara su contenido.(el breakpoint puede ser personalizado)

sm(xs)
md(medium)
lg(large)
xl y xxl (muy grande)

# columnas

cada fila contiene 12 columnas, podemos personalizar el contenido de esa columnas aplicando primero la clase correspondiente y luego "-"; por ejemplo si tenemos una column sm y queremos divirla en dos partes iguales tipeamos:
class="col-sm-6 col-sm-6"


    <style>
    .row{
      background-color: orange;
      border: 3px solid rgb(110, 73, 5);
      padding:5px;
      margin:10px;
    }
    .col{
      background-color: #d40655;
      color:white;
      font-size: 50px;
      border:2px solid #640328;
    }
    </style>
   
    </head>

    <body>
    <div class="container text-center">
    <div class="row">
    <div class="col">columna 1</div>
    <div class="col">columna 2</div>
    </div>
    <div class="row">
    <div class="col">columna 3</div>
    <div class="col">columna 4</div>
    <div class="col">columna 5</div>
    </div>
     </div>
    </body>


    </html>


Como dijimos anteriormente sobre la estructura anterior se pueden establecer cuando puede ocupar el la columna dentro del contenedor.
O incluso se puede definir en la propia clase que sucede con la columna cuando se suceda el punto de quiebre.


    <style>
    .row{
      background-color: orange;
      border: 3px solid rgb(110 73 5);
      padding:5px;
      margin:10px;
    }
    .columna{
      color:white;
      font-size: 25px;
      background-color: #050776;
      border:5px solid white;
    }
      </style>
   
    </head>

    <body>
     <div class="container text-center">
    <div class="row">
      <div class="col-sm-4 col-lg-6 columna">
        .col-sm-4
      </div>
      
      <div class="col-sm-8 col_lg-6 columna" >
        .col-sm-8
      </div>
    </div>
        </div>
      </body>

# componentes:

# iconos
     <style>
    i{
      color: black;
      font-size: 250px;
    }
     </style>
   
    </head>

    <body>
      <div class="container">
    <i class="bi bi-apple"></i>
    </div>
    </body>

# flexbox

en boostrap flexbox ya viene con una estilo predeterminado y se aplica con la class="d-flex"


