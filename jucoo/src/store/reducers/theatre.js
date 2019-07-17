import theatre from "../state/theatre";

export default function (state=theatre,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	
	
	return state;
}