import http from 'node:http';

const porta = process.env.PORTA;

function rispondi (richiesta , risposta){
	console.log(richiesta.method , richiesta.url);
	risposta.setHeader("Content-type", "text/plain; charset=utf-8")

	if ( richiesta.url === "/" ){
		risposta.end ("qui parola segreta\n");
	}else if (richiesta.url === "/regole"){
		risposta.end ("indovina la parola di cinque lettere\n");
	} else {
		risposta.statusCode = 404; 
		risposta.end ("indirizzo sconosciuto\n");
	}
}
	const server = http.createServer(rispondi);
	server.listen(porta);
	console.log("il server ascolta la porta ", porta);
