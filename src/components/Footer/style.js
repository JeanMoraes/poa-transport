import styled from 'styled-components';

export const BoxFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const CopyRight = styled.p`
    color: #FFF;
    font-size: 14px;
    text-align: center;

    a{
        color: #ccc;
        text-decoration: none;
        margin-left: 5px;

        &:hover{
            color: #FFF;
        }
    }
`;

export default styled;