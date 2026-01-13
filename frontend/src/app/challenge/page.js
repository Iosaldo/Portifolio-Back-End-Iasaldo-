"use client";

import { useState, useEffect, useCallback } from "react";
import { useProgressStore } from "@/store/useProgressStore";
import useLanguageStore from "@/store/useLanguageStore";
import { useRouter } from "next/navigation";
import "./challenge.css";

const QUESTIONS = {
  pt: [
    {
      id: 1,
      question: "O que é REST API?",
      options: [
        "Um tipo de banco de dados",
        "Um padrão de arquitetura para comunicação entre sistemas via HTTP",
        "Uma linguagem de programação",
        "Um framework JavaScript",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 2,
      question: "Qual método HTTP é usado para criar um novo recurso?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correct: 1,
      points: 10,
    },
    {
      id: 3,
      question: "O que significa SQL?",
      options: [
        "Simple Query Language",
        "Structured Query Language",
        "System Quality Level",
        "Standard Queue List",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 4,
      question: "Em Node.js, qual módulo é usado para criar servidores HTTP?",
      options: ["fs", "path", "http", "os"],
      correct: 2,
      points: 10,
    },
    {
      id: 5,
      question: "O que é middleware no Express.js?",
      options: [
        "Um banco de dados",
        "Uma função que tem acesso ao request e response",
        "Um tipo de roteamento",
        "Um método HTTP",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 6,
      question: "Qual é a porta padrão do PostgreSQL?",
      options: ["3306", "5432", "8080", "27017"],
      correct: 1,
      points: 10,
    },
    {
      id: 7,
      question: "O que faz o comando 'git commit'?",
      options: [
        "Envia alterações para o repositório remoto",
        "Salva alterações no repositório local",
        "Cria uma nova branch",
        "Remove arquivos do staging",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 8,
      question: "Qual status HTTP indica sucesso na criação de um recurso?",
      options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"],
      correct: 1,
      points: 10,
    },
    {
      id: 9,
      question: "O que é JSON?",
      options: [
        "Um banco de dados NoSQL",
        "Um formato de intercâmbio de dados baseado em texto",
        "Uma linguagem de programação",
        "Um framework web",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 10,
      question: "Em SQL, qual comando é usado para recuperar dados?",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      correct: 2,
      points: 10,
    },
    {
      id: 11,
      question: "O que é NPM?",
      options: [
        "Um editor de código",
        "Gerenciador de pacotes do Node.js",
        "Um framework web",
        "Um banco de dados",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 12,
      question: "Qual é o propósito do arquivo package.json?",
      options: [
        "Armazenar imagens",
        "Configurar dependências e scripts do projeto",
        "Definir rotas",
        "Criar banco de dados",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 13,
      question: "O que faz o método HTTP PUT?",
      options: [
        "Deleta um recurso",
        "Cria um novo recurso",
        "Atualiza um recurso existente",
        "Lista recursos",
      ],
      correct: 2,
      points: 10,
    },
    {
      id: 14,
      question: "O que é uma Primary Key em SQL?",
      options: [
        "Um campo que pode ser nulo",
        "Um campo duplicado",
        "Um identificador único para cada registro",
        "Um tipo de índice",
      ],
      correct: 2,
      points: 10,
    },
    {
      id: 15,
      question: "Qual comando Git cria uma nova branch?",
      options: [
        "git new branch",
        "git branch <nome>",
        "git create <nome>",
        "git add branch",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 16,
      question: "O que é CORS?",
      options: [
        "Um banco de dados",
        "Cross-Origin Resource Sharing",
        "Um método HTTP",
        "Uma linguagem de programação",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 17,
      question: "Qual status HTTP indica 'Não Encontrado'?",
      options: ["200", "404", "500", "201"],
      correct: 1,
      points: 10,
    },
    {
      id: 18,
      question: "O que faz o comando 'npm install'?",
      options: [
        "Remove pacotes",
        "Instala dependências do projeto",
        "Cria um novo projeto",
        "Compila o código",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 19,
      question: "O que é Express.js?",
      options: [
        "Um banco de dados",
        "Framework minimalista para Node.js",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 20,
      question: "Qual cláusula SQL filtra resultados?",
      options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
      correct: 2,
      points: 10,
    },
    {
      id: 21,
      question: "O que é async/await em JavaScript?",
      options: [
        "Um loop",
        "Sintaxe para trabalhar com Promises",
        "Um tipo de variável",
        "Um método de array",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 22,
      question: "Qual é a diferença entre var e let?",
      options: [
        "Não há diferença",
        "let tem escopo de bloco, var tem escopo de função",
        "var é mais rápido",
        "let não pode ser reatribuído",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 23,
      question: "O que é um callback em JavaScript?",
      options: [
        "Um tipo de loop",
        "Uma função passada como argumento para outra função",
        "Um método HTTP",
        "Um operador",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 24,
      question: "Qual comando SQL une dados de múltiplas tabelas?",
      options: ["MERGE", "JOIN", "UNION", "CONNECT"],
      correct: 1,
      points: 10,
    },
  ],
  en: [
    {
      id: 1,
      question: "What is a REST API?",
      options: [
        "A type of database",
        "An architectural pattern for system communication via HTTP",
        "A programming language",
        "A JavaScript framework",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 2,
      question: "Which HTTP method is used to create a new resource?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correct: 1,
      points: 10,
    },
    {
      id: 3,
      question: "What does SQL stand for?",
      options: [
        "Simple Query Language",
        "Structured Query Language",
        "System Quality Level",
        "Standard Queue List",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 4,
      question: "In Node.js, which module is used to create HTTP servers?",
      options: ["fs", "path", "http", "os"],
      correct: 2,
      points: 10,
    },
    {
      id: 5,
      question: "What is middleware in Express.js?",
      options: [
        "A database",
        "A function that has access to request and response",
        "A type of routing",
        "An HTTP method",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 6,
      question: "What is the default port for PostgreSQL?",
      options: ["3306", "5432", "8080", "27017"],
      correct: 1,
      points: 10,
    },
    {
      id: 7,
      question: "What does the 'git commit' command do?",
      options: [
        "Sends changes to the remote repository",
        "Saves changes to the local repository",
        "Creates a new branch",
        "Removes files from staging",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 8,
      question: "Which HTTP status indicates successful resource creation?",
      options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"],
      correct: 1,
      points: 10,
    },
    {
      id: 9,
      question: "What is JSON?",
      options: [
        "A NoSQL database",
        "A text-based data interchange format",
        "A programming language",
        "A web framework",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 10,
      question: "In SQL, which command is used to retrieve data?",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      correct: 2,
      points: 10,
    },
    {
      id: 11,
      question: "What is NPM?",
      options: [
        "A code editor",
        "Node.js package manager",
        "A web framework",
        "A database",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 12,
      question: "What is the purpose of the package.json file?",
      options: [
        "Store images",
        "Configure project dependencies and scripts",
        "Define routes",
        "Create databases",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 13,
      question: "What does the HTTP PUT method do?",
      options: [
        "Deletes a resource",
        "Creates a new resource",
        "Updates an existing resource",
        "Lists resources",
      ],
      correct: 2,
      points: 10,
    },
    {
      id: 14,
      question: "What is a Primary Key in SQL?",
      options: [
        "A field that can be null",
        "A duplicate field",
        "A unique identifier for each record",
        "A type of index",
      ],
      correct: 2,
      points: 10,
    },
    {
      id: 15,
      question: "Which Git command creates a new branch?",
      options: [
        "git new branch",
        "git branch <name>",
        "git create <name>",
        "git add branch",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 16,
      question: "What is CORS?",
      options: [
        "A database",
        "Cross-Origin Resource Sharing",
        "An HTTP method",
        "A programming language",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 17,
      question: "Which HTTP status indicates 'Not Found'?",
      options: ["200", "404", "500", "201"],
      correct: 1,
      points: 10,
    },
    {
      id: 18,
      question: "What does the 'npm install' command do?",
      options: [
        "Removes packages",
        "Installs project dependencies",
        "Creates a new project",
        "Compiles code",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 19,
      question: "What is Express.js?",
      options: [
        "A database",
        "Minimalist framework for Node.js",
        "A programming language",
        "An operating system",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 20,
      question: "Which SQL clause filters results?",
      options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
      correct: 2,
      points: 10,
    },
    {
      id: 21,
      question: "What is async/await in JavaScript?",
      options: [
        "A loop",
        "Syntax for working with Promises",
        "A variable type",
        "An array method",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 22,
      question: "What's the difference between var and let?",
      options: [
        "No difference",
        "let has block scope, var has function scope",
        "var is faster",
        "let cannot be reassigned",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 23,
      question: "What is a callback in JavaScript?",
      options: [
        "A type of loop",
        "A function passed as an argument to another function",
        "An HTTP method",
        "An operator",
      ],
      correct: 1,
      points: 10,
    },
    {
      id: 24,
      question: "Which SQL command joins data from multiple tables?",
      options: ["MERGE", "JOIN", "UNION", "CONNECT"],
      correct: 1,
      points: 10,
    },
  ],
};

const TRANSLATIONS = {
  pt: {
    title: "🧠 Desafio de Programação",
    score: "Pontuação",
    question: "Pergunta",
    correct: "Correto!",
    incorrect: "Incorreto!",
    points: "pontos",
    quizComplete: "🎉 Quiz Completo!",
    finalScore: "Pontuação Final",
    portfolioAccess: "Acesso ao Portfólio",
    congratulations: "🔓 Parabéns! Você desbloqueou o portfólio completo!",
    viewFullPortfolio: "Ver Portfólio Completo",
    unlockedPercentage: "Você desbloqueou",
    keepTrying: "Continue tentando para desbloquear tudo!",
    tryAgain: "Tentar Novamente",
    viewPartialPortfolio: "Ver Portfólio Parcial",
    backToPortfolio: "← Voltar ao Portfólio",
    unlocked: "desbloqueado",
  },
  en: {
    title: "🧠 Programming Challenge",
    score: "Score",
    question: "Question",
    correct: "Correct!",
    incorrect: "Incorrect!",
    points: "points",
    quizComplete: "🎉 Quiz Complete!",
    finalScore: "Final Score",
    portfolioAccess: "Portfolio Access",
    congratulations: "🔓 Congratulations! You unlocked the full portfolio!",
    viewFullPortfolio: "View Full Portfolio",
    unlockedPercentage: "You unlocked",
    keepTrying: "Keep trying to unlock everything!",
    tryAgain: "Try Again",
    viewPartialPortfolio: "View Partial Portfolio",
    backToPortfolio: "← Back to Portfolio",
    unlocked: "unlocked",
  },
};

// Função para embaralhar array (Fisher-Yates shuffle)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Função para selecionar 10 perguntas aleatórias e embaralhar suas opções
const getRandomQuestions = (questions, count = 10) => {
  // Seleciona 10 perguntas aleatórias do pool total
  const selectedQuestions = shuffleArray(questions).slice(0, count);

  // Embaralha as opções de cada pergunta selecionada
  return selectedQuestions.map((question) => {
    const originalOptions = question.options;
    const correctAnswer = originalOptions[question.correct];

    // Cria array de opções com índices originais
    const optionsWithIndices = originalOptions.map((option, index) => ({
      option,
      originalIndex: index,
    }));

    // Embaralha as opções
    const shuffledOptions = shuffleArray(optionsWithIndices);

    // Encontra novo índice da resposta correta
    const newCorrectIndex = shuffledOptions.findIndex(
      (item) => item.option === correctAnswer
    );

    return {
      ...question,
      options: shuffledOptions.map((item) => item.option),
      correct: newCorrectIndex,
    };
  });
};

export default function ChallengePage() {
  const router = useRouter();
  const { progress, setProgress } = useProgressStore();
  const { language, setLanguage } = useLanguageStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const t = TRANSLATIONS[language];

  // Estado para 10 perguntas aleatórias do pool de 25
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    getRandomQuestions(QUESTIONS[language], 10)
  );

  const questions = shuffledQuestions;

  useEffect(() => {
    // Atualiza o progresso baseado no score
    const newProgress = (score / 100) * 100;
    setProgress(newProgress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  useEffect(() => {
    // Seleciona novas 10 perguntas aleatórias quando o idioma mudar
    setShuffledQuestions(getRandomQuestions(QUESTIONS[language], 10));
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [language]);

  const handleAnswer = (optionIndex) => {
    if (showFeedback) return; // Previne múltiplos cliques

    setSelectedAnswer(optionIndex);
    const correct = optionIndex === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      // Resposta correta: adiciona pontos
      setScore(score + questions[currentQuestion].points);
    } else {
      // Resposta errada: remove pontos (não pode ficar negativo)
      setScore(Math.max(0, score - 5));
    }

    // Avança para próxima pergunta após 2 segundos
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const restartQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizCompleted(false);
    setProgress(0);
    // Seleciona novas 10 perguntas aleatórias do pool
    setShuffledQuestions(getRandomQuestions(QUESTIONS[language], 10));
  }, [language, setProgress]);

  const goToPortfolio = () => {
    router.push("/");
  };

  // Efeito para lidar com a conclusão do quiz
  useEffect(() => {
    if (quizCompleted) {
      if (score >= 80) {
        // Desbloqueia o portfólio completamente se a pontuação for >= 80
        setProgress(100);
      } else {
        // Reinicia o quiz automaticamente se a pontuação for < 80
        const timer = setTimeout(() => {
          restartQuiz();
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [quizCompleted, score, restartQuiz]);

  if (quizCompleted) {
    const finalProgress = (score / 100) * 100;

    // Se a pontuação for menor que 80, mostra mensagem de reinício
    if (score < 80) {
      return (
        <div className="challenge-container">
          <div className="challenge-card">
            <h1>{t.quizComplete}</h1>
            <div className="score-display">
              <p className="score-label">{t.finalScore}</p>
              <p className="score-value">{score}/100</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${finalProgress}%` }}
                />
              </div>
            </div>
            <div className="partial-message">
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#ff6b6b",
                }}
              >
                {language === "pt"
                  ? "❌ Pontuação insuficiente! Você precisa de pelo menos 80 pontos."
                  : "❌ Insufficient score! You need at least 80 points."}
              </p>
              <p>
                {language === "pt"
                  ? "Reiniciando o quiz em 3 segundos..."
                  : "Restarting quiz in 3 seconds..."}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // Se a pontuação for 80 ou mais, mostra sucesso
    const unlockedProgress = 100;

    return (
      <div className="challenge-container">
        <div className="challenge-card">
          <h1>{t.quizComplete}</h1>
          <div className="score-display">
            <p className="score-label">{t.finalScore}</p>
            <p className="score-value">{score}/100</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${unlockedProgress}%` }}
              />
            </div>
            <p className="progress-text">
              {t.portfolioAccess}: {unlockedProgress}%
            </p>
          </div>

          <div className="success-message">
            <p>{t.congratulations}</p>
            <p style={{ fontSize: "1.1rem", marginTop: "10px" }}>
              {language === "pt"
                ? "🎉 Portfólio 100% desbloqueado!"
                : "🎉 Portfolio 100% unlocked!"}
            </p>
            <button onClick={goToPortfolio} className="btn-primary">
              {t.viewFullPortfolio}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz em andamento
  const question = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="challenge-container">
      <div className="challenge-card">
        {/* Language Toggle */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "10px",
            zIndex: 10,
          }}
        >
          <button
            onClick={() => setLanguage("pt")}
            className={`lang-btn ${language === "pt" ? "active" : ""}`}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: language === "pt" ? "#00d4d4" : "transparent",
              color: language === "pt" ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`lang-btn ${language === "en" ? "active" : ""}`}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: language === "en" ? "#00d4d4" : "transparent",
              color: language === "en" ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            EN
          </button>
        </div>

        <div className="challenge-header">
          <h1>{t.title}</h1>
          <div className="score-info">
            <span>
              {t.score}: {score}/100
            </span>
            <span>
              {t.question} {currentQuestion + 1}/{questions.length}
            </span>
          </div>
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="question-section">
          <h2 className="question-text">{question.question}</h2>

          <div className="options-grid">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
                className={`option-btn ${
                  showFeedback && index === question.correct
                    ? "correct"
                    : showFeedback && index === selectedAnswer && !isCorrect
                    ? "incorrect"
                    : ""
                }`}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
              {isCorrect ? (
                <>
                  <span className="feedback-icon">✓</span>
                  <p>
                    {t.correct} +{question.points} {t.points}
                  </p>
                </>
              ) : (
                <>
                  <span className="feedback-icon">✗</span>
                  <p>
                    {t.incorrect} -5 {t.points}
                  </p>
                </>
              )}
            </div>
          )}
        </div>

        <button onClick={goToPortfolio} className="btn-link">
          {t.backToPortfolio} ({progress.toFixed(0)}% {t.unlocked})
        </button>
      </div>
    </div>
  );
}
