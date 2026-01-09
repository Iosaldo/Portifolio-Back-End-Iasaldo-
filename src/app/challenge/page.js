"use client";

import { useState, useEffect } from "react";
import { useProgressStore } from "@/store/useProgressStore";
import { useRouter } from "next/navigation";
import "./challenge.css";

const QUESTIONS = [
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
];

export default function ChallengePage() {
  const router = useRouter();
  const { progress, setProgress } = useProgressStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Atualiza o progresso baseado no score
    const newProgress = (score / 100) * 100;
    setProgress(newProgress);
  }, [score, setProgress]);

  const handleAnswer = (optionIndex) => {
    if (showFeedback) return; // Previne múltiplos cliques

    setSelectedAnswer(optionIndex);
    const correct = optionIndex === QUESTIONS[currentQuestion].correct;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      // Resposta correta: adiciona pontos
      setScore(score + QUESTIONS[currentQuestion].points);
    } else {
      // Resposta errada: remove pontos (não pode ficar negativo)
      setScore(Math.max(0, score - 5));
    }

    // Avança para próxima pergunta após 2 segundos
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizCompleted(false);
    setProgress(0);
  };

  const goToPortfolio = () => {
    router.push("/");
  };

  if (quizCompleted) {
    const finalProgress = (score / 100) * 100;
    return (
      <div className="challenge-container">
        <div className="challenge-card">
          <h1>🎉 Quiz Completo!</h1>
          <div className="score-display">
            <p className="score-label">Pontuação Final</p>
            <p className="score-value">{score}/100</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${finalProgress}%` }}
              />
            </div>
            <p className="progress-text">
              Acesso ao Portfólio: {finalProgress.toFixed(0)}%
            </p>
          </div>

          {finalProgress >= 100 ? (
            <div className="success-message">
              <p>🔓 Parabéns! Você desbloqueou o portfólio completo!</p>
              <button onClick={goToPortfolio} className="btn-primary">
                Ver Portfólio Completo
              </button>
            </div>
          ) : (
            <div className="partial-message">
              <p>Você desbloqueou {finalProgress.toFixed(0)}% do portfólio.</p>
              <p>Continue tentando para desbloquear tudo!</p>
              <div className="button-group">
                <button onClick={restartQuiz} className="btn-secondary">
                  Tentar Novamente
                </button>
                <button onClick={goToPortfolio} className="btn-primary">
                  Ver Portfólio Parcial
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="challenge-container">
      <div className="challenge-card">
        <div className="challenge-header">
          <h1>🧠 Desafio de Programação</h1>
          <div className="score-info">
            <span>Pontuação: {score}/100</span>
            <span>
              Pergunta {currentQuestion + 1}/{QUESTIONS.length}
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
                  <p>Correto! +{question.points} pontos</p>
                </>
              ) : (
                <>
                  <span className="feedback-icon">✗</span>
                  <p>Incorreto! -5 pontos</p>
                </>
              )}
            </div>
          )}
        </div>

        <button onClick={goToPortfolio} className="btn-link">
          ← Voltar ao Portfólio ({progress.toFixed(0)}% desbloqueado)
        </button>
      </div>
    </div>
  );
}
