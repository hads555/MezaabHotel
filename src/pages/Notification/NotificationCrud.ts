import axios from "axios";
import AuthService from "../../services/AuthService";


export const Email_Template = "http://8.213.34.246:3010/email_template";
export const Sms_Template="http://8.213.34.246:3010/sms_template";
export const Push_Template="http://8.213.34.246:3010/push_template"
export function getAllEmails() {
  return axios.get(`${Email_Template}/find-all`);
}
export function getAllSms(){
  return axios.get(`${Sms_Template}/find-all`)
}
export function getAllPush(){
  return axios.get(`${Push_Template}/find-all`)
}
export function createPushNotification(body:any){
  return axios.post(`${Push_Template}/create`,body)
}
export function updatePushNotification(body:any){
  return axios.patch(`${Push_Template}/update`,body)
}
export function getPushChangeStatus(body:any){
  return axios.patch(`${Push_Template}/update-status`,body)
}
export function findOne(id:any){
  return axios.get(`${Push_Template}/get-one/${id}`)
}