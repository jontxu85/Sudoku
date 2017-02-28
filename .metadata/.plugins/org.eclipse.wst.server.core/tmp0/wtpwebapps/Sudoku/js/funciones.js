function disponibilidad (fila, columna, matriz, libres){

	console.log("estoy en disponibilidad fila="+fila)
	if (fila==0){
			libres=mirarFila(fila,columna,matriz,libres)
			console.log("estoy en fila 0"+libres.length)
			return libres;
			}
	else if ((columna==0) && (fila==3)){
					console.log("estoy en fila c0 f3"+libres.length)
					libres=mirarColumna(fila,columna,matriz,libres)
					return libres
					}else if ((columna==0) && (fila==6)){
						console.log("estoy en fila c0 f6"+libres.length)
						libres=mirarColumna(fila,columna,matriz,libres)
						return libres
						}else if (fila==3){
							console.log("estoy en fila f3"+libres.length)
							libres=mirarFila(fila,columna,matriz,libres)
							libres=mirarColumna(fila,columna,matriz,libres)
							return libres
						}else if (fila==6){
							console.log("estoy en fila f6"+libres.length)
							libres=mirarFila(fila,columna,matriz,libres)
							libres=mirarColumna(fila,columna,matriz,libres)
							return libres
						}else{
							console.log("tamaño de libres antes de entrar a mirar fila"+libres.length)
							libres=mirarFila(fila,columna,matriz,libres)
							console.log("tamaño de libres antes de entrar a mirar columna"+libres.length);
							libres=mirarColumna(fila,columna,matriz,libres)
							libres=mirarCuadrante(fila,columna,matriz,libres)
							return libres
						}
	return libres
	
}




function mirarFila (fila, columna, matriz, libres)	{

		
	for (var i=columna-1; i>=0; i--){
		var valorBorrado= matriz[fila][i]
		console.log("valor a borrar"+valorBorrado)
		for (j=0;j<libres.length;j++){
			if (libres[j]==valorBorrado)
				libres.splice(j,1);
		}
		
			
	}
	
	return libres
}

function mirarColumna (fila, columna, matriz, libres){
	
	for (var i=fila-1; i>=0; i--){
		var valorBorrado= matriz[i][columna]
		console.log("tamaño de libres"+libres.length)
		for (j=0;j<libres.length;j++)
			if (libres[j]==valorBorrado)
				libres.splice(j,1);
	}
	return libres		
}

function asignarCuadrante(fila, columna){
	
if (fila<3 && columna<3)
	return 1
else if((fila>3 && fila<6)&&(columna<3))
		return 4
	else if((fila>5)&&(columna<3))
		return 7
		else if((fila<3)&&(columna>2 && columna<6))
			return 2
			else if((fila<3)&&(columna>5))
				return 3
				else if((fila>2 && fila<6)&&(columna<2 && columna<6))
					return 5
						else if((fila>2 && fila<6)&&(columna<5))
							return 6
							else if((fila<5)&&(columna>2 && columna<6))
								return 8
								else if ((fila<5)&&(columna>5))
									return 9

}

function mirarCuadrante(fila, columna, matriz, libres){

	cuadrante=asignarCuadrante(fila,columna)
	console.log("estoy en la fila "+fila)
	if (cuadrante==1){
			for (var i=fila-1; i>=0; i--){
				for (var j=2; j>=0; j--){
					for(var r=0; r<libres.length; r++){
						if (matriz[i][j]== libres[r])
							libres.splice(r,1)
					}
					
				}
			}
			
		}else if(cuadrante==2){
				for (var i=fila-1; i>=0; i--){
					for (var j=5; j>=3; j--){
						for(var r=0; r<libres.length; r++){
							if (matriz[i][j]== libres[r])
								libres.splice(r,1)
						}
					}
				}
			}else if(cuadrante==3){
					for (var i=fila-1; i>=0; i--){
						for (var j=8; j>=6; j--){
							for(var r=0; r<libres.length; r++){
								if (matriz[i][j]== libres[r])
									libres.splice(r,1)
							}	
						}
					}	
				}else if(cuadrante==4){
						for (var i=fila-1; i>=3; i--){
							for (var j=2; j>=0; j--){
								for(var r=0; r<libres.length; r++){
									if (matriz[i][j]== libres[r])
										libres.splice(r,1)
								}
							}	
						}	
					}else if(cuadrante==5){
							for (var i=fila-1; i>=3; i--){
								for (var j=5; j>=3; j--){
									for(var r=0; r<libres.length; r++){
										if (matriz[i][j]== libres[r])
											libres.splice(r,1)
									}	
								}
							}	
						}else if(cuadrante==6){
								for (var i=fila-1; i>=3; i--){
									for (var j=8; j>=6; j--){
										for(var r=0; r<libres.length; r++){
											if (matriz[i][j]== libres[r])
												libres.splice(r,1)
										}	
									}
								}	
							}else if(cuadrante==7){
									for (var i=fila-1; i>=6; i--){
										for (var j=2; j>=0; j--){
											for(var r=0; r<libres.length; r++){
												if (matriz[i][j]== libres[r])
													libres.splice(r,1)
											}	
										}
									}	
								}else if(cuadrante==8){
										for (var i=fila-1; i>=6; i--){
											for (var j=5; j>=3; j--){
												for(var r=0; r<libres.length; r++){
													if (matriz[i][j]== libres[r])
														libres.splice(r,1)
												}
											}
										}
									}else 
										for (var i=fila-1; i>=6; i--){
											for (var j=8; j>=6; j--){
												for(var r=0; r<libres.lengtt; r++){
													if (matriz[i][j]== libres[r])
														libres.splice(r,1)
												}	
											}	
										}	
return libres
}
