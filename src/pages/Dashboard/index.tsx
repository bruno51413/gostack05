import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/39964948?s=460&v=4"
            alt="bruno51413"
          />
          <div>
            <strong>bruno51413/gostack05</strong>
            <p>Getting Started with Create React App</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="rocketseat"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
