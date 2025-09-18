export interface UserJson {
    id: number;
    email: string;
    phone: string;
    user_type: string;
    full_name: string;
    owns_company: boolean;
    cnic: string;
    auth_user_id: string;
}


class User {
    private readonly _id: number
    private readonly _email: string
    private readonly _phone: string
    private readonly _ownsCompany: boolean
    private readonly _cnic: string
    private readonly _authUserId: string
    private readonly _userType: string
    private readonly _fullName: string

    get id(){
        return this._id
    }

    get email(){
        return this._email
    }

    get phone(){
        return this._phone
    }

    get ownsCompany(){
        return this._ownsCompany
    }

    get cnic(){
        return this._cnic
    }

    get authUserId(){
        return this._authUserId
    }

    get userType(){
        return this._userType
    }

    get fullName(){
        return this._fullName
    }

    constructor(json: UserJson) {
        this._id = json.id
        this._email = json.email
        this._phone = json.phone
        this._ownsCompany = json.owns_company
        this._cnic = json.cnic
        this._authUserId = json.auth_user_id
        this._fullName = json.full_name
        this._userType = json.user_type
    }

}


export default User