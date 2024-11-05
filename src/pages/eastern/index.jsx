import { Link } from "react-router-dom"
import { dataEastern } from "../../data"

function Eastern() {
    return (
        <>
            {dataEastern.map((e) => (
                <div>
                    <img src={e.url} alt="" />
                    <p>{e.team}</p>
                    <Link to={`/team/${e.id}`}>Pagina</Link>
                </div>
            ))}
        </>
    )
}

export default Eastern