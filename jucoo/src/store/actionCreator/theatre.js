import axios from "axios";
export default {
	GetTheatre(payload) {
		return {
			type:"GET_THEATRE",
			payload
		}
	},
	
	
	return ((dispatch)=>{
		axios.get("/juco/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2&timestamp=1563258164")
		.then(({data})=>{
			console.log(66666,data.data.theatre_list)
		})
	}
	
	)
}