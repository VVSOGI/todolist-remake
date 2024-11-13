## server

1. End points

   - Category: **/category**
     - Create category: **POST** /category
     - Get categories: **GET** /category
     - Get category by id: **GET** /category/:categoryId
     - Update category: **PATCH** /category/:categoryId
     - Delete category: **DELETE** /category/:categoryId
   - Todolist: **/todolist**
     - Create todo: **POST** /todolist
     - Get todo's: **GET** /todolist
     - Get todo's by categoryId: **GET** /todolist/:categoryId
     - Get todo's by dates: **GET** /todolist/dates/:categoryId
     - Update todo: **PATCH** /todolist
     - Update todo's order: **PATCH** /todolist/order

2. Use specs
   - NestJS
   - Typia
   - Jest
   - PostgreSQL
   - Typeorm

### Server testing in progress

<img width="633" alt="스크린샷 2024-11-12 오후 7 01 09" src="https://github.com/user-attachments/assets/b7199bdc-7669-45be-ab4b-98e347053930">

## client

1. Routing

   - MAIN: **/**
     - get categories
     - create category
     - categories of todolist
   - TODOLIST: **/:categoryId**
     - get todo's
     - create todo
     - complete todo
     - update todo title
     - update todo's order
     - move storage page that contain completed todo's
   - STORAGE: **/storage/:todolistId**
     - get completed todo's by dates

2. API routing

   - Category
     - Get categories: **GET** /api/category
     - Create category: **POST** /api/category
     - Get category by id: **GET** /api/category/:categoryId
     - Update category by id: **PATCH** /api/category/:categoryId
     - Delete category by id: **DELETE** /api/category/:categoryId
   - Todolist
     - Get todo's list by category Id: **GET** /api/todolist/:categoryId
     - Create todo: **POST** /api/todolist
     - Update todo: **PATCH** /api/todolist
     - Get todo's list by dates: **GET** /api/todolist/dates/:categoryId
     - Update todo's order: **PATCH** /api/todolist/order

3. Use specs
   - NextJS
   - Styled-components
   - dnd-kit
