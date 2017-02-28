function crearTabla(){

	
	var divTabla = document.getElementById('tabla');
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
 
  // Crea las celdas
  for (var i = 0; i < 9; i++) {
    // Crea las hileras de la tabla
	  var filas = document.createElement("tr");		  
	    for (var j = 0; j < 9; j++) {
	      
	      var celda = document.createElement("td");
	      var inputs = document.createElement("input");
	      var fila= i;
	      var columna= j;
	      inputs.id= fila.toString()+columna.toString();
	      celda.appendChild(inputs);
	      filas.appendChild(celda);
	      if (j==2 || j==5 || j==8){
	    	  $(celda).addClass("lateralGordo");
	      }
	      
	    }
	tabla.appendChild(filas);
	}
	 
  divTabla.appendChild(tabla);
  
 var negritaHorizontal= document.getElementsByTagName("tr")[0];
 $(negritaHorizontal).addClass("bordeGordo");
 negritaHorizontal= document.getElementsByTagName("tr")[3];
 $(negritaHorizontal).addClass("bordeGordo");
 negritaHorizontal= document.getElementsByTagName("tr")[6];
 $(negritaHorizontal).addClass("bordeGordo");
 generarSudoku();
 
 }



