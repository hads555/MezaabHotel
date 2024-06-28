import axios from "axios";
import AuthService from "../../services/AuthService";


export const base_url="http://135.181.57.251:3680"

export function createUser(body:any){
  return axios.post(`${base_url}/user/agency/user/create`,body)
}
