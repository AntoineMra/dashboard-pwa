import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User, UserDto } from './user.model';



@Injectable()
export class UserService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                id: '1',
                email: 'admin@ledoc.com',
                username: 'ledoc',
                password: 'admin',
                role: 'admin'
            },
        ];
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    create(user: UserDto): User {
        const userCreated: User = {
            id: uuidv4(),
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role
        };
        this.users.push(userCreated);

        return userCreated;
    }
}
