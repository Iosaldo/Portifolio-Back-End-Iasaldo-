import React, { useState } from "react";
import styled from "styled-components";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    await fetch(`${apiUrl}/api/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message, rating }),
    });

    setName("");
    setMessage("");
    setRating(5);
    setSuccess(true);
    setLoading(false);
  }

  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Teu Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Teu Feedback</label>
            <textarea
              name="message"
              id="message"
              rows={10}
              cols={50}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Avaliação</label>
            <div className="rating-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "star filled" : "star"}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button className="form-submit-btn" type="submit" disabled={loading}>
            {loading ? "A enviar..." : "Enviar Feedback"}
          </button>
          {success && (
            <p className="success-message">✅ Obrigado pelo feedback!</p>
          )}
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
      linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }

  .form-container .form-submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .success-message {
    color: #40c9ff;
    font-size: 14px;
    margin-top: 10px;
  }

  .rating-input {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .rating-input .star {
    color: #414141;
    font-size: 28px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .rating-input .star.filled {
    color: #ffd700;
  }

  .rating-input .star:hover {
    transform: scale(1.1);
  }
`;
