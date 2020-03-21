import {
  URL_CHANGED,
  ROUTE_CHANGED,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGNING_OUT,
  SIGN_IN_EMAIL_CHANGED,
  SIGN_IN_PASSWORD_CHANGED,
  CLEAR_SIGN_IN_FIELD,
  REGISTER_FNAME_CHANGED,
  REGISTER_LNAME_CHANGED,
  REGISTER_EMAIL_CHANGED,
  CLEAR_REGISTER_FIELD,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_PASSWORD_CHANGED,
  REGISTER_CONFIRM_PASS_CHANGED,
  CALCULATING_FACES_PENDING,
  CALCULATING_FACES_SUCCESS,
  CALCULATING_FACES_FAILED,
  UPDATE_ENTRIES,
  RESET_URL,
  RESET_FACE_BOXES,
  CLEAR_SIGN_IN_ERROR,
  CLEAR_REGISTER_ERROR
} from "./constants.js";

const initialRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: ""
};

export const register = (state = initialRegister, action = {}) => {
  switch (action.type) {
    case REGISTER_FNAME_CHANGED:
      return Object.assign({}, state, {
        firstName: action.payload
      });
    case REGISTER_LNAME_CHANGED:
      return Object.assign({}, state, {
        lastName: action.payload
      });
    case REGISTER_EMAIL_CHANGED:
      return Object.assign({}, state, {
        email: action.payload
      });
    case REGISTER_PASSWORD_CHANGED:
      return Object.assign({}, state, {
        password: action.payload
      });

    case REGISTER_CONFIRM_PASS_CHANGED:
      return Object.assign({}, state, {
        confirmPass: action.payload
      });

    case CLEAR_REGISTER_FIELD:
      return Object.assign({}, state, initialRegister);
    default:
      return state;
  }
};

const initialSignIn = {
  email: "",
  password: ""
};

export const signIn = (state = initialSignIn, action = {}) => {
  switch (action.type) {
    case SIGN_IN_EMAIL_CHANGED:
      return Object.assign({}, state, {
        email: action.payload
      });
    case SIGN_IN_PASSWORD_CHANGED:
      return Object.assign({}, state, {
        password: action.payload
      });
    case CLEAR_SIGN_IN_FIELD:
      return Object.assign({}, state, initialSignIn);
    default:
      return state;
  }
};

const initialState = {
  route: "signin",
  isSignedIn: false,
  signInFailed: "",
  registerFailed: "",
  userProfile: {}
};

export const userDefaults = (state = initialState, action = {}) => {
  switch (action.type) {
    case ROUTE_CHANGED:
      return Object.assign({}, state, {
        route: action.payload
      });

    case CLEAR_SIGN_IN_ERROR:
      return Object.assign({}, state, {
        signInFailed: ""
      });

    case CLEAR_REGISTER_ERROR:
      return Object.assign({}, state, {
        registerFailed: ""
      });

    case SIGNING_OUT:
      return Object.assign({}, state, initialState);

    case SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        signInFailed: "",
        registerFailed: "",
        isSignedIn: true,
        route: action.payload,
        userProfile: action.userData
      });

    case SIGN_IN_FAILED:
      return Object.assign({}, state, {
        signInFailed: action.payload
      });

    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isSignedIn: true,
        route: action.payload,
        signInFailed: "",
        registerFailed: "",
        userProfile: action.userData
      });

    case REGISTER_FAILED:
      return Object.assign({}, state, {
        registerFailed: action.payload
      });

    case UPDATE_ENTRIES:
      // make sure we dont overwrite existing userProfile object
      return Object.assign({}, state, {
        userProfile: {
          ...state.userProfile,
          entries: action.payload
        }
      });

    default:
      return state;
  }
};

const initialUrlField = {
  imageUrl: ""
};

export const urlField = (state = initialUrlField, action = {}) => {
  switch (action.type) {
    case RESET_URL:
      return Object.assign({}, state, initialUrlField);

    case URL_CHANGED:
      return Object.assign({}, state, {
        imageUrl: action.payload
      });

    default:
      return state;
  }
};

const initialImageBox = {
  submittedUrl: "",
  box: [{}],
  isPending: false,
  error: ""
};

export const faceBoxes = (state = initialImageBox, action = {}) => {
  switch (action.type) {
    case RESET_FACE_BOXES:
      return Object.assign({}, state, initialImageBox);

    case CALCULATING_FACES_PENDING:
      return Object.assign({}, state, {
        isPending: true,
        submittedUrl: action.payload,
        error: ""
      });

    case CALCULATING_FACES_SUCCESS:
      return Object.assign({}, state, {
        box: action.payload,
        isPending: false
      });

    case CALCULATING_FACES_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        box: [{}],
        isPending: false
      });

    default:
      return state;
  }
};