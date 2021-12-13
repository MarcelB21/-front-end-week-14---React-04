import React {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from "./Pokemon";

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(() => {

        async function fetchData() {
            setLoading(true)
            try {
                const {data} = await axios.get(counter);
                setPokemonData(data)
                console.log(data)
            } catch (e) {
                console.error(e);
            }
            setLoading(false)
        }

        fetchData()
    }, [counter])
    if (loading) return `loading...`

    return (
        <>
    <div>
      Begin hier met de opdracht!
    </div>
    <button disabled={!pokemonData.previous} type="button"
            onClick={() => setCounter(pokemonData.previous)}> vorige </button>

    <button disabled={!pokemonData.next} type="button"
            onClick={() => setCounter(pokemonData.next)}> volgende </button>

            {pokemonData.results.map((item) => {
                return <Pokemon url={item.url}
                                key={item.name}
                />
            })}

            <button disabled={!pokemonData.previous} type="button"
                    onClick={() => setCounter(pokemonData.previous)}> vorige </button>

            <button disabled={!pokemonData.next} type="button"
                    onClick={() => setCounter(pokemonData.next)}> volgende </button>


        </>
);
}

export default App;
