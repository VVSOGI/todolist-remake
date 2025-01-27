type UUID = string;

export interface Todo {
  id: UUID;
  categoryId: UUID;
  title: string;
  checked: boolean;
  createdAt: Date;
  updatedAt: Date;
  order: number;
}
