
import axios from "axios";
export function groupFlight() {
    return axios.get(`http://192.168.6.39:3000/group-flight`);
  }
  export function groupFlightById(id:any) {
    return axios.get(`http://192.168.6.39:3000/group-flight/${id}`);
  }
  export function createGroupFlight(body:any) {
    return axios.post("http://192.168.6.39:3000/group-flight",body);
  }
  export function createFlightDeparture(body:any) {
    return axios.post("http://192.168.6.39:3000/flight",body);
  }
import AuthService from "../../services/AuthService";
const base_url = "http://192.168.6.39:3000";
export const postPropertUrl=`${base_url}/hotel`
export const postAddressUrl=`${base_url}/address`
export const postRoomUrl=`${base_url}/room`
export const postPriceUrl=`${base_url}/price`
export function allHotels() {
  return axios.get(`${base_url}/hotel`);
}
export function propertyDetail(id:any) {
  return axios.get(`${base_url}/hotel/${id}`);
}
