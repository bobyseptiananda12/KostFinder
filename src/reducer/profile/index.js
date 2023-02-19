import { UPDATE_PROFILE } from "../../actions/ProfileAction";

const initialState = {
  updateProfileLoading: false,
  updateProfileResult: false,
  updateProfileError: false,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        updateProfileLoading: actions.payload.loading,
        updateProfileResult: actions.payload.data,
        updateProfileError: actions.payload.errorMessage,
      };
    default:
      return state;
  }
}
