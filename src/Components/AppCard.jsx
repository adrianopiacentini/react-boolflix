import { useGlobalContext } from "../contexts/GlobalContext"
import style from "./AppCard.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

function AppCard({ curItem, lang }) {

    const { posterUrl } = useGlobalContext()

    function lang(language) {

        let flag = ''
        if (language === 'en') {
            flag = '../../public/en.png'
        } else if (language === 'it') {
            flag = '../../public/it.png'
        } else {
            flag = '../../public/placeholder.png'
        }

        return <img src={flag} className={style.language} />
    }

    const stars = (vote) => {
        const stars = []
        const rating = Math.ceil(vote / 2)
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<i className="fa-solid fa-star"></i>)
            } else {
                stars.push(<i className="fa-regular fa-star"></i>)
            }
        }

        return <div>{stars}</div>
    }

    return (

        <div>
            <div className={style.card}>
                <img src={`${posterUrl}/${curItem.poster_path}`} />
                <div className={style.cardContent}>
                    <div>Titolo: {curItem.title || curItem.name}</div>
                    <div>Titolo originale: {curItem.original_title || curItem.original_name}</div>
                    <div>Lingua: {lang(curItem.original_language)}</div>
                    <div>Voto: {curItem.vote_average}</div>
                    {stars(curItem.vote_average)}
                </div>
            </div>
        </div>

    )
}

export default AppCard