import axios from "axios";

export default {
    getTourShowList(payload) {
        return {
            type: "GET_TOURSHOWINFO",
            payload
        }
    },
    getTourList({
       sid: sid 
    }){
console.log("执行了",this)
        return ((dispatch) => {
            axios.get("/juco/tour/tourshowinfo?sid="+sid)
                .then(({
                    data
                }) => {
                    //console.log(2222222222,this)
                    const tourShowsList = data;
                    console.log(100101001,tourShowsList)
                   // console.log(898888888,tourShowsList)
                    dispatch(this.getTourShowList({
                        tourShowsList,
                       // sid
                    }))
                    //console.log(111111111111000000, tourShowsList)
                })
        })

    },
    toShowsLibrary() {
        //console.log(111)

        // this.props.history.push({
        //     pathName:"showsLibrary",
        //     state:{
        //         a:2
        //     }
        // })
    }
}