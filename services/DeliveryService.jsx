import axios from "axios";

export default class DeliveryService {
    static async getDonatorDeliveries (user) {
        try{
        const result = await axios.get("https://givehub-server.onrender.com/api/deliveries")
        return result.data;
        }catch(e) {
            console.log(e)
        }
    }
}