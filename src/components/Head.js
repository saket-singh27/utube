import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_SUGGESION } from '../utils/constants';


const Head = () => {
const dispatch = useDispatch();

  const toggleHam = ()=>{
    dispatch(toggleMenu())
  }
  const [searchQuery , setSearchQuery] = useState("");
  const [suggestion , setSuggestion] = useState([]);
  const [showSuggestion , setShowSuggestion] = useState(false);


  useEffect(()=>{
    const timer = setTimeout(()=>keySearch(),200);
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery]);

  const keySearch = async ()=>{
    const data = await fetch(SEARCH_SUGGESION + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1])
  }
  return (
    <div className='grid grid-flow-col p-4 pb-7 shadow-lg'>
        <div className='col-span-1 flex'>
                <img onClick={()=>{toggleHam()}} className="px-4 pt-1 h-7" alt="hamburger_icon" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC'/>
                <a href='/'><img className="h-8" alt="youtube_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/></a>
        </div>
        <div className='col-span-10 ml-28'>
        <div>
            <input 
            onChange={(e)=>setSearchQuery(e.target.value)} 
            value={searchQuery} 
            className="w-1/2 rounded-l-3xl p-1 border border-black px-2 pl-4" 
            type='search' 
            placeholder=' 🔍 Search'
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            />
            <button className='rounded-r-3xl border border-black p-1 px-4'>🔍</button>
        </div>
        {showSuggestion &&
        <div className='absolute z-10 bg-white w-[30rem] p-2 py-2 px-5 rounded-lg border-gray-200'>
          <ul>
            {suggestion.map(s=>
              <li className='py-1 shadow-sm hover:bg-gray-100'>🔍 {s}</li>)}
          </ul>
        </div>}
        </div>
        <div className='col-span-1 flex place-content-end'>
        <img className="h-7 px-2 pr-6" alt='theme_image' src='https://static-00.iconduck.com/assets.00/moon-icon-2048x2048-707lsx2m.png'/>
            <img className="h-7 px-2" alt='camcoder_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMcqUUS3W96jDn9iLgSwEaH_4cDvb_wLXog&usqp=CAU'/>
            <img className="h-7 px-2" alt="notification_img" src='data:image/png;base64,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'/>
            <img className="h-7 px-2 pr-6" alt='user_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBfwLirilBMO5kntBzXf6_8hdBswyEg2qVP8RQlvWsQ&s'/>
           
        </div>
    </div>
  )
}

export default Head;