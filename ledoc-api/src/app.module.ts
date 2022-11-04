import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { SigController } from './controllers/sig/sig.controller';
import { SigProvider } from './controllers/sig/sig.provider';
import { UserProvider } from './controllers/user/user.provider';
import { UserController } from './controllers/user/user.controller';

@Module({
    imports: [AuthenticationModule, UsersModule],
    controllers: [AppController, SigController, UserController],
    providers: [AppService, SigProvider, UserProvider],
})
export class AppModule { }
