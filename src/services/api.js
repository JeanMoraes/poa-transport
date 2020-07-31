import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.poatransporte.com.br/php/facades/process.php'
            //http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o
            //http://www.poatransporte.com.br/php/facades/process.php?a=il&p=29
});

export default api;