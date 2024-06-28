import axios from "axios";
import AuthService from "../../services/AuthService";


export const base_url="http://135.181.57.251:3680"
export const createCompanyUrl=`${base_url}/user/company/create`;
export const getCompanyUrl=`${base_url}/user/company/find-all`;
export function createCompany(body:any){
  return axios.post(`${base_url}/user/company/create`,body)
}
export function getCompany(body:any){
    return axios.get(`${base_url}/user/company/find-all`)
  }
