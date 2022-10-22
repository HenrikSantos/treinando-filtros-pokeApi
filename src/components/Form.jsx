import { MyContext } from "../context/Provider";
import { useContext, useEffect, useState } from "react";

function Form() {
  const { filterPokemons, handleOrder } = useContext(MyContext);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    filterPokemons(filter);
  }, [filter]);
  return (
    <div>
      <h1>POKEMON!</h1>

      <input
        placeholder="digite o nome do pokemon!"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <label htmlFor="crescente">
        <input
          type="radio"
          name="order"
          id="crescente"
          onClick={() => handleOrder("crescente")}
        />
        crescente
      </label>

      <label htmlFor="decrecente" onClick={() => handleOrder("decrecente")}>
        <input type="radio" name="order" id="decrecente" />
        decrecente
      </label>
    </div>
  );
}

export default Form;
