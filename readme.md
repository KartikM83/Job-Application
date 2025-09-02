So firstly we create a folder structure 
1) API 
2) DTO 
3) entity 
4) exception 
5) repository 
6) service 
7) utility  

----

### ✅ 1. Entity Layer (entity folder)
This contains your database model.

Steps:
- Create a class for each table.

- Annotate with @Entity, @Table, etc.

- Add fields with @Id, @GeneratedValue, @Column, etc.

### ✅ 2. DTO Layer (dto folder)
DTOs are used to transfer data between frontend and backend.

Steps:
- Create DTO classes to accept/send data.

- Use them in controller/service instead of entities (for security and flexibility).