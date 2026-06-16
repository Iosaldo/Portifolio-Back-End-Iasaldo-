const CERTIFICATE_FILES = {
  "intermediate-javascript": {
    pdf: "/certificates/intermediate-javascript.pdf",
    image: "/certificates/images/intermediate-javascript.jpg",
  },
  javascript: {
    pdf: "/certificates/javascript.pdf",
    image: "/certificates/images/javascript.jpg",
  },
  "javascript-objects": {
    pdf: "/certificates/javascript-objects.pdf",
    image: "/certificates/images/javascript-objects.jpg",
  },
  "javascript-classes-modules": {
    pdf: "/certificates/javascript-classes-modules.pdf",
    image: "/certificates/images/javascript-classes-modules.jpg",
  },
  "javascript-requests": {
    pdf: "/certificates/javascript-requests.pdf",
    image: "/certificates/images/javascript-requests.jpg",
  },
  "asynchronous-javascript": {
    pdf: "/certificates/asynchronous-javascript.pdf",
    image: "/certificates/images/asynchronous-javascript.jpg",
  },
  "node-fundamentals": {
    pdf: "/certificates/node-fundamentals.pdf",
    image: "/certificates/images/node-fundamentals.jpg",
  },
  "back-end": {
    pdf: "/certificates/back-end.pdf",
    image: "/certificates/images/back-end.jpg",
  },
  "deploying-with-render": {
    pdf: "/certificates/deploying-with-render.pdf",
    image: "/certificates/images/deploying-with-render.jpg",
  },
  "git-introduction": {
    pdf: "/certificates/git-introduction.pdf",
    image: "/certificates/images/git-introduction.jpg",
  },
  "github-introduction": {
    pdf: "/certificates/github-introduction.pdf",
    image: "/certificates/images/github-introduction.jpg",
  },
  "git-github": {
    pdf: "/certificates/git-github.pdf",
    image: "/certificates/images/git-github.jpg",
  },
};

const CERTIFICATE_ORDER = [
  "intermediate-javascript",
  "back-end",
  "node-fundamentals",
  "asynchronous-javascript",
  "javascript",
  "javascript-objects",
  "javascript-requests",
  "javascript-classes-modules",
  "deploying-with-render",
  "git-introduction",
  "github-introduction",
  "git-github",
];

export function getCertificates(t) {
  return CERTIFICATE_ORDER.map((id) => {
    const item = CERTIFICATE_FILES[id];
    const content = t.certificates[id];

    return {
      id,
      title: content.title,
      description: content.description,
      institution: "Codecademy",
      date: "2024",
      image: item.image,
      imageAlt: content.title,
      pdf: item.pdf,
      details: {
        institution: "Codecademy",
        date: "2024",
        status: t.completedStatus,
        topics: content.topics,
      },
      links: [
        {
          href: item.pdf,
          label: t.viewCertificate,
        },
      ],
    };
  });
}

export const CERTIFICATE_TRANSLATIONS = {
  pt: {
    institutionLabel: "Instituição",
    dateLabel: "Data",
    statusLabel: "Estado",
    topicsLabel: "Conteúdos",
    viewCertificate: "Ver certificado PDF",
    completedStatus: "Concluído",
    certificates: {
      "intermediate-javascript": {
        title: "JavaScript Intermediário",
        description:
          "Certificação em JavaScript intermédio aplicada a lógica, estruturas de dados e boas práticas de programação.",
        topics: [
          "Funções e escopo",
          "Arrays e objetos",
          "Programação assíncrona",
          "Boas práticas em JavaScript",
        ],
      },
      "back-end": {
        title: "Back-End Engineer",
        description:
          "Formação em desenvolvimento Back-End com APIs, bases de dados e fundamentos de engenharia de software.",
        topics: [
          "APIs REST",
          "Bases de dados",
          "Autenticação",
          "Fundamentos de Back-End",
        ],
      },
      "node-fundamentals": {
        title: "Node.js Fundamentals",
        description:
          "Certificação sobre fundamentos de Node.js, npm e criação de aplicações server-side com JavaScript.",
        topics: [
          "Node.js e npm",
          "Módulos CommonJS",
          "Ambiente de execução",
          "Ficheiros e pacotes",
        ],
      },
      "asynchronous-javascript": {
        title: "JavaScript Assíncrono",
        description:
          "Certificação focada em programação assíncrona, callbacks, promises e fluxos não bloqueantes.",
        topics: [
          "Callbacks",
          "Promises",
          "Async/await",
          "Fetch e APIs",
        ],
      },
      javascript: {
        title: "JavaScript",
        description:
          "Certificação base de JavaScript com sintaxe, tipos, estruturas de controlo e funções.",
        topics: [
          "Sintaxe e variáveis",
          "Condicionais e loops",
          "Funções",
          "Tipos de dados",
        ],
      },
      "javascript-objects": {
        title: "JavaScript Objects",
        description:
          "Certificação sobre objetos em JavaScript, propriedades, métodos e manipulação de estruturas.",
        topics: [
          "Criação de objetos",
          "Propriedades e métodos",
          "Iteração",
          "Objetos aninhados",
        ],
      },
      "javascript-requests": {
        title: "JavaScript Requests",
        description:
          "Certificação sobre pedidos HTTP, fetch, APIs e comunicação entre frontend e backend.",
        topics: [
          "Fetch API",
          "Pedidos HTTP",
          "Respostas JSON",
          "Integração com APIs",
        ],
      },
      "javascript-classes-modules": {
        title: "JavaScript Classes & Modules",
        description:
          "Certificação sobre classes ES6, herança, módulos e organização de código JavaScript.",
        topics: [
          "Classes ES6",
          "Construtores",
          "Módulos import/export",
          "Encapsulamento",
        ],
      },
      "deploying-with-render": {
        title: "Deploying with Render",
        description:
          "Certificação sobre deploy de aplicações web com Render, configuração e publicação em produção.",
        topics: [
          "Deploy web services",
          "Variáveis de ambiente",
          "Render platform",
          "Publicação em produção",
        ],
      },
      "git-introduction": {
        title: "Git Introduction",
        description:
          "Certificação introdutória sobre Git, versionamento de código e fluxo básico de commits.",
        topics: [
          "Repositórios Git",
          "Commits",
          "Histórico",
          "Comandos básicos",
        ],
      },
      "github-introduction": {
        title: "GitHub Introduction",
        description:
          "Certificação sobre GitHub, repositórios remotos, colaboração e gestão de projetos.",
        topics: [
          "Repositórios remotos",
          "Push e pull",
          "GitHub workflow",
          "Colaboração",
        ],
      },
      "git-github": {
        title: "Git & GitHub",
        description:
          "Certificação combinada sobre Git e GitHub para controlo de versões e trabalho colaborativo.",
        topics: [
          "Git e GitHub",
          "Branches",
          "Pull requests",
          "Versionamento colaborativo",
        ],
      },
    },
  },
  en: {
    institutionLabel: "Institution",
    dateLabel: "Date",
    statusLabel: "Status",
    topicsLabel: "Topics",
    viewCertificate: "View certificate PDF",
    completedStatus: "Completed",
    certificates: {
      "intermediate-javascript": {
        title: "Intermediate JavaScript",
        description:
          "Intermediate JavaScript certification covering logic, data structures and programming best practices.",
        topics: [
          "Functions and scope",
          "Arrays and objects",
          "Asynchronous programming",
          "JavaScript best practices",
        ],
      },
      "back-end": {
        title: "Back-End Engineer",
        description:
          "Back-End development training with APIs, databases and software engineering fundamentals.",
        topics: [
          "REST APIs",
          "Databases",
          "Authentication",
          "Back-End fundamentals",
        ],
      },
      "node-fundamentals": {
        title: "Node.js Fundamentals",
        description:
          "Certification on Node.js fundamentals, npm and building server-side JavaScript applications.",
        topics: [
          "Node.js and npm",
          "CommonJS modules",
          "Runtime environment",
          "Files and packages",
        ],
      },
      "asynchronous-javascript": {
        title: "Asynchronous JavaScript",
        description:
          "Certification covering asynchronous programming, callbacks, promises and non-blocking flows.",
        topics: ["Callbacks", "Promises", "Async/await", "Fetch and APIs"],
      },
      javascript: {
        title: "JavaScript",
        description:
          "Foundational JavaScript certification covering syntax, types, control structures and functions.",
        topics: [
          "Syntax and variables",
          "Conditionals and loops",
          "Functions",
          "Data types",
        ],
      },
      "javascript-objects": {
        title: "JavaScript Objects",
        description:
          "Certification on JavaScript objects, properties, methods and data structure handling.",
        topics: [
          "Object creation",
          "Properties and methods",
          "Iteration",
          "Nested objects",
        ],
      },
      "javascript-requests": {
        title: "JavaScript Requests",
        description:
          "Certification on HTTP requests, fetch, APIs and frontend-backend communication.",
        topics: ["Fetch API", "HTTP requests", "JSON responses", "API integration"],
      },
      "javascript-classes-modules": {
        title: "JavaScript Classes & Modules",
        description:
          "Certification on ES6 classes, inheritance, modules and JavaScript code organization.",
        topics: [
          "ES6 classes",
          "Constructors",
          "import/export modules",
          "Encapsulation",
        ],
      },
      "deploying-with-render": {
        title: "Deploying with Render",
        description:
          "Certification on deploying web applications with Render, configuration and production publishing.",
        topics: [
          "Web service deploy",
          "Environment variables",
          "Render platform",
          "Production publishing",
        ],
      },
      "git-introduction": {
        title: "Git Introduction",
        description:
          "Introductory Git certification on code versioning and basic commit workflow.",
        topics: ["Git repositories", "Commits", "History", "Basic commands"],
      },
      "github-introduction": {
        title: "GitHub Introduction",
        description:
          "Certification on GitHub, remote repositories, collaboration and project management.",
        topics: [
          "Remote repositories",
          "Push and pull",
          "GitHub workflow",
          "Collaboration",
        ],
      },
      "git-github": {
        title: "Git & GitHub",
        description:
          "Combined Git and GitHub certification for version control and collaborative work.",
        topics: [
          "Git and GitHub",
          "Branches",
          "Pull requests",
          "Collaborative versioning",
        ],
      },
    },
  },
};
