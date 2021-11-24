import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import axios from 'axios';

describe('RoleController', () => {
  let controller: RoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
    }).compile();

    controller = module.get<RoleController>(RoleController);
  });

  it('RoleController should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('RoleController  mock requestData', () => {
    jest.mock('axios');
    //  axios.get.mockResolvedValue();
  });
});
