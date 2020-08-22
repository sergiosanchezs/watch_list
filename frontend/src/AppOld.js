import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import AddMovie from './components/AddMovie';
// import logo from './logo.svg';
// import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #aaa;
`;

const Wrapper = styled.section`
  color: papayawhip;
  padding: 1rem 2rem;
  width: 100%;
  height: 100%;
  background: papayawhip;
`;

const App = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();

      try {
        console.log(data);
        setLoading(false);
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAPI();
  }, []);

  return (
    <Fragment>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Wrapper>
        <Title>Movie Home</Title>
      </Wrapper>
      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
            {movie.map(data => (
              <div key={data._id}>
                <ul>
                  <li>
                    <h1>
                      <a href='/{data.id}'>{data.name}</a>
                    </h1>
                  </li>
                  <li>
                    <img src={data.image} alt={data.name} />
                  </li>
                  <li>
                    <p>{data.description}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <AddMovie />
    </Fragment>
  );
};

export default App;
