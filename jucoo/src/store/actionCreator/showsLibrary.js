import axios from "axios";

export default {
    GetLibrary(payload) {
        return {
            type: "GET_SHOWSLIBRARY",
            payload
        }
    },
    
    getLibraryList({
       page : page = 1,
       category: category = 0/1
    }) {

        return ((dispatch) => {
            axios.get("https://m.juooo.com/Search/getShowList?category="+ category +"&city_id=0&page=" + page)
                .then(({
                    data
                }) => {
                    //console.log(2222222222,data)
                    const showsList = data.data.list;
                    dispatch(this.GetLibrary({
                        showsList,
                    }))
                    //console.log(111111111111000000, showCategoryList)
                })
        })

    },
    toShowsLibrary() {
        console.log(111)

        // this.props.history.push({
        //     pathName:"showsLibrary",
        //     state:{
        //         a:2
        //     }
        // })
    }
}