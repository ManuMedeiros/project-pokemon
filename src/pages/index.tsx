import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import SearchPokemons from 'components/Search-Pokemons/searchPokemons';
import SearchModal from 'components/Search-modal/searchModal';
import ModalPokemon from 'components/Modal-Pokemon/modalPokemon';

export default function Home() {
    const [pokemon, setPokemon] = useState<any>();
    const [valores, setValores] = useState<any>();
    const [detalhes, setDetalhes] = useState<any>();

    const modal = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        )
            .then((preview) => {
                setValores(preview.data);
                setDetalhes(true)
            })
            .catch(error => {
                alert("Quem é esse pokemon?")
            });
    }

    const itensName = valores?.stats?.slice(0, 3)

    console.log(itensName, 'itensName')

    const itens = valores?.stats.map((item) => item.base_stat)

    console.log(itens, 'intes')

    console.log(valores, 'dataPokemon')

    return (
        <div className={styles.container}>
            {valores && (
                <ModalPokemon
                    image={valores.sprites.other.dream_world.front_default}
                    name={valores.name}
                    infos={itens.stat?.name}
                    status={itens}
                    onClick={''}
                />
            )}
            {/* {valores && detalhes &&
                <div className="modal">
                    <div className="habilidades">
                        <div className="x" onClick={() => {
                            setDetalhes(false);
                        }
                        }>X</div>
                        <div className="valores-nomes">
                            <div className="info1">
                                <p>{valores.name}</p>
                                <p className="id-info">{valores.id}</p>
                            </div>
                            {valores.stats.map((stats) => {
                                return (
                                    <div className="info">
                                        <p className="hp">{stats.stat.name}=</p>
                                        <p>{stats.base_stat}</p>
                                    </div>
                                )

                            }
                            )}

                            {valores.abilities.map((abilities) => {
                                return (
                                    <div className="info2">
                                        <p>{abilities.ability.name}</p>
                                    </div>
                                );
                            }
                            )}

                            {valores.types.map((types) => {
                                return (
                                    <div className="tipo">
                                        <p>Type= {types.type.name}</p>
                                    </div>
                                );
                            }
                            )}
                        </div>
                        <img className="img-pok" src={valores.sprites.other.dream_world.front_default} />

                    </div>
                </div>
            } */}
            <form className="inicio">
                <SearchModal
                    text='Abrir'
                    onChange={(e) => setPokemon(e.target.value)}
                    onClick={(e) => { modal(), e.preventDefault(); }}
                />
                <SearchPokemons
                    text='Pokemons'
                />
            </form>
        </div>
    )
}
