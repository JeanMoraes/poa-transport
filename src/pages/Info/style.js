import styled from 'styled-components';

export const BoxInfo = styled.div`
   color: #FFF;

   ul{
       max-width: 400px;
       margin: 0 auto;
       padding:0;
   }

   ul > li{
       font-size: 17px;
       margin:5px 20px;
   }

   a{
       color: #ccc;
       text-decoration: none;

       &:hover{
           color: #FFF;
           text-decoration: underline;
       }
   }
`;

export default styled;