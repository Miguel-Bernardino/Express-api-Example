import   express  from "express"
import { tarefa } from "./types"

const app = express();

const listadetarefas: tarefa[] = [];

app.get("/", (req, res) =>{
    
    res.send("<h1>Teste</h1>");

});

app.post("/lista-de-tarefas", (req, res) => {

    listadetarefas.push(req.body);
    
    res.send(listadetarefas);

});

app.listen(3000);
