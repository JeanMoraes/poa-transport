import React from 'react';

import { BoxInfo } from './style';

function Info(){
    return(
        <>
            <h1>INFORMAÇÕES DO PROJETO</h1>
            <BoxInfo>
                <ul>
                    <li>Desenvolvido por:
                        <ul>
                            <li>Jean Moraes</li>
                        </ul>
                    </li>

                    <li>Framework
                        <ul>
                            <li>ReactJS
                                <ul>
                                    <li>Bibliotecas
                                        <ul>
                                            <li>Axios</li>
                                            <li>React Icons</li>
                                            <li>React Router DOM</li>
                                            <li>Styled Components</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>Assets
                        <ul>
                            <li>Logo: 
                                <ul>
                                    <li>Adaptada do <a href="https://www.freepik.com/vectors/logo" target="_blank">Freepik</a></li>
                                </ul>
                            </li>
                            <li>Imagem de Fundo
                                <ul>
                                    <li><a href="https://elements.envato.com/bus-PSJ5DQD" target="_blank">Envato Elements</a></li>
                                </ul>
                            </li>
                            <li>Imagem de Preloader
                                <ul>
                                    <li><a href="https://loading.io/" target="_blank">Loading.io</a></li>
                                </ul>
                            </li>
                            <li>Referência de Layout
                                <ul>
                                    <li>
                                        <a href="https://dribbble.com/shots/4469857-Bus-Ticket-Booking" target="_blank"> MS Brar (Dribble)</a>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </li>
                </ul>
            </BoxInfo>
        </>
    )
}

export default Info;