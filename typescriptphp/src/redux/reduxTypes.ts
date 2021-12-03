
export enum ActionTypes 
{
    INIT= "INIT",
    CLEAR="CLEAR"
}

export interface UserState 
{
    access_token: string,
    user: Object | null
}

export interface InitUser 
{
    type: ActionTypes.INIT,
    payload: UserState
}

export interface ClearUser 
{
    type: ActionTypes.CLEAR,
}

export type UserActions = InitUser | ClearUser;