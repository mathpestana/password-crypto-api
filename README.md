# Password Crypto API

Uma API utilitária que oferece funcionalidades para criptografia, validação e geração de senhas seguras.

## Descrição

Esta API fornece ferramentas para trabalhar com senhas de forma segura, incluindo:
- Criptografia de senhas usando diferentes algoritmos (bcrypt, SHA-256, MD5, AES)
- Validação de força de senhas com feedback detalhado
- Geração de senhas fortes e aleatórias com parâmetros configuráveis

## Rotas Disponíveis

### 1. Criptografar Senha
- **URL**: `/api/password/encrypt?password=suaSenha`
- **Método**: GET
- **Parâmetros**: `password` - A senha a ser criptografada
- **Resposta**: Diferentes representações criptografadas da senha

### 2. Validar Força da Senha
- **URL**: `/api/password/validate?password=suaSenha`
- **Método**: GET
- **Parâmetros**: `password` - A senha a ser validada
- **Resposta**: Pontuação de força, classificação e feedback para melhorias

### 3. Gerar Senha Aleatória
- **URL**: `/api/password/generate?length=12&numbers=true&symbols=true&uppercase=true&lowercase=true`
- **Método**: GET
- **Parâmetros**:
  - `length` (opcional) - Comprimento da senha (padrão: 12)
  - `numbers` (opcional) - Incluir números (padrão: true)
  - `symbols` (opcional) - Incluir símbolos (padrão: true)
  - `uppercase` (opcional) - Incluir letras maiúsculas (padrão: true)
  - `lowercase` (opcional) - Incluir letras minúsculas (padrão: true)
- **Resposta**: Senha gerada e sua avaliação de força

## Como instalar e executar

1. Clone o repositório
```bash
git clone https://github.com/mathpestana/password-crypto-api.git
cd password-crypto-api
```

2. Instale as dependências
```bash
npm install
```

3. Execute o servidor
```bash
npm start
```

4. Para executar em modo de desenvolvimento com reinicialização automática
```bash
npm run dev
```

## Tecnologias utilizadas

- Node.js
- Express
- bcrypt
- crypto-js
- generate-password

## Problema e Solução

Este projeto foi desenvolvido para resolver o problema da segurança de senhas, oferecendo ferramentas que ajudam desenvolvedores e usuários a:

1. **Entender criptografia de senhas**: Demonstrando diferentes algoritmos e suas aplicações
2. **Criar senhas seguras**: Tanto através da validação de senhas existentes quanto pela geração de novas senhas fortes
3. **Implementar boas práticas**: Encorajando o uso de algoritmos modernos e seguros para armazenamento de senhas

A solução implementada fornece uma API simples e direta que pode ser facilmente integrada em diversos projetos de software.

## Utilidade do Sistema

Este sistema pode ser utilizado em:
- Sistemas de autenticação
- Ferramentas de gerenciamento de senhas
- Aplicações educacionais sobre segurança cibernética
- Desenvolvimento de processos de registro de usuários seguros
- Análise e melhoria de senhas existentes

## Autor

Matheus Pestana