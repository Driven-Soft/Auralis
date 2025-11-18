# 🔥 Auralis - ```Global Solution 2025/2```

Projeto Front-end da disciplina Front-End Design Engineering — implementado com **React + Vite + TypeScript**.

## 1. ✨ Título e Descrição

### 🌟 Auralis

Auralis é uma aplicação web responsiva para registro e acompanhamento de hábitos diários com foco em bem-estar. O sistema permite registrar dados como hidratação, sono, nível de estresse, exposição ao sol, tempo de tela, horas trabalhadas e atividade física. A partir desses dados, a aplicação calcula um Score de Bem-Estar (0–100) e oferece visualizações (gráficos) para acompanhamento da evolução.

### 🌐 Link do Repositório:
> ##### https://github.com/Driven-Soft/Auralis

## 2. 🚀 Status do Projeto

- Frontend: implementado com componentes, rotas e integração com API via `fetch`.
- API (backend Java): https://auralis-api.onrender.com (valor usado no `ApiProvider`).
- Deploy do frontend: https://auralis-gs.vercel.app/ (ver seção **Como Usar**).

## 3. 📖 Sumário

> 1. Título e Descrição
> 2. Status do Projeto
> 3. Sumário
> 4. Sobre o Projeto
> 5. Tecnologias Utilizadas
> 6. Instalação
> 7. Como Usar
> 8. Estrutura de Pastas
> 9. Endpoints ou Rotas Principais
> 10. Autores e Créditos
> 11. Screenshots / Demonstração
> 12. Contato

## 4. ❗ Sobre o Projeto

📌 Auralis é uma plataforma moderna e intuitiva criada para ajudar pessoas a acompanharem seus hábitos diários e entenderem melhor o impacto deles em sua saúde e bem-estar. A solução oferece uma forma simples e objetiva de registrar informações essenciais da rotina, como hidratação, horas de sono, nível de estresse, tempo de exposição ao sol, tempo de tela, horas trabalhadas e atividade física.

🧭 Com base nesses dados, o sistema calcula automaticamente um Score de Bem-Estar (0 a 100) utilizando uma fórmula estruturada e equilibrada. Esse score funciona como um indicador diário da qualidade da rotina do usuário, facilitando a identificação de dias mais saudáveis ou mais desgastantes.

🌟 O grande diferencial do Auralis está em suas visualizações gráficas detalhadas, que permitem ao usuário acompanhar sua evolução ao longo dos dias. A aplicação apresenta gráficos claros e responsivos que destacam padrões, tendências e comparações entre os hábitos registrados, tornando a análise muito mais intuitiva. Dessa forma, o usuário consegue perceber rapidamente quais comportamentos estão contribuindo positivamente para sua saúde e quais precisam de mais atenção.

🛠️ Toda a interface foi construída utilizando React + TypeScript + Tailwind, garantindo um design moderno, responsivo e agradável. No backend, a aplicação utiliza Java (Quarkus) integrado a um banco OracleDB, seguindo uma arquitetura organizada em camadas (model, repository, business, resource) que facilita manutenção, clareza e escalabilidade.

## 5. 🛠️ Tecnologias Utilizadas

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons (`lucide-react`)
- Recharts (gráficos)

## 6. 🗺️ Instalação

Pré-requisitos: `node` (v16+ recomendado) e `npm`.

Clone o repositório do Github:
```powershell
git clone https://github.com/Driven-Soft/Auralis.git
```

Acesse a pasta baixada e instale as dependências com:

```powershell
npm install
```

Executar em modo desenvolvimento:

```powershell
npm run dev
```

Build de produção:

```powershell
npm run build
```

Pré-visualizar build localmente:

```powershell
npm run preview
```

## 7. 🧭 Como Usar

#### Acesse a aplicação publicada na ```Vercel```:
> https://auralis-gs.vercel.app/

#### A aplicação consome a API criada com Java hospedada no ```Render```:
> https://auralis-api.onrender.com/

**Para usar a aplicação**, use a conta já criada para visualizar uma conta com dados já feitos, ainda que é possível criar uma nova.

 Depois de ter feito o login no Home, você será redirecionado ao Dashboard onde verá dados de registros e poderá realizar novos registros diariamente para acompanhar dados relacionados ao seu bem-estar.
 
 **❗ É comum que o Login demore pois a API é derrubada após 15 minutos de inatividade, demorando aproximadamente 20-30 segundos pra subir novamente ao ocorrer uma requisição nova.**
<hr>

* ### Conta mockup para teste/visualização do sistema:
**LOGIN: `felipe@exemplo.com`**

**SENHA: `123456`**

<hr>

## 8. 📁 Estrutura de Pastas

Estrutura resumida do projeto:

- `src/`
  - `components/` — componentes reutilizáveis
  - `context/` — Providers (Api, Theme, User)
  - `data/` — dados estáticos (ex.: dados de integrantes)
  - `routes/` — páginas/rotas da aplicação
  - `assets/` — imagens e ícones
  - `types/` — definições TypeScript

Arquivos principais de configuração: `vite.config.ts`, `tsconfig.json`, `package.json`.

## 9. 🗺️ Endpoints ou Rotas Principais

### Rotas da interface:

- `/` — Home (Landing page sem login feito — com área para Login)
- `/cadastro` — Formulário de cadastro de usuários
- `/integrantes` — Lista de integrantes
- `/integrantes/:rm` — Detalhe do integrante (RM como parâmetro)
- `/dicas` — Dicas de saúde gerais para informar o usuário
- `/sobre` — Sobre o projeto
- `/faq` — Perguntas frequentes
- `/dashboard` — Área com métricas (Landing page autenticada)
- `/contato` — Contato fictício com Auralis + redirect pra contato com Integrantes
- `/notificacoes` — Usuário poderá se inscrever para receber notificações (Email/Whatsapp)
- `/feedback` — Permite que o usuário envie feedbacks relacionados ao site
- `/... (ErrorPage)` — Landing page caso haja problema de redirecionamento/URL errada

### API — Endpoints consumidos:
> **apiUrl = `https://auralis-api.onrender.com/`**

- **Cadastro.tsx**:
    - **Endpoint**: `POST ${apiUrl}usuarios`
    - **Descrição:** *Envia os dados de cadastro para criar um novo usuário.*
- **UserProvider.tsx**:
    - **Endpoint**: `POST ${apiUrl}usuarios/login`
    - **Descrição:** *Envia os dados de login e retorna as informações da tabela usuários (autenticação simples).*
- **Notificacoes.tsx**:
    - **Endpoint**: `POST ${apiUrl}inscricoes`
    - **Endpoint**: `PUT ${apiUrl}inscricoes/${user?.id_usuario}`
    - **Descrição:** *POST inscreve o ID do usuário na tabela de notificações, PUT altera o estado da inscrição como Ativo 'A' ou Inativo 'I'.* 
- **Feedback.tsx**:
    - **Endpoint**: `POST ${apiUrl}feedbacks`
    - **Descrição:** *Envia o feedback do usuário.*
- **Dashboard.tsx**:
    - **Endpoint**: `GET ${apiUrl}registros/usuario/${userId}/semana`
    - **Descrição:** *Retorna os últimos 7 registros do usuário pro gráfico.*
- **RegistroModal.tsx**:
    - **Endpoint**: `POST ${apiUrl}registros`
    - **Endpoint**: `DELETE ${apiUrl}registros/${recordId}`
    - **Descrição:** *POST envia registros, DELETE deleta o registro baseado no ID devolvido do POST.*

A `apiUrl` é definida em `src/context/Api/ApiProvider.tsx`.

## 10. 👥 Autores e Créditos

- #### Felipe Bezerra Beatrici — RM: 564723 — 1TDSPK <br> GitHub: https://github.com/FelipeBeatriz <br> LinkedIn: https://www.linkedin.com/in/felipe-beatrici/<br> Email: `felipe.beatriz199@gmail.com`

- #### Max Hayashi Batista — RM: 563717 — 1TDSPK <br> GitHub: https://github.com/y3llowhusky <br> LinkedIn: https://www.linkedin.com/in/max-hayashi-batista-572622356/<br> Email: `hayashibatista@gmail.com`

- #### Henrique Cunha Torres — RM: 565119 — 1TDSPK <br> GitHub: https://github.com/HenriqueCTorres <br> LinkedIn: https://www.linkedin.com/in/henrich1/ <br> Email: `henriquect08@gmail.com`

## 11. 📽️ Screenshots / Demonstração

### Link do vídeo no Youtube:

> #### https://youtu.be/-SazkAV5Uns

### Screenshots:

* ##### ```Página Home antes de fazer Login:```

![Home](/public/screenshots/home.png)

* ##### ```Visualização do Dashboard:```

![Dashboard](/public/screenshots/dashboard.png)

![Dashboard](/public/screenshots/dashboard_2.png)

* ##### ```Novo registro no Dashboard:```

![Registro](/public/screenshots/novo_registro.png)

* ##### ```Página de dicas de saúde:```

![Dicas](/public/screenshots/dicas.png)

* ##### ```Página de integrantes:```

![Integrantes](/public/screenshots/integrantes.png)


## 12. 👥 Contato

- #### Felipe Bezerra Beatrici — RM: 564723 — 1TDSPK <br> GitHub: https://github.com/FelipeBeatriz <br> LinkedIn: https://www.linkedin.com/in/felipe-beatrici/<br> Email: `felipe.beatriz199@gmail.com`

![Felipe](/src/assets/images/photos/felipe.png)

<hr>

- #### Max Hayashi Batista — RM: 563717 — 1TDSPK <br> GitHub: https://github.com/y3llowhusky <br> LinkedIn: https://www.linkedin.com/in/max-hayashi-batista-572622356/<br> Email: `hayashibatista@gmail.com`

![Max](/src/assets/images/photos/max.png)

<hr>

- #### Henrique Cunha Torres — RM: 565119 — 1TDSPK <br> GitHub: https://github.com/HenriqueCTorres <br> LinkedIn: https://www.linkedin.com/in/henrich1/ <br> Email: `henriquect08@gmail.com`

![Henrique](/src/assets/images/photos/henrique.png)