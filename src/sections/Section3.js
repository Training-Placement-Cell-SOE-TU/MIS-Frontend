
import Sectionodd from "../components/Sectionodd"
import Sectioneven from '../components/Sectioneven'

const Section3 = () => {
  

  return (
    <div className="home">
        <div className="act">
            <span className="acttext">Activities</span>
            </div>
      <Sectionodd/>
      <Sectioneven/> 
      <Sectionodd/> 

    </div>
  );
}

export default Section3
