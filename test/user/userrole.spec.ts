import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from 'src/modules/user/user.controller';
import { UserService } from 'src/modules/user/user.service';
import { User } from '../../src/entities/user.entity';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('base method', () => {
    it('getList', async () => {
      const result = await controller.getList();
      expect(result.length).toEqual(2);
    });

    it('getInfo', async () => {
      const result = await controller.getInfo('1111');
      expect(result.name).toEqual('jasen');
    });

    it('createInfo', async () => {
      const user: any = { name: '111', code: '223' };
      const result = await controller.createUser(user);
      expect(result).toEqual(true);
    });
  });
});
