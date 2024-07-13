import './App.css'
import Header from './components/header/header'
import HeaderContainer from './components/containers/header-container/header-container'

export default function App() {
  const language = navigator.language;
  console.log(language);

  return (
    <>
      <Header />
      <HeaderContainer />
    </>
  )
}