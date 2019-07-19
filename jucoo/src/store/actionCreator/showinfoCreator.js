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
    getShowInfo(showId = 103174){
        return (dispatch)=>{
            axios.get("/jucoo/Schedule/Schedule/getScheduleInfo?schedular_id="+showId).then(({data})=>{
                // console.log(data.data,"eee");
                // localStorage.clear();
                // localStorage.data = data.data;
                this.updateShowInfo(data.data)
            })
        }
    },
    getShowInfoTourCity(cityId = 38383){
        return (dispatch)=>{
            axios.get("/jucoo/Schedule/Schedule/getTour?show_id="+cityId).then(({data})=>{
                // console.log(data.data,"eee");
                // console.log(data.code,"yyyeee")
                let cityList = data.data;
                // localStorage.clear();
                // localStorage.data = data.data;
                this.updateShowInfoTourCity(cityList)
            })
        }
    },
    getShowinfoList(category=36,showListId=10055){
        return (dispatch)=>{
            axios.get("/juco/Search/getShowList?category="+category+"&city_id="+showListId).then(({data})=>{
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