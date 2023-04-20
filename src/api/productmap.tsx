import axios from 'axios';

const productmap = axios.create({
  baseURL: 'https://6222994f666291106a29f999.mockapi.io/api/v1',
  params: {
    appid: '92109bb0ffd34185bc5e1b28030fba47',
    lang: 'es',
    units: 'metric',
  },
});

export default productmap;

