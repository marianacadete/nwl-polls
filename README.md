# NLW-expert-polls

Este projeto é resultado da participação no evento Next Level Week (NLW) da Rocketseat, onde o foco foi a implementação de um sistema de votação em tempo real. A estrutura é fundamentada em uma API Node.js desenvolvida em TypeScript, utilizando o framework Fastify para a criação do servidor, e a validação de dados é realizada por meio do Zod. Para o cadastro de enquetes, foi adotado o banco de dados PostgreSQL, enquanto o armazenamento dos votos é gerenciado pelo Redis.



Tecnologias utilizadas:

Node.js
TypeScript
Fastify
Zod
PostgreSQL
Redis
Prisma
Docker
WebSocket
Pub/Sub


Funcionalidades:

Cadastro de enquetes
Votação em tempo real
Atualização de votos em tempo real utilizando WebSocket e Pub/Sub
Armazenamento seguro de dados utilizando PostgreSQL e Redis
Utilização de ORM para interação com os bancos de dados através do Prisma



Configuração:
1. Clone o repositório
2. Navegue até o diretório do projeto: cd websocket-nlw
3. Instale as dependências: npm install
4. Para .env preencha as credenciais do PostgreSQL.
5. Execute o Docker Compose para inicializar os bancos de dados: docker-compose up -d
6. Execute as migrations do Prisma para criar as tabelas no PostgreSQL: npx prisma migrate dev
7. Inicie o servidor: npm run dev
