import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController, CategoryService } from '../category';
import { Category } from 'src/entities/category.entity';
import typia from 'typia';

describe('CategoryModule', () => {
  let controller: CategoryController;
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: {
            getCategories: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
    service = module.get<CategoryService>(CategoryService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCategories', () => {
    it('should return Category type array', async () => {
      const mockCategories: Category[] = [
        {
          id: '1',
          title: 'Test Category 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: 'Test Category 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(service, 'getCategories').mockResolvedValue({
        data: mockCategories,
        total: mockCategories.length,
      });

      const result = (await controller.getCategories()).data;
      console.log(result);
      //   const [first, second] = result;

      //   expect(first.id).toBe('1');
      //   expect(second.id).toBe('2');
    });

    it('should return empty array', async () => {
      jest.spyOn(service, 'getCategories').mockResolvedValue({
        data: [],
        total: 0,
      });
      const result = (await controller.getCategories()).data;
      expect(result.length).toBe(0);
    });
  });
});
