// src/components/ExchangeList.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getExchanges } from "../gateway/api";
import styled from "styled-components";

interface Exchange {
  id: string;
  name: string;
  country: string;
  url: string;
  trust_score_rank: number;
  image: string;
}

const ExchangeListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  h2 {
    margin: 0;
  }
`;

const ExchangeList: React.FC = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);

  useEffect(() => {
    async function fetchExchanges() {
      const data = await getExchanges();
      setExchanges(data);
    }

    fetchExchanges();
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Exchanges</h1>
      <ul>
        {exchanges.map((exchange) => (
          <Link to={`/exchanges/${exchange.id}`} key={exchange.id}>
            <ExchangeListItem>
              <img src={exchange.image} alt={`${exchange.name} logo`} />
              <div>
                <h2>{exchange.name}</h2>
                <p>Country: {exchange.country}</p>
                <p>Trust Rank: {exchange.trust_score_rank}</p>
              </div>
            </ExchangeListItem>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeList;
