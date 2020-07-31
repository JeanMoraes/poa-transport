import React from 'react';
import { Link } from 'react-router-dom';

import { MdDirectionsBus, MdAirportShuttle  } from 'react-icons/md';

import { ContainerHome, Title, SubTitle, Button, GroupButton } from './style';

function Home(){
    return(
        <ContainerHome>
            <Title>
                BEM VINDO AO PORTAL
                <span>POA TRANSPORT</span>
            </Title>
            <SubTitle>Escolha uma opção que deseja procurar:</SubTitle>

            <GroupButton>
                <Button>
                    <Link to="/bus">
                        <MdDirectionsBus size={60}/>
                        LINHAS DE ÔNIBUS
                    </Link>
                </Button>

                <Button>
                    <Link to="/lotation">
                        <MdAirportShuttle size={60}/>
                        LINHAS DE LOTAÇÃO
                    </Link>
                </Button>
            </GroupButton>

        </ContainerHome>
    )
}

export default Home;