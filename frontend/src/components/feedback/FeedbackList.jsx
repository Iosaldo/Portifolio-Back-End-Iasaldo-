import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/feedback`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setFeedbacks(data);
      } catch (err) {
        // Ignora erros de cancelamento (quando componente é desmontado)
        if (err.name !== "AbortError") {
          console.error("Erro ao carregar feedbacks:", err);
        }
        setFeedbacks([]);
      }
    };

    fetchFeedbacks();

    // Cleanup: cancela a requisição quando o componente desmontar
    return () => abortController.abort();
  }, []);

  // Só renderiza se houver feedbacks
  if (feedbacks.length === 0) {
    return null;
  }

  return (
    <StyledWrapper className="feedback-list">
      <h4>O que dizem:</h4>

      {feedbacks.map((item) => (
        <FeedbackItem key={item.id} data={item} />
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin-top: 60px;

  h4 {
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 30px;
    font-weight: 400;
  }
`;
