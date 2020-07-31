import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Loading from '../../components/Loading';

import { BoxIntinerary, BoxParadas, ItemParadas } from './style';

function Itinerary( props ){

    const [itinerary, setItinerary] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadItineraty();

    }, []);

    async function loadItineraty(){
        setLoading(true);

        const response = await api.get(`?a=il&p=${props.match.params.id}`);
        setItinerary(response.data);
        
        setLoading(false);
    }

    return(
        <BoxIntinerary>
            <h1>INTINERÁRIOS</h1>

            <div>
                { loading === true ? "" : <p><strong>Código: </strong> {itinerary.codigo}</p> }
                { loading === true ? "" : <p><strong>Linha: </strong> {itinerary.nome}</p> }
            </div>            

            <BoxParadas>
                {
                    loading === true ? <Loading /> : Object.keys(itinerary).map( (item) => {
                        return(
                            <ItemParadas key={item}>
                                <p>
                                    Parada {item}: 
                                </p>
                                <a
                                    href={`https://www.google.com/maps/?q=${itinerary[item].lat},${itinerary[item].lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    VER ROTA
                                </a>                                
                            </ItemParadas>
                        )
                    })
                }
            </BoxParadas>

        </BoxIntinerary>
    )
}

export default Itinerary;