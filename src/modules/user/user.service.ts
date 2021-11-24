import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserService {
  async getList() {
    const datas: User[] = [];

    if (datas.length <= 0) {
      const user1 = new User();
      user1.name = 'jasen';
      user1.code = '11111';
      const user2 = new User();
      user2.name = 'yang';
      user2.code = '2222';

      datas.push(user1);
      datas.push(user2);
    } else {
      const user3 = new User();
      user3.name = 'yangJx';
      user3.code = '3333';

      datas.push(user3);
    }

    return datas;
  }

  async getInfo(id: string) {
    if (_.isEmpty(id)) {
      throw new Error('undefined');
    }
    return { name: 'jasen', code: '11' };
  }

  async createUser(user: User) {
    user.name = 'jasen';
    return true;
  }
}
