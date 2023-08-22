import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getExchangeById } from "../gateway/api";
import styled from "styled-components";

type ExchangeDetailsParams = {
  id: string;
};

interface Exchange {
  name: string;
  country: string;
  trust_score_rank: number;
  image: string;
  year_established: number;
  description: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
}

const ExchangeDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ExchangeDetailsContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 20px;

  & > * {
    margin-bottom: 10px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;

    a {
      color: #000;
    }
  }
`;

const ExchangeDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<ExchangeDetailsParams>();
  const [exchange, setExchange] = useState<Exchange | null>(null);

  useEffect(() => {
    const fetchExchangeDetails = async () => {
      if (id) {
        const data = await getExchangeById(id);
        setExchange(data);
      }
    };

    fetchExchangeDetails();
  }, [id]);

  if (!exchange) {
    return <div>Loading...</div>;
  }

  return (
    <ExchangeDetailsWrapper>
      <ExchangeDetailsContainer>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>{exchange.name}</h2>
        <p>Country: {exchange.country}</p>
        <p>Trust Rank: {exchange.trust_score_rank}</p>
        <img src={exchange.image} alt={exchange.name} />
        <p>Year of Establishment: {exchange.year_established}</p>
        <p>Description: {exchange.description}</p>
        <div>
          <p>
            <a
              href={
                exchange.facebook_url !== "" ? exchange.facebook_url : undefined
              }
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href={
                exchange.reddit_url !== "" ? exchange.reddit_url : undefined
              }
              rel="noreferrer"
              target="_blank"
            >
              Reddit
            </a>
          </p>
          <p>
            <a
              href={
                exchange.telegram_url !== "" ? exchange.telegram_url : undefined
              }
              rel="noreferrer"
              target="_blank"
            >
              Telegram
            </a>
          </p>
          <p>
            <a
              href={exchange.slack_url !== "" ? exchange.slack_url : undefined}
              rel="noreferrer"
              target="_blank"
            >
              Slack
            </a>
          </p>
        </div>
      </ExchangeDetailsContainer>
    </ExchangeDetailsWrapper>
  );
};

export default ExchangeDetails;
