import jucooType from "../actionType/jucoo"
import axios from "axios"
export default {
    updateShowInfo(data){
      return{
          type:jucooType.GET_SHOWINFO,
          payload:{
              data
          }
      }
    },
    getShowInfo(){
        return (dispatch)=>{
            axios.get("/jucoo/Schedule/Schedule/getScheduleInfo?schedular_id=103174&version=6.0.1&referer=2").then(({data})=>{
                console.log(data.data,"eee");
                this.updateShowInfo(data.data)
            })
        }
    }
}