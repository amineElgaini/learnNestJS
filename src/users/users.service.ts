import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
    return ['Amine', 'Ali', 'Sara'];
  }
}
