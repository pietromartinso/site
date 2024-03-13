import "./menu.css"

function Menu({ HandleClickOpenMenu }) {
    return(
        <div className="menu" onMouseLeave={HandleClickOpenMenu}>
            <ul>
                <a href="#inicio"><li>Início</li></a>
                <a href="#sobre"><li>Sobre</li></a>
                <a href="#courses"><li>Cursos</li></a>
                <a href="#servicos"><li>Serviços</li></a>
            </ul>
        </div>
    )
}

export default Menu