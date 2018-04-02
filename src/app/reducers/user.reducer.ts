import * as  UserActions from '@actions/users.actions';

export type Action = UserActions.All;

const defaultState = {
  user: null
};

export function userReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case UserActions.LOGGED_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
