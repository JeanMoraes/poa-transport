import styled from 'styled-components';

export const Head = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media(max-width: 800px) {
        margin-top: 30px;
        flex-direction: column;
    }

    @media(max-width: 480px) {
        height: auto;
    }
`;

export const Brand = styled.div`
    max-width: 200px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    box-sizing: border-box;

    img{
        max-width: 100%;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

        a{
            color: #ccc;
            text-decoration: none;
            padding: 5px 20px;
            font-size: 14px;
            font-weight: 500;
            text-align: center;

            &:hover{
              color: #FFF;  
            }

            &:last-child{
                background-color: #e9d31b;
                color: #000;
                font-weight: 900;
                padding: 15px 45px;
                margin-left: 30px;
                transition: background-color 0.2s ease-in;

                &:hover{
                    background-color: #a5940a;
                    transition: background-color 0.2s ease-in;
                }
            }
        }

        @media(max-width: 480px) {

            border-top: 1px solid #ccc;
            flex-direction: column;

            a{
                display: flex;
                height: 35px;
                align-items: center;

                &:last-child{
                    padding: 10px;
                    width: 100%;
                    text-align: center;
                    justify-content: center;
                }
            }
    }
`;

export default styled;