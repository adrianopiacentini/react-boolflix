import { useGlobalContext } from "../contexts/GlobalContext"
import AppCard from "./AppCard"
import style from "./SearchPage.module.css"

function SearchPage() {

    const {
        moviesArray, seriesArray
    } = useGlobalContext()

    return (
        <>
            <div className={style.container}>
                <h2>Film</h2>
                <section>

                    {moviesArray.map((curItem => {
                        return (
                            <AppCard key={curItem.id} curItem={curItem} />
                        )
                    }))}
                </section>

                <h2>Serie TV</h2>
                <section>

                    {seriesArray.map((curItem => {
                        return (
                            <AppCard key={curItem.id} curItem={curItem} />
                        )
                    }))}
                </section>
            </div>
        </>
    )
}

export default SearchPage