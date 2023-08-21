// src/components/ExchangeDetails.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getExchangeById } from "../gateway/api";

type ExchangeDetailsParams = {
  id: string;
};

interface Exchange {
  name: string;
  country: string;
  trust_score_rank: number;
  image: string;
  year_established: number;
  urls: {
    website: string[];
    twitter: string[];
    facebook: string[];
    reddit: string[];
    description: string[];
  };
}

const ExchangeDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<ExchangeDetailsParams>();
  const [exchange, setExchange] = useState<Exchange | null>(null);

  useEffect(() => {
    async function fetchExchangeDetails() {
      if (id) {
        const data = await getExchangeById(id);
        setExchange(data);
      }
    }

    fetchExchangeDetails();
  }, [id]);

  if (!exchange) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{exchange.name}</h2>
    </div>
  );
};

export default ExchangeDetails;
