import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/users/user.model';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserProvider {
    users: any[] = [
        {
            id: '1',
            email: 'user@ledoc.com',
            username: 'ledoc',
            password: 'user',
            role: 'user'
        },
        {
            id: '2',
            email: 'admin@ledoc.com',
            username: 'ledoc',
            password: 'admin',
            role: 'admin'
        },
        {
            id: '3',
            email: 'superadmin@ledoc.com',
            username: 'ledoc',
            password: 'superadmin',
            role: 'superadmin'
        },
        
    ];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(){}

    getUsers(query): User[]{
        const users = !!query ? this.users.filter(user => query.includes(user.type)) : this.users;
        return users.map(user => this.getUser(user.id));
    }

    getUser(id: string): User {
        return {...this.users.find(user => user.id === id)};
    }
}
