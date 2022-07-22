import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BasicComponent(props) {
  const [pokemon, setPokemon] = useState(props.pokemon);
  const [pokemonID, setPokemonID] = useState();

  const handleChange = (event) => {
    setPokemon(event.target.value);
    setPokemonID(event.target.value.url.match(/.*(?:\D|^)(\d+)/));
  };

  const pokemonReturn = () => {
    return props.pokemon.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)).map((poke) => {
      return (
        <MenuItem key={poke.name} value={poke}>
          {poke.name}
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <div style={{ color: "black" }}>{pokemon.name}</div>

      {pokemonID !== undefined && (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonID[1]}.png`}
          alt="alt"></img>
      )}

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Pokemon</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={pokemon}
          onChange={handleChange}
          label="Pokemon">
          {pokemonReturn()}
        </Select>
      </FormControl>
    </div>
  );
}

export default BasicComponent;
