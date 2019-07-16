import showinfoType from "../actionType/showinfoType"
import axios from "axios"
export default {
    updateShowInfo(data){
        return{
            type:showinfoType.GET_SHOWINFO,
            payload:{
                data
            }
        }
    },
    getShowInfo(){
        return (dispatch)=>{
            axios.get("/jucoo/Schedule/Schedule/getScheduleInfo?schedular_id=103174").then(({data})=>{
                // console.log(data.data,"eee");
                // localStorage.clear();
                // localStorage.data = data.data;
                this.updateShowInfo(data.data)
            })
        }
    }
}