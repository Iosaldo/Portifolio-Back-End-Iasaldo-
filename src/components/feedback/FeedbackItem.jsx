import React from "react";
import styled from "styled-components";

export default function FeedbackItem({ data }) {
  const renderStars = (rating = 5) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <StyledCard>
      <div className="feedback-header">
        <strong>{data.name}</strong>
        <div className="rating">{renderStars(data.rating)}</div>
      </div>
      <p className="feedback-message">{data.message}</p>
      <span className="feedback-date">
        {new Date(data.created_at).toLocaleDateString()}
      </span>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  color: #fff;

  .feedback-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  strong {
    font-size: 16px;
    color: #fff;
  }

  .rating {
    display: flex;
    gap: 4px;
  }

  .star {
    color: #414141;
    font-size: 18px;
  }

  .star.filled {
    color: #ffd700;
  }

  .feedback-message {
    color: #b0b0b0;
    line-height: 1.6;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .feedback-date {
    color: #717171;
    font-size: 12px;
  }
`;
