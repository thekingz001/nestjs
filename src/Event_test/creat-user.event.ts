export class CreateUserEvent {
    constructor(
      public readonly username: string,
      public readonly password: string,
      ) {}
  }  