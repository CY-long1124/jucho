import axios from "axios"
export default {
    getClassFyList(){
        return (dispatch)=>{
            axios.get("/juco/home/getClassifyItem?city_id=0&operation_limit=5&version=6.0.1&referer=2&timestamp=1563269989").then(({data})=>{
                console.log(data)
            })
        }
    }
}