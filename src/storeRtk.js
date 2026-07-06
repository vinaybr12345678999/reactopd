// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
//   import tnxReducer from "./trnSlice"

// const storeRtk = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default storeRtk;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tnxReducer from "./trnSlice";

const storeRtk = configureStore({
  reducer: {
    user: userReducer,
    tnxs: tnxReducer,
  },
});

export default storeRtk;
