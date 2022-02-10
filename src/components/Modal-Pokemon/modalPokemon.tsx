import React from "react";
import * as S from './style';

interface Props {
    image?: any;
    name?: string;
    infos?: any;
    status?: string;
    onClick?: any;
}

const ModalPokemon = ({ image, name, infos, status, onClick }: Props) => {
    return (
        <S.Modal>
            <S.backImage>
                <S.ImagePokemon src={image} />
            </S.backImage>
            <S.NamePokemon>{name}</S.NamePokemon>
            <S.DivInfo>
                <S.InfoPokemon>{infos}</S.InfoPokemon>
                <S.StatusValue>{status}</S.StatusValue>
            </S.DivInfo>
            <S.Detail onClick={onClick}>More Datails</S.Detail>
        </S.Modal>
    )
}

export default ModalPokemon;