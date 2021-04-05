import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [valores, setValores] = useState();
  const [detalhes, setDetalhes] = useState();

  const modal = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    )
      .then((preview) => {
        setValores(preview.data);
        setDetalhes(true)
        console.log(preview.data, "teste");

      }

      )
      .catch(error => {
        alert ("Quem é esse pokemon?")
    });
  }
  console.log(valores, "pokemoonm")
  
  return (

    <div className={styles.container}>
      {valores && detalhes &&
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
              console.log(stats, "hp")
              return (
                <div className="info">
                  <p className="hp">{stats.stat.name}=</p>
                  <p>{stats.base_stat}</p>

                  {console.log(stats.base_stat.stat, "alo")}
                </div>
              )

            }
            )}

            {valores.abilities.map((abilities) => {
              console.log(abilities, "habilidades")
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
}
      <form className="inicio">
        <div className="barras-input">
          <input type="text" name="pokemon" placeholder="POKEMON" onChange={(e) => {
            setPokemon(e.target.value);
          }}></input>
          {console.log(pokemon, "click")}
          <button className="button"
            onClick={(e) => { modal(), e.preventDefault(); }
            }>Abrir</button>

        </div>
        <div class="bottom-pok">
          <a href="/pokemons">All Pokemons</a>
        </div>
      </form>
    </div>
  )
}
