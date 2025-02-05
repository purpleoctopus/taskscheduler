import { Employee } from "./employee.model";

export interface UserDTO{
    id: string,
    username: string,
    email: string,
    employee: Employee
}