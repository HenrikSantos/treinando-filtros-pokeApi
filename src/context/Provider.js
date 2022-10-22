import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export function Provider({ children }) {
  const [pokeData, setPokeData] = useState([]);
  const [backupPokeData, setBackupPokeData] = useState([]);

  useEffect(() => {
    fetchPokeApi();
  }, []);

  const fetchPokeApi = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    setPokeData(data.results);
    setBackupPokeData(data.results);
  };

  const filterPokemons = (pokemonName) => {
    const filter = backupPokeData.filter((pokemon) =>
      pokemon.name.includes(pokemonName)
    );
    setPokeData(filter);
  };

  const handleOrder = (order) => {
    if (order === "decrecente") {
      const sorted = pokeData.sort((p1, p2) =>
        p1.name < p2.name ? 1 : p1.name > p2.name ? -1 : 0
      );
      setPokeData([...sorted]);
    }
    if (order === "crescente") {
      const sorted = pokeData.sort((p1, p2) =>
        p2.name < p1.name ? 1 : p2.name > p1.name ? -1 : 0
      );
      setPokeData([...sorted]);
    }
  };

  const contextValue = { fetchPokeApi, pokeData, filterPokemons, handleOrder };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
