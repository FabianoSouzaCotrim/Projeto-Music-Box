import React, { useEffect, useState } from 'react';
import api from '../api';

// import { Container } from './styles';

function Musicas() {
    const [musicas, setMusicas] = useState([])

    useEffect(()=>{
        api.get().then((respostaObtida)=>{ //caminho feliz
            console.log(respostaObtida.data)
            setMusicas(respostaObtida.data)

        }).catch((erroObitido)=>{ //caminho triste
            console.log(erroObitido)
        })
    }, []) // entrar uma vez na tela

    function chamarApi() {
        //console.log(api.get())
        api.get().then((respostaObtida)=>{ //caminho feliz
            console.log(respostaObtida.data)
            setMusicas(respostaObtida.data)

        }).catch((erroObitido)=>{ //caminho triste
            console.log(erroObitido)
        })
    }

  return(
    <>
    <button onClick={chamarApi}>Chamar Api</button>
    {
        //3 > 1 ? console.log("sim, tres é maior que 1") : console.log("não 1 é maior que tres")
        musicas.map((musica) =>(
            <div key={musica.id}>
                <h1>{musica.nome}</h1>
            </div>
        ))
    }
    </>
    );
}

export default Musicas;