import http from 'node:http';

const porta = process.env.PORTA;

function rispondi (richiesta , risposta){
risposta.end ("bella\n");
}

const server = http.createServer(rispondi);
server.listen(porta);
console.log("il server ascolta la porta ", porta);
