function generarSudoku(){
	
	var matriz = new Array(10);
		for (i=0; i < 10; i++) {
				matriz[i] = new Array(10);
				
		}
	
	var libres= iniciarLibres()
	
	for (i=0; i<9; i++){
		
		for (j=0; j<9; j++){
			console.log("posicion  --->  "+i+"  "+j)
						if ((i==0)&&(j==0)){
							var sorteo=Math.floor((Math.random() * 9) + 1)
							matriz[i][j]=sorteo														
						}else{
							
							libres=disponibilidad(i,j,matriz,libres)
							if (libres.length>1){
								var sorteo=Math.floor((Math.random() * (libres.length-1)))
								matriz[i][j]=libres[sorteo]
								libres= iniciarLibres()
							}else{
								
								matriz[i][j]=libres[0]
								libres= iniciarLibres()
							}
						}
			
		}
	}
	
	
	pintarSudoku(matriz)
	
}
						

function pintarSudoku(matriz){

	for(i=0; i<9;i++){
		for(j=0; j<9; j++){
			identificador=i.toString()+j.toString()
			document.getElementById(identificador).value= matriz[i][j]
		}
	}
	

}

function iniciarLibres(){
	var libres = new Array(9);
	for (h=0; h<9; h++){
		libres[h]=h+1;
		
	}
	return libres
}



function disponibilidad (fila, columna, matriz, libres){

	
	if (fila==0){
			libres=mirarFila(fila,columna,matriz,libres)
			return libres;
			}
	else{ 

							
							if (libres.length>1)							
								libres=mirarCuadrante(fila,columna,matriz,libres)
								console.log("mirar CUADRANTE deja libres a:  "+libres.length)
								
									libres=mirarFila(fila,columna,matriz,libres)
							console.log("mirar fila deja libres a:  "+libres.length)
							if (libres.length>1)
								libres=mirarColumna(fila,columna,matriz,libres)
								console.log("mirar columna deja libres a:  "+libres.length)
							
							return libres
						}
	
}

function mirarFila (fila, columna, matriz, libres)	{

		
	for (var f=columna-1; f>=0; f--){
		var valorBorrado= matriz[fila][f]
		for (c=0;c<libres.length;c++){
			if (libres[c]==valorBorrado)
				libres.splice(c,1);
		}
		
			
	}
	
	return libres
}

function mirarColumna (fila, columna, matriz, libres){
	
	console.log("mirarColumna la fila es  "+fila+ "  columna  "+columna+" le llega con el iguiente tamaño libres a:  "+matriz[fila][columna])
	for (var f=fila-1; f>=0; f--){
		var valorBorrado= matriz[f][columna]
		for (c=0;c<libres.length;c++){
			if (libres[c]==valorBorrado)
				libres.splice(c,1)
		}
		
			
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

console.log("mirar CUADRANTE le llega con el iguiente tamaño libres a:  "+libres.length)	
cuadrante=asignarCuadrante(fila,columna)
	
	if (cuadrante==1){
		console.log("estoy en la cuadrante "+cuadrante)
			for (f=fila-1; f>=0; f--){
				for (c=2; c>=0; c--){
					for(r=0; r<libres.length; r++){
						if (matriz[f][c]== libres[r])
							libres.splice(r,1)
					}		
				}
			}		
		}else if(cuadrante==2){
			console.log("estoy en la cuadrante "+cuadrante)
				for (f=fila-1; f>=0; f--){
					for (c=5; c>=3; c--){
						for(r=0; r<libres.length; r++){
							if (matriz[f][c]== libres[r])
								libres.splice(r,1)
						}
						
					}
				}
			}else if(cuadrante==3){
				console.log("estoy en la cuadrante "+cuadrante)
					for (f=fila-1; f>=0; f--){
						for (c=8; c>=6; c--){
							for(r=0; r<libres.length; r++){
								if (matriz[f][c]== libres[r])
									libres.splice(r,1)
							}
							
						}
					}
				}else if(cuadrante==4){
					console.log("estoy en la cuadrante "+cuadrante)
						for (f=fila-1; f>=3; f--){
							for (c=2; c>=0; c--){
								for(r=0; r<libres.length; r++){
									if (matriz[f][c]== libres[r])
										libres.splice(r,1)
								}
								
							}
						}
					}else if(cuadrante==5){
						console.log("estoy en la cudrante "+cuadrante)
							for (f=fila-1; f>=3; f--){
								for (c=3; c>=5; c--){
									for(r=0; r<libres.length; r++){
										if (matriz[f][c]== libres[r])
											libres.splice(r,1)
									}
									
								}
							}
						}else if(cuadrante==6){
							console.log("estoy en la cuadrante "+cuadrante)
								for (f=fila-1; f>=3; f--){
									for (c=6; c>=8; c--){
										for(r=0; r<libres.length; r++){
											if (matriz[f][c]== libres[r])
												libres.splice(r,1)
										}
										
									}
								}
							}else if(cuadrante==7){
								console.log("estoy en la cuadrante "+cuadrante)
									for (f=fila-1; f>=6; f--){
										for (c=2; c>=0; c--){
											for(r=0; r<libres.length; r++){
												if (matriz[f][c]== libres[r])
													libres.splice(r,1)
											}
											
										}
									}
								}else if(cuadrante==8){
									console.log("estoy en la cuadrante "+cuadrante)
										for (f=fila-1; f>=6; f--){
												for (c=3; c>=5; c--){
													for(r=0; r<libres.length; r++){
														if (matriz[f][c]== libres[r])
															libres.splice(r,1)
													}
													
												}
											}
									}else 
										for (f=fila-1; f>=6; f--){
											for (c=6; c>=8; c--){
												for(r=0; r<libres.length; r++){
													if (matriz[f][c]== libres[r])
														libres.splice(r,1)
												}
												
											}
										}
										

return libres
}
