import axios from "axios";
import { STATUS_ORDER } from "../../helper";

export default {

    uploadFile: async (formData: any) => {
        try {
            const { data } = await axios.post(
                'https://image-service.patitek.com/api/v1/images/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return data;
        } catch (err) {
            throw err;
        }
    },
    formatStatus(value: any) {
        if (value === '' || value == null) {
            return 'unknown'
        }
        else {
            const index = STATUS_ORDER.findIndex(x => x.value.toString() === value);
            return STATUS_ORDER[index].valueView
        }
    },
    formatDate(value: any) {
        const date = new Date(value);
        let month: any = (date.getMonth() + 1);
        let day: any = (date.getDate());
        let hours: any = date.getHours();
        let minutes: any = date.getMinutes();
        let second: any = date.getSeconds();


        // 
        if (hours < 10)
            hours = '0' + hours;
        if (minutes < 10)
            minutes = '0' + minutes;
        if (second < 10)
            second = '0' + second;
        if (month < 10)
            month = '0' + month;
        if (day < 10)
            day = '0' + day;
        return 'Ngày ' + day + "/" + month + "/" + date.getFullYear() + ' vào lúc ' + hours + ':' + minutes + ':' + second;
    }
}