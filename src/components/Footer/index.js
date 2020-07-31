import React from 'react';


import { FaGithub } from 'react-icons/fa';

import { BoxFooter, CopyRight } from './style';

function Footer(){
    return(
        <BoxFooter>
            <CopyRight>
                Desenvolvido por: <a href="https://github.com/JeanMoraes/" target="_blank"><FaGithub size={15}/> Jean Moraes</a>
            </CopyRight>
        </BoxFooter>
    )
}

export default Footer;