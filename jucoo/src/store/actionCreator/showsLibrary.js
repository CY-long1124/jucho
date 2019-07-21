import axios from "axios";

export default {
    GetLibrary(payload) {
        return {
            type: "GET_SHOWSLIBRARY",
            payload
        }
    },
    getLibraryList({
       page :page = 3,
       category: category = 0/1
    }){
//console.log("执行了",this)
        return ((dispatch) => {
            axios.get("/juco/Search/getShowList?category="+category+"&city_id=0&page="+page+"&keywords=&version=6.0.1&referer=2")
                .then(({
                    data
                }) => {
                    // console.log(2222222222,data)
                    const showsList = data.data.list;
                    //console.log(100101001,data)
                    dispatch(this.GetLibrary({
                        showsList,
                        page,
                        category
                    }))
                    //console.log(111111111111000000, showCategoryList)
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