# Descripción del proyecto

## Correr en dev

1. Clonar el repositorio
2. Renombrar el archivo `.env.template` a `.env`
3. Instalar dependencias con `npm install`
4. Levantar la base de datos con `docker-compose up -d`
5. Correr las migraciones con `npx prisma migrate dev`
6. Ejecutar el seed con `npm run seed`
7. Correr el proyecto con `npm run dev`
