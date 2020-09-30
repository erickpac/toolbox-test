import React, { useState } from 'react';

import '../../styles/Dashboard.css';

import { Container, Row } from 'react-bootstrap';

import TopBar from '../../components/TopBar';
import WordsTable from '../../components/WordsTable';
import AddWord from '../../components/AddWord';

const API_URL = 'http://localhost:3000/add-word';

const Dashboard = () => {
  const [words, setWords] = useState(['abc', 'ghj']);

  const makeRequest = (word) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: word }),
    };

    fetch(API_URL, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((data) => setWords([...words, data.text]))
      .catch((error) => console.log(error));
  };

  const handleAddword = (word) => {
    if (String(word).length > 0) makeRequest(word);
    else alert('Debes ingresar una palabra');
  };

  return (
    <>
      <TopBar />
      <Container className="toolbox-container">
        <Row>
          <AddWord addNewWord={handleAddword} />
        </Row>
        <Row>
          <WordsTable items={words} />
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
