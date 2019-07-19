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
    updateShowInfoTourCity(data){
        return{
            type:showinfoType.GET_SHOWINFOTOURCITY,
            payload:{
                data
            }
        }
    },
    updateShowInfoList(data){
        return{
            type:showinfoType.GET_SHOWINFOLIST,
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
    },
    getShowInfoTourCity(){
        return (dispatch)=>{
            axios.get("/jucoo/Schedule/Schedule/getTour?show_id=38383").then(({data})=>{
                // console.log(data.data,"eee");
                // console.log(data.code,"yyyeee")
                let cityList = data.data;
                // localStorage.clear();
                // localStorage.data = data.data;
                this.updateShowInfoTourCity(cityList)
            })
        }
    },
    getShowinfoList(){
        return (dispatch)=>{
            axios.get("/juco/Search/getShowList?category=36&city_id=10055").then(({data})=>{
                // console.log(data.data,"eee");
                // console.log(data.code,"yyyeee")
                let showList = data.data;
                // localStorage.clear();
                // localStorage.data = data.data;
                this.updateShowInfoList(showList)
            })
        }
    }
}