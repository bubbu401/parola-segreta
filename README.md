# parola segreta

gioco in rete: il server sceglie una parola di 5 lettere e gli utenti provano ad indovinarla

classe 5ci


## API
- POST /partite : comincia una partita. Risposta 201.
- GET /partite/N : stato della partita N. Risposta 200, oppure 404.
- POST /partite/N/tentativi : propone una parola, nel corpo in JSON.
Risposta 201, oppure 400 o 404.
