import styled from 'styled-components';

export const BoxItem = styled.div`
    width: 250px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #f4f4f4;
    margin: 15px 5px;
    padding: 15px;

    align-items: center;

    p{
        font-size: 17px;
        margin: 10px 0;

        span{
            font-size: 14px;
            font-weight: 500;
        }
    }
    
    a{
        color: #000;
        padding: 5px 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        text-decoration: none;
        font-weight: 900;
    }
`;

export default BoxItem;