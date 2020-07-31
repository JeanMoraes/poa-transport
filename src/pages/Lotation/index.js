import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading';
import TransportItem from '../../components/TransportItem';

import { BoxFormInput, BoxResult } from './style';

function Lotation() {

  const [filteredBus, setfilteredBus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [inputNameBus, setInputNameBus] = useState('');

async function searchBus(e){

  e.preventDefault();
  setLoading(true);
  setError('')

  const response = await api.get('?a=nc&p=%25&t=l');
  const allBus = response.data;
  
  let filterBus = allBus.filter((bus) => {
     return bus.nome === inputNameBus.toUpperCase();
  });

  if(filterBus.length === 0){
    setError('Não foi possível encontrar nenhum resultado!')
  }

  setfilteredBus(filterBus);
  setInputNameBus('');
  setLoading(false);
}

  return (
    <>
      <h1>Você está procurando por: <br />Linhas de Lotadas</h1>
      <BoxFormInput>
        <form onSubmit={ searchBus }>
            <label>Digite abaixo o nome da linha que deseja informações:</label>
            <p className="error">{error}</p>
            <input
                name="inputNameBus"
                value={inputNameBus}
                onChange={ (e) => setInputNameBus(e.target.value) }
                autoComplete="off"    
              />
              <button>Buscar</button>
        </form>    
      </BoxFormInput>

      <BoxResult>     
      {
        loading === true ? <Loading /> : filteredBus.map((bus) =>
          <TransportItem
            key={bus.id}
            id={bus.id}
            codigo={bus.codigo}
            nome={bus.nome}
          />
        )
      }
      </BoxResult>
      
    </>
  );
}

export default Lotation;
