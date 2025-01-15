import style from './Nav.module.css'
import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import axios from 'axios'


function Nav() {

    const [inputSearch, setInputSearch] = useState('')
    const {
        api, apiKey,
        moviesArray, setMoviesArray,
        seriesArray, setSeriesArray
    } = useGlobalContext()

    const onChange = (event) => {
        setInputSearch(event.target.value)
    }

    function getMovies() {
        axios.get(`${api}/movie`, {
            params: {
                api_key: apiKey,
                query: inputSearch
            }
        }).then((resp) => {
            // console.log(resp.data.results)
            setMoviesArray(resp.data.results)
            console.log(moviesArray)
        })
    }

    function getSeries() {
        axios.get(`${api}/tv`, {
            params: {
                api_key: apiKey,
                query: inputSearch
            }
        }).then((resp) => {
            // console.log(resp.data.results)
            setSeriesArray(resp.data.results)
            console.log(seriesArray)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies()
        getSeries()
    }

    function handleEnterKey(event) {
        if (event.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputSearch} onChange={onChange} onKeyUp={() => handleEnterKey} className={style.search} placeholder="Cerca film e serie tv" />
                <button type="submit" className={style.btn}><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </nav>

    )
}

export default Nav
