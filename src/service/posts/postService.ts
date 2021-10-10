import { API_CONFIG } from "../../api";
import axiosConfig from "../../api/axiosConfig";

export default {

    getAll: () => {
        return axiosConfig.get(`${API_CONFIG.NEWS.GET}`, {
            params: {
                page: 1,
                pageSize: 1000
            }
        });

    },
    putVies: (id: number) => {
        return axiosConfig.put(`${API_CONFIG.NEWS.VIEW(id)}`);

    },
    GetTop: () => {
        return axiosConfig.get(`${API_CONFIG.NEWS.TOP}`, {
            params: {
                page: 1,
                pageSize: 1000,
                limit: 100
            }
        });

    }
}