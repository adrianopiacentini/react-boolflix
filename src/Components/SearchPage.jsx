import { useGlobalContext } from "../contexts/GlobalContext"
import AppCard from "./AppCard"

function SearchPage() {

    const {
        moviesArray, seriesArray
    } = useGlobalContext()

    return (
        <>
            <h1>Array di serie</h1>
            {seriesArray.map((curItem => {
                return (
                    <AppCard key={curItem.id} curItem={curItem} />
                )
            }))}

            <h1>Array di film</h1>
            {moviesArray.map((curItem => {
                return (
                    <AppCard key={curItem.id} curItem={curItem} />
                )
            }))}
        </>
    )
}

export default SearchPage