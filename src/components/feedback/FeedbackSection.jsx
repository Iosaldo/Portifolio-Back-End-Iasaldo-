import React from "react";
import styled from "styled-components";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

export default function FeedbackSection() {
  return (
    <StyledSection className="feedback-section">
      <div className="feedback-header">
        <h3>Feedback</h3>
        <p>Deixa a tua opinião sobre este portfólio</p>
      </div>

      <FeedbackForm />
      <FeedbackList />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 80px 40px;
  background: #000;

  .feedback-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .feedback-header h3 {
    font-family: "Playfair Display", "Times New Roman", serif;
    font-size: 6rem;
    font-weight: 400;
    margin: 0 0 16px 0;
    color: #ffffff;
    line-height: 0.95;
    letter-spacing: -2px;
  }

  .feedback-header p {
    color: #b0b0b0;
    font-size: 1.2rem;
    margin: 0;
  }
`;
