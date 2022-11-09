import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './Event_test/creat-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    this.analytics.push({
      username: data.username,
      password: data.username,
      timestamp: new Date(),
    });
    console.log("Event adding Data");
    
  }

  getAnalytics() {
    return this.analytics;
  }
}
