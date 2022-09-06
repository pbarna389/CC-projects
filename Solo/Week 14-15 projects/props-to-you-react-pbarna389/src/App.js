import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import IntroductionCard from './components/IntroductionCard';

function App() {
  const logoName = "My Logo"

  const name = "Barna";
  const school = "Codecool";
  const age = "32";
  const hobbyList = ["playing guitar", "miniature painting", "reading", "writing", "miniature assembling", "driving others insane"];
  const height = "182";
  const hairColor = "brown";
  const hairLength = "long"

  const friendName = "Zoli";
  const friendSchool = "Life";
  const friendAge = "36";
  const friendHobbyList = ["miniature painting", "card games", "driving others insane"];
  const friendHeight = "191";
  const friendHairColor = "black";
  const friendHairLength = "long"
  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'March', 'June', 'July', "August", "September", "October", "November", "December"];

  return (
    <>
      <div className="App">
        <Header logo={logoName} />
      </div>
      <div>
        <IntroductionCard name={name} school={school} age={age} hobbyList={hobbyList} hairColor={hairColor} hairLength={hairLength} height={height} />
        <IntroductionCard name={friendName} school={friendSchool} age={friendAge} hobbyList={friendHobbyList} hairColor={friendHairColor} hairLength={friendHairLength} height={friendHeight} />
      </div>
      <Footer year={today.getFullYear()} month={months[today.getMonth()]} date={today.getDate()} dayName={days[today.getDay()]} />
    </>
  );
}

export default App;
