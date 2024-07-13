import './App.css'
import Header from './components/header/header'
import HeaderContainer from './components/containers/headerContainer/headerContainer'
import ProjectContainer from './components/containers/projectContainer/projectContainer';

export default function App() {
  const language = navigator.language;
  console.log(language);

  return (
    <>
      <Header />
      <HeaderContainer />
      <ProjectContainer />
    </>
  )
}