import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApisState } from "./apisInterface";

const initialState: ApisState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  user: {},
  message: "",
  theme: {},
  dashboardStructure: {},
  compilanceDashboard: {},
  actionBoard: [],
  notificationStructure: {},
  toggled: false,
  subscribeData:{},
  product:false,
  business:false,
  payment:false,
  password:false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initiateRequest: (state: any) => {
      state.isLoading = true;
    },
    setTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
    setUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload;
      localStorage.setItem('user', action.payload);
      localStorage.setItem('authToken', JSON.stringify(action?.payload?.authToken));
    },
    setDashboardStructure: (state, action) => {
      state.dashboardStructure = action.payload.data;
    },
    setCompilanceDashboard: (state, action) => {
      state.compilanceDashboard = action.payload.compilanceData;
    },
    setSubscriptionData: (state, action) => {
      state.subscribeData = action.payload.data;
    },
    setProduct: (state, action) => {
      state.product = action.payload.product;
    },
    setPayment: (state, action) => {
      state.payment = action.payload.payment;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
    setBusiness: (state, action) => {
      state.business = action.payload.business;
    },
    setActionBoard: (state, action) => {
      state.actionBoard = action.payload.actionBoard;
    },
    setNotificationStructure: (state, action) => {
      state.notificationStructure = action.payload.notificationStructure;
    },
    toggleSidebar: (state) => {
      state.toggled = !state.toggled;
    },
    catchError: (state: any, action: PayloadAction<any>) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
  },
});

export const {
  setUser,
  catchError,
  toggleSidebar,
  initiateRequest,
  setTheme,
  setDashboardStructure,
  setSubscriptionData,setProduct,setBusiness,setPassword
} = authSlice.actions;

export default authSlice.reducer;
