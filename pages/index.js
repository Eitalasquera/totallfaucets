import { useState } from 'react';
function Home(){
    return (<div>
                <div>
                    <h2>tudo certo nada resolvido</h2>                
                </div>
            </div>)
            
}

function Contador(){
    const [contador,setContador] = useState(1);
    function adicionarContador(){
        setContador(contador+1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div> )

    
}

export default Home