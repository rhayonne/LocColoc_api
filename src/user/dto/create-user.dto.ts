import { UserType } from './user-type.dto';
export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    type: UserType;
}
