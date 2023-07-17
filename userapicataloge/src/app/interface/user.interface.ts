import {Coordinate} from './coordinate.interface.ts'
export interface User {
    uuid: string,
    firstname: string,
    lastname: string,
    email: string,
    username: string,
    gender: string,
    address: string,
    dateOfBirth: string,
    phone: string,
    imgUrl: string,
    coordinate: Coordinate

}