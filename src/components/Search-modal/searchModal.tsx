import React from "react";
import * as S from './style';

interface Props {
    text: string;
    onClick: any;
    onChange: any;
}

const SearchModal = ({text, onClick, onChange}: Props) => {
    return (
        <S.DivGeneral>
            <S.SearchPokemon 
                type='text' 
                name='pokemon' 
                placeholder="Pokemom" 
                onChange={onChange}/>
            <S.ButtonSearch onClick={onClick}>
                {text}
            </S.ButtonSearch>
        </S.DivGeneral>
    )
}

export default SearchModal;