import axios from "axios";
export default {
    GetCategory(payload) {
        return {
            type: "GET_SHOWCATEGROY",
            payload
        }
    },
    getCategoryList({
        page : page = 1,
        category: category = 0/1
     }) {
        return ((dispatch) => {
            axios.get("/juco/Search/getShowCategory?version=6.0.1&referer=2&timestamp=1563265046")
                .then(({
                    data
                }) => {
                    //console.log(99999, data);
                    const showCategoryList = data.data.show_category_list;
                    //console.log(4444444444,showCategoryList)
                    dispatch(this.GetCategory({
                        showCategoryList,
                        page,
                        category
                    }))
                })
        })
    },


}