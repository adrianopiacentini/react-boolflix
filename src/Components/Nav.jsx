import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import axios from 'axios'


function Nav() {

    const [inputSearch, setInputSearch] = useState('')
    const { setMoviesArray, api, apiKey } = useGlobalContext()

    const onChange = (event) => {
        setInputSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.get(`${api}/movie`, {
            params: {
                api_key: apiKey,
                query: inputSearch
            }
        }).then((resp) => {
            console.log(resp)
            setMoviesArray(resp.data.results)
        })
    }

    return (
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputSearch} onChange={onChange} />
                <button type="submit">Cerca</button>
            </form>
        </nav>

    )
}

export default Nav