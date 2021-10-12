import { UserPublicModel } from "./UserPublicModel";

export class UserDetailModel{
    
    users: UserPublicModel[]

    constructor(users: UserPublicModel[]){
            this.users = users;            
    }
}