import AxiosClient from './class';

const backendUrl = process.env.NEXT_PUBLIC_BACK_URL || '';
const axiosClient = new AxiosClient(backendUrl);

export default axiosClient;
