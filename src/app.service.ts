import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './Dto_test/creat-user.dto';
import { CreateUserEvent } from './Event_test/creat-user.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  
  createUser(createUserRequest: CreateUserDto) {
    const user_created = this.analyticsClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.username,createUserRequest.password),
    );
    // const user_created =  this.analyticsClient.send({ cmd: 'user_created' }, new CreateUserEvent(createUserRequest.username,createUserRequest.password));
    return user_created;
  }

  getAnalytics() {
    const get_analytics = this.analyticsClient.send({ cmd: 'get_analytics' }, {})
    return get_analytics;
  }
}
