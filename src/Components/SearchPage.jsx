import { useGlobalContext } from "../contexts/GlobalContext"

function SearchPage() {

    const { moviesArray } = useGlobalContext()

    return (
        <>
            {moviesArray.map((curMovie) => {
                const lang = curMovie.original_language === 'en'
                    ? <img src="../../public/en.png"></img>
                    : curMovie.original_language === 'it'
                        ? <img src="../../public/it.png"></img>
                        : <img src="../../public/placeholder.png"></img>

                return (
                    <div key={curMovie.id}>
                        Titolo: {curMovie.title}
                        Titolo originale: {curMovie.original_title}
                        Lingua: {lang}
                        Voto: {curMovie.vote_average}
                    </div>
                )
            })}
        </>
    )
}

export default SearchPage