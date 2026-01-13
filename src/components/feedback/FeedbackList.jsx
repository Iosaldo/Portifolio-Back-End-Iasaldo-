import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => {
        console.error(err);
        // Silenciosamente falha - não mostra feedbacks se API não disponível
        setFeedbacks([]);
      });
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
