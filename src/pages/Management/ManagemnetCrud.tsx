import axios from "axios";
import AuthService from "../../services/AuthService";


export const base_url="http://135.181.57.251:3680"

export function createUser(body:any){
  return axios.post(`${base_url}/user/agency/user/create`,body)
}
export function listUser(){
  return axios.get(`${base_url}/user/company/user/list/05b4d0c3-7e2d-407f-9b18-f3721731b096`)
}
