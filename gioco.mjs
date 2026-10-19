const segreta = "porta";
const tentativo = process.argv [2];
console.log ("hai scritto ", tentativo);

function valuta (tentativo , segreta){
	let esito =" ";
	for (let i=0;i<5;i++){
		if(tentativo [i]===segreta[i]){
			esito = esito + "=";			
		}else if (segreta.includes(tentativo[i])){
			esito = esito + "+";
		}else{
			esito = esito + "-";
		}
	}
	return esito;
}

if (tentativo === segreta ){
console.log("indovinata");
}
console.log (tentativo);
console.log (valuta (tentativo, segreta));
