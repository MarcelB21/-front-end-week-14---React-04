import react, {useState, useEffect} from 'react'
import axios from "axios";

function Pokemon({url}) {

    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function fetchData() {
            setLoading(true)
            try {
                const result = await axios.get(url);
                setPokemon(result.data)
                console.log(result.data)
            } catch (e) {
                console.error(e);
            }
            setLoading(false)
        }

        fetchData()
    }, [])
    if (loading) return `loading...`

    return (
        <div className="Pokemon-module">
            <ul className="PokemonCards">
                <h1>{pokemon.name}</h1>
                <img alt="pokemon-image" src={pokemon.sprites.front_default}/>
                <h2>weight: {pokemon.weight}</h2>
                <h2>moves: {pokemon.moves.length}</h2>
                <h2>abilities: </h2>
                {pokemon.abilities.map((show) => {
                    return (
                        <li>
                            {show.ability.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pokemon