# Iasaldo Batista — Portfólio Back-End

Portfólio profissional em Next.js para apresentar projetos, competências, formação, certificados e contacto. Interface bilingue (PT/EN) pensada para recrutadores e revisão técnica rápida.

**Live:** [portifolio-iyosaldo.vercel.app](https://portifolio-iyosaldo.vercel.app)

## Objetivo

Vitrine profissional que demonstra evolução em desenvolvimento Back-End: APIs REST, validação, bases de dados, documentação e projetos completos apresentados com contexto técnico claro.

## Funcionalidades

- Secções de hero, projetos, competências, formação e sobre mim
- Modal de projetos com **stack Front-end / Back-end**, papel, estado e destaques técnicos
- Preview de **Resume** e **CV** em PDF (ficheiros distintos)
- Página de certificados Codecademy em `/certificados`
- Alternância de idioma (português / inglês)
- Links para GitHub, LinkedIn e email

## Stack

- Next.js 15
- React 19
- CSS
- Framer Motion
- GSAP
- Zustand
- React Icons

## Estrutura

```text
.
├── public/                  # Imagens, certificados PDF e documentos públicos
│   ├── Iasaldo-Batista-Backend-Resume.pdf
│   └── CV.pdf
├── scripts/                 # Geração de PDFs e imagens de certificados
├── src/app/                 # Rotas, layout e estilos globais
│   ├── page.js              # Página principal
│   └── certificados/        # Página de certificações
├── src/components/          # Componentes da interface
└── src/store/               # Estado global (idioma)
```

## Projetos apresentados

| Projeto | Front-end | Back-end |
|---------|-----------|----------|
| **ShiftSync** | Next.js, React | Node.js, Express, PostgreSQL |
| **Quick-Post API** | Postman | Node.js, Express, REST API |
| **Portfólio** | Next.js, React | Node.js, SEO, Vercel |
| **Learn English** | React, Next.js, UI | — |

## Como executar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # ESLint
npm run certificates:images   # Gera imagens dos certificados (Python)
```

### Gerar PDFs (opcional)

Requer Python com `reportlab` (e `pypdf` para validação do resume):

```bash
python scripts/build_backend_resume.py   # Resume → public/Iasaldo-Batista-Backend-Resume.pdf
python scripts/build_cv_pdf.py           # CV → public/cv.pdf
```

O botão **CV** na interface usa `public/CV.pdf`. O script acima gera `cv.pdf`; mantém o ficheiro usado no site atualizado conforme o fluxo local.

## Configuração

Copiar `.env.example` para `.env.local` se necessário:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Documentos públicos

| Botão | Ficheiro | Uso |
|-------|----------|-----|
| Resume | `public/Iasaldo-Batista-Backend-Resume.pdf` | Versão curta (1 página) |
| CV | `public/CV.pdf` | Currículo completo |

No Next.js, ficheiros em `public/` são servidos na raiz (`/CV.pdf`, sem `/public/` na URL).

## Observações técnicas

- Aplicação frontend em Next.js App Router, sem base de dados externa
- Conteúdo (projetos, competências, formação) definido nos componentes
- Deploy preparado para Vercel; paths de ficheiros sensíveis a maiúsculas/minúsculas em Linux

## Melhorias pendentes

- Substituir placeholders por screenshots reais dos projetos
- Adicionar links oficiais de validação para todos os certificados
- Publicar documentação separada dos projetos Back-End apresentados
- Aumentar cobertura técnica nos repositórios dos projetos

## Contacto

- GitHub: [@Iosaldo](https://github.com/Iosaldo)
- LinkedIn: [iasaldo-batista](https://linkedin.com/in/iasaldo-batista)
- Email: [iyosaldonbk@gmail.com](mailto:iyosaldonbk@gmail.com)
