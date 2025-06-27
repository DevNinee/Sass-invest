# Sass-invest

#  SaaS InvestSim – Plataforma de Simulação e Comparação de Investimentos

**SaaS InvestSim** é uma aplicação web interativa desenvolvida em **HTML + JavaScript**, com funcionalidades avançadas para simular, comparar e monitorar investimentos. Ideal para investidores iniciantes ou entusiastas do mercado financeiro.

---

##  Funcionalidades Principais

 **Simulador de Investimentos**  
- Insira valor inicial, taxa de juros anual e tempo (anos).  
- Calcule o montante final com base em **juros compostos**.

 **Histórico de Simulações**  
- Armazena automaticamente cada simulação no **localStorage**.  
- Exibe a lista completa na interface.  
- Permite limpar ou exportar o histórico.

 **Comparador de Investimentos**  
- Compare a performance de **renda fixa x renda variável**.  
- Resultados lado a lado com base no valor investido e tempo.

 **Exportação de Relatórios em PDF**  
- Gere relatórios personalizados com o **jsPDF** direto do navegador.

 **Painel Administrativo**  
- Exibe número total de simulações.  
- Mostra usuários cadastrados.  
- Atualizado em tempo real com base nos dados do navegador.

---

##  Funcionalidades Avançadas

 **Cadastro e Login de Usuários**  
- Interface simples para criação de usuários.  
- Login com email e senha armazenado no navegador.

 **Integração com API de Mercado Financeiro**  
- Consulta em tempo real do câmbio **USD/BRL** via [exchangerate.host](https://exchangerate.host/).

 **Alerta de Mercado**  
- Configuração de limite para câmbio: receba alerta se o dólar ultrapassar o valor definido.

---

##  Tecnologias Utilizadas

| Tecnologia        | Uso                                 |
|-------------------|--------------------------------------|
| HTML/CSS          | Estrutura e layout da interface      |
| JavaScript        | Lógica da aplicação e interatividade |
| jsPDF             | Exportação de relatórios em PDF      |
| localStorage      | Armazenamento de dados no navegador  |
| API exchangerate  | Dados de câmbio em tempo real        |

---
``` Estrutura de Arquivos

📁 /investsim
├── index.html
├── simulador.js
├── comparador.js
├── auth.js
├── admin.js
├── style.css
└── README.md

yaml

---

## 🔧 Como Usar

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/investsim.git
Abra o arquivo index.html em qualquer navegador moderno.

Use o simulador, faça comparações, exporte relatórios e gerencie o painel.

 Publicar Online
Recomenda-se usar plataformas como:

Vercel

Netlify

GitHub Pages

  Recursos Futuros
Gráficos interativos com Chart.js

Backend com Node.js + MongoDB

Sistema de autenticação com JWT

Plano freemium e premium (pagamento com Stripe)

 Desenvolvido por
Erick Dos Santos
 Dev fullstack em ascensão
 Missão: transformar ideias em produtos que ajudam pessoas
 Contato: LinkedIn | GitHub


