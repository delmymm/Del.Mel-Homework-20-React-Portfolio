import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
      <Header className ="header-color" title={<Link style={{textDecoration: 'none', color:'white', fontFamily: 'Merriweather'}}to='/'>Delmy Melendez</Link>}>
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content">
          <Main />
          </div>
        </Content>
      </Layout>
    </div>
  );
}



export default App;
