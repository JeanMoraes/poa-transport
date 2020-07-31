import styled from 'styled-components';

export const ContainerHome = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    height: calc(100vh - 150px);

    @media(max-width: 800px) {
        margin-top: 30px;
        padding: 0 20px;
        height: auto;
    }

`;

export const Title = styled.h1`
    color: #FFF;
    max-width: 70%;
    font-size: 40px;
    text-align: left;

    span{
        font-size: 110px;
        display: block;
        line-height: 100%;
    }

    @media(max-width: 800px) {
        font-size: 30px;

        span{
            font-size: 30px;
        }
    }
`;

export const SubTitle = styled.h2`
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
`;

export const GroupButton = styled.div`
    display: flex;
    margin-top: 15px;

    @media(max-width: 480px) {
        flex-wrap: wrap;
    }
`;

export const Button = styled.div`
    width: 250px;
    height: 200px;
    background-color: #FFF;
    border: 1px solid #1a1c54;

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;   

        width: 100%;
        height: 100%;
        text-decoration: none;
        font-weight: 900;
        color: #678ac9;

        transition: box-shadow 0.3s ease;

        &:hover{
            box-shadow: 0px 0px 20px rgba(103, 138, 201, 0.8);
            transition: box-shadow 0.3s ease;
        }

        svg{
            padding: 10px;
        }
    }

    @media(max-width: 480px) {
        width: 100%;
    }


`;

export default styled;