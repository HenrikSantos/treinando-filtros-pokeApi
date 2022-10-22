import { MyContext } from "../context/Provider";
import { useContext, useEffect, useState } from "react";

function Table() {
  const { pokeData } = useContext(MyContext);

  return (
    <div>
      {pokeData.map((pokemon) => (
        <div key={pokemon.name}>
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Table;
