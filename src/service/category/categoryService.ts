import { API_CONFIG } from "../../api";
import axiosConfig from "../../api/axiosConfig";

export default {

    getAll: () => {
        return axiosConfig.get(`${API_CONFIG.CATEGORY.GET}`, {
            params: {
                page: 1,
                pageSize: 1000
            }
        });
    }


}
