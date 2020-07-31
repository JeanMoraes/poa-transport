import React from 'react';
import {Link} from 'react-router-dom';

import { BoxItem } from './style';

function TransportItem({id, codigo, nome}){
    return(
        <BoxItem key={id}>
            <p>
                <span>Cód.:</span> <br />
                {codigo}
            </p>
            <p>
                <span>Linha:</span> <br />
                {nome}
            </p>
              <Link to={`/itenerary/${id}`}> VER MAIS</Link>
        </BoxItem>
    )
}

export default TransportItem;