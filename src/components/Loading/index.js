import React from 'react';

import preLoading from '../../assets/images/pre-loader.gif';
import { BoxLoading } from './style';

export default function Loading(){
    return <BoxLoading><img src={preLoading} alt="Carregando..."/></BoxLoading>
}

