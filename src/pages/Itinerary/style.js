import styled from 'styled-components';

export const BoxIntinerary = styled.div`
    margin-top: 15px;

    p{ color: #FFF; }

    @media(max-width: 800px) {
        padding: 10px;
    }
`;

export const BoxParadas = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 15px;
`;

export const ItemParadas = styled.div`
    min-width: 150px;
    height: 50px;
    padding: 20px;
    border: 1px solid #FFF;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:nth-last-child(-n+3){
        display: none;
    }

    p{
        text-align: center;
    }

    a{
        display: flex;
        color: #ccc;
        text-align: center;
        text-decoration: none;
        justify-content: center;

        &:hover{
            color: #FFF;
            text-decoration: underline;
        }
    }

    @media(max-width: 320px) {
        width: 100%;
    }

`;

export default styled;