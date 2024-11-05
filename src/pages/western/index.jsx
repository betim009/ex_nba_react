/*
Criar o componenet Link do React Router Dom, para enviar o parametro de id
dentro do elemento do map. Similar da pagina Eastern
*/

import { dataWeastern } from "../../data"

function Western() {
    return (
        <>
            {dataWeastern.map((e) => (
                <div>
                    <img src={e.url} alt="" />
                    <p>{e.team}</p>
                </div>
            ))}
        </>
    )
}

export default Western