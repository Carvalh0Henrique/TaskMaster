# 📋 TaskMaster

**TaskMaster** é um sistema simples de gerenciamento de tarefas, desenvolvido como o **primeiro projeto utilizando Angular** e Bootstrap. Com ele, é possível adicionar, visualizar, editar e excluir tarefas de forma prática, mantendo a organização do dia a dia.

---

## 🚀 Tecnologias Utilizadas

- [Angular](https://angular.io/) (v19.2.10) – Framework para construção da aplicação
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/) – Para estilização rápida e responsiva
- HTML e CSS

---

## 🎯 Funcionalidades Implementadas

- ✅ Cadastro de novas tarefas com título e descrição
- ✅ Edição de tarefas existentes
- ✅ Exclusão com confirmação
- ✅ Reorganização automática dos IDs após exclusão
- ✅ Exibição das últimas tarefas cadastradas
- ✅ Feedback visual após ações (mensagens de sucesso)
- ✅ Validação de formulário com alertas amigáveis
- ✅ Uso de rotas para navegação entre as páginas

---

## 🧠 Conceitos Praticados

Durante o desenvolvimento do projeto, foram aplicados diversos conceitos fundamentais do Angular:

- 🧩 **Componentização**: separação clara entre tela de listagem e formulário
- 🔁 **Data Binding e Event Binding**: comunicação entre template e lógica
- 🗺️ **Rotas**: navegação entre páginas com `RouterModule`
- 📦 **Serviços (Services)**: centralização da lógica de dados
- 💾 **Formulários Reativos**: uso de `FormGroup` e `Validators`
- 📚 **Organização de estrutura de pastas e módulos**

---

## 📸 Demonstração

![TaskMaster Screenshot](link-para-screenshot-ou-gif.gif)

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── list/        # Lista de tarefas
│   │   └── task-form/   # Formulário de cadastro/edição
│   ├── services/        # Serviço de tarefas
│   ├── models/          # Interface Task
│   ├── pages/           # Páginas e navegação
│   └── app-routing.module.ts
```

---

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Carvalh0Henrique/TaskMaster.git
   cd TaskMaster
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse:
   ```
   http://localhost:4200
   ```

---

## 💡 Melhorias Futuras

- Integração com LocalStorage ou API real
- Filtro por título e status
- Responsividade avançada
- Autenticação de usuário

---

## ✍️ Autor

Desenvolvido por **Henrique Carvalho** como primeiro projeto com Angular.

🔗 GitHub: [@Carvalh0Henrique](https://github.com/Carvalh0Henrique)
