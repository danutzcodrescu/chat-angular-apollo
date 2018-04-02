import { Action } from '@ngrx/store';

export const LOGGED_USER = '[USER] LOGGED_USER';
export const ALL_USERS = '[USER] ALL_USERS';

export class LoggedUser implements Action {
  readonly type = LOGGED_USER;

  constructor(public payload: any) { }
}

export class AllUsers implements Action {
  readonly type = ALL_USERS;

  constructor(public payload: any) { }
}

export type All
  = LoggedUser | AllUsers;
