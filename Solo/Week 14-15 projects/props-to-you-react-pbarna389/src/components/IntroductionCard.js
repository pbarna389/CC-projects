const IntroductionCard = ({ name, school, age, hobbyList, hairColor, height, hairLength }) => {

  return (
    < div className="introduction" >
      <p className="introduction__text">Hello, my name is {name}. I am a student at {school}, and I would like to be the best React developer in the world :) I'm {height} centimeter tall, my hair color is {hairColor} and it is {hairLength}. I'm {age} years old, and my hobbies are: {hobbyList.join(", ")}.</p>
    </div>
  )
}

export default IntroductionCard;