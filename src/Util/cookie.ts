import {Cookies} from 'react-cookie'

type SetcookieType = {
    name : string,
    value : string,
    options ? :any
}

const cookies = new Cookies();

export const setCookie = ({name,value,options } : SetcookieType)=>{
	return cookies.set(name, value, {...options})
}

export const getCookie = (name:string)=>{
	return cookies.get(name)
}