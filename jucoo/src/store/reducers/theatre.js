import theatre from "../state/theatre";

export default function (state=theatre,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	if(type === theatre.GET_THEATRE){
		state.theatre = payload.theatre_list
	}
	
	return state;
}