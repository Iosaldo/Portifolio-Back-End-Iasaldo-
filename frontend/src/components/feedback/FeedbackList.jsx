import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedbackItem from "./FeedbackItem";
import { getFeedbackApiUrl } from "@/lib/api";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const apiUrl = getFeedbackApiUrl();

    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(apiUrl, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`API error ${response.status}`);
        }

        const data = await response.json();
        setFeedbacks(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Erro ao carregar feedbacks:", err);
          setError(
            "Não foi possível carregar os feedbacks. Verifique se o backend está rodando em http://localhost:3001 ou configure NEXT_PUBLIC_API_URL.",
          );
        }
        setFeedbacks([]);
      }
    };

    fetchFeedbacks();

    return () => abortController.abort();
  }, []);

  if (error) {
    return <p style={{ color: "#ff6b6b" }}>{error}</p>;
  }

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
