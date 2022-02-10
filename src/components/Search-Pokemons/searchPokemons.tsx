import React from "react";
import { Button, Link } from "./style";

interface Props {
    text: string;
}

const SearchPokemons = ({text}: Props) => {
    return(
    <>
        <Button>
            <Link href="/pokemons">{text}</Link>
        </Button>
    </>
    )}

export default SearchPokemons;