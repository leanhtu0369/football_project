import { configureStore } from "@reduxjs/toolkit";
import idCompetitionReducer from "./state/valueAllow";


export default configureStore({
  reducer : {
    idCompetition : idCompetitionReducer
  }
})
