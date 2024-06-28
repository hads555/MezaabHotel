// API endpoints
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