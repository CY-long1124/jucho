import Jucheng from '../views/jucheng'
import Theatre from '../views/theatre'
import Eticket from '../views/eticket'
import Myjuooo from '../views/myjuooo'
import ShowsLibrary from '../views/showsLibrary'
import Tourshowinfo from '../views/tourshowinfo'
import Login from '../views/login'
// import Register from '../views/register'
import Showinfo from '../views/showinfo'
import Search from '../views/search'

export default[
	{
		path:"/",
		component:Jucheng,
		exact:true,
		isShow:true
	},
	{
		path:"/theatre",
		component:Theatre,
		isShow:true
	},
	{
		path:"eticket",
		component:Eticket,
		isShow:false
	},
	{
		path:"/myjuooo",
		component:Myjuooo,
		isShow:true
	},
	{
		path:"/login",
		component:Login,
		isShow:true
	},
	{
		path:"/search",
		component:Search,
		isShow:false
	},
	{
		path:"/showsLibrary",
		component:ShowsLibrary,
		isShow:false
	},
	{
		path:"/tourshowinfo",
		component:Tourshowinfo,
		isShow:false
	},
	{
		path:"/showinfo",
		component:Showinfo,
		isShow:false
	}
	
]