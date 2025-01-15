import style from './header.module.css'
import Nav from './Nav'

function Header() {
    return (

        <header>
            <img className={style.logo} src='../../public/boolfix.png'/>
            <Nav />
        </header>


    )
}

export default Header