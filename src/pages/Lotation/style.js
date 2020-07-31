import styled from 'styled-components';

export const BoxFormInput = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;

        label{
            color: #FFF;
            text-align: center;
            padding: 15px;
        }

        .error{
            color: #F00;
            text-align: center;
        }

        input{
            width: 450px;
            height: 45px;
            font-size: 20px;
            margin-bottom: 15px;

            @media(max-width: 480px) {
                width: 100%
            }
            
        }

        button{
            height: 50px;
            border: 0;
            background-color: #678ac9;
            color: #FFF;
            font-weight: 500;
            font-size: 15px;
            cursor: pointer;
        }
    }
`;

export const BoxResult = styled.div`
    display: flex;
    flex-direction: row;
`;

export default styled;