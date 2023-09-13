export interface PublicUser {
    id: number
    furwazId: number
    pseudo: string
}

export interface PrivateUser extends PublicUser {
    token: string
}
