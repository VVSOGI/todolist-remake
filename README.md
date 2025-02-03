# Free Todolist

A full-stack todo list application designed for practice, focusing on improving architectural skills and testing various design patterns (container-presenter, layered ...) in both frontend and backend development.

## [Backend (Server)](https://github.com/VVSOGI/todolist-remake/blob/main/packages/server/README.md)

### Tech-Stack

- Nestjs
- PostgreSQL
- TypeORM
- Typia
- Jest

### API Endpoints

#### Category Endpoints (`/category`)

- `POST /category` - Create new category
- `GET /category` - Retrieve all categories
- `GET /category/:categoryId` - Retrieve specific category
- `PATCH /category/:categoryId` - Update category
- `DELETE /category/:categoryId` - Delete category

#### Todo List Endpoints (`/todolist`)

- `POST /todolist` - Create new todo
- `GET /todolist` - Retrieve all todos
- `GET /todolist/:categoryId` - Retrieve todos by category
- `GET /todolist/dates/:categoryId` - Retrieve todos by dates
- `PATCH /todolist` - Update todo
- `PATCH /todolist/order` - Update todos order

### Documentation

Detailed UML flow diagrams are available for both modules:

- [Category Flow Documentation](https://github.com/VVSOGI/todolist-remake/blob/main/packages/server/docs/category/category.md)
- [Todolist Flow Documentation](https://github.com/VVSOGI/todolist-remake/blob/main/packages/server/docs/todolist/todolist.md)

### Testing

<img width="778" alt="스크린샷 2024-11-20 오후 11 54 19" src="https://github.com/user-attachments/assets/561a9522-8fd9-4e6c-9e9a-ac3907bee970">

## [Frontend (Client)](https://github.com/VVSOGI/todolist-remake/blob/main/packages/client/README.md)

### Tech-Stack

- Nextjs
- Tailwind CSS
- dnd-kit

#### Main Features

1. Category Management (`/category`)

   - CategoryDisplay component for category management
   - Custom hooks for category state management

2. Todo List Management (`/todolist/[categoryId]`)

   - TodolistDisplay component for todolist management
   - Custom hooks:
     - useTodolistManage for todo management
     - useTodolistModal for modal interactions

3. Storage Feature (`/storage/[id]`)
   - StorageListDisplay component for showing display
   - Completed todos organization by date

### Page Routes

- `/category`
  - Category management
  - Todolist overview
  - Category creation, delete, update
- `/todolist/:categoryId`
  - Todo management
  - Todo completion
  - Order management
  - Storage access
- `/storage/:todolistId` (Storage)
  - View completed todos by date

## [Storybook (Stories)](https://github.com/VVSOGI/todolist-remake/blob/main/packages/stories/README.md)

### Tech-Stack

- Nextjs
- Storybook
- ~~Styled-components~~ Tailwind CSS
- @vvsogi/ui-components

### Main Features

1. Design System
2. Example

- Cateogry
  - Pages
  - Categories
  - CategoryItem
  - CreateCategory
- Common
  - Button
  - Modal
  - Title
  - Use Cases
- Storage
  - Pages
  - StorageHeader
  - StorageList
- Todolist
  - Pages
  - DraggableTodolist
  - TodoItem
  - TodolistHeader
  - TodolistSection

Storybook testing is complete for all page components. We are currently using styled-components, which will be replaced with the introduction of the ui-components package.

## [Ui-components](https://github.com/VVSOGI/todolist-remake/blob/main/packages/ui-components/README.md)

This package is a collection of purely presentational components stripped of business logic. This library is intended to be useful for use in other packages as well, as it is purely UI semantic.

### Tech-Stack

- Nextjs
- Tailwind CSS
- dnd-kit

### How to use

1. yarn add @vvsogi/ui-components
2. Must have add this line to next.config.mjs "transpilePackages: ['@vvsogi/ui-components']" because transpile typescript in '@vvsogi/ui-components' packages
3. Must have add this line to tailwind.config.js "content: ['./node_modules/@vvsogi/ui-components/app/**/*.{js,jsx,ts,tsx}'] because add css bundle tailwind in ui-components to client tailwind css
4. use like this "import { CreateCategory } from '@vvsogi/ui-components/app'"
