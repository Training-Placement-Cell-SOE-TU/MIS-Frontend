import Sectionodd from "../components/Sectionodd"
import Sectioneven from '../components/Sectioneven'
import icon1 from '../components/images/SmallIcons-01.png'
import icon2 from '../components/images/SmallIcons-02.png'
import icon3 from '../components/images/SmallIcons-03.png'
import image1 from '../components/images/Illustrations-01.png'
import image2 from '../components/images/Illustrations-02.png'
import image3 from '../components/images/Illustrations-03.png'

const Section3 = () => {
  
  return (
    <div className="home">
        <div className="act">
            <span className="acttext">Activities</span>
            </div>
      <Sectionodd 
      icon={icon1}
      title="Summer/Winter Internship Programme"
      description="The Summer/Winter Internship programme conducted after the first year of studentship 
      is intended to provide the students a first-hand experience of the corporate world. While working 
      closely with company executives, they develop a long-term perspective of their career during such
      programmes. The companies too view the Summer/Winter Internship programme as a means to engage 
      students in productive short-term assignments as well as evaluate them for the purpose of giving 
      them pre-placement offers. Internships with stipend in IT and other industry for BTech seventh semester,
      MTech third semester and MCA students from sixth months to 1 Year is right now a very effective practice
      from T&amp;P Cell."
      image={image1}
      />
      <Sectioneven
      icon={icon2}
      title="Pre-placement Grooming Programme"
      description="The Training&amp;Placement Cell organizes a series of Pre-placement Grooming Sessions 
      for pre-final semester students every year with an objective to improve the overall personality of 
      the students. The modules for such programmes are prepared taking into account the requirement of 
      the recruiters as well as the need of the time. While doing so, efforts are directed towards the areas
      where the students are found to be weak. The cell also grooms the budding engineers with sessions of
      mock GD, developing presentation skills, facing mock interviews to check both soft skills and technical
      and undergoing regular aptitude online test."
      image={image2}
      
      /> 
      <Sectionodd 
      icon={icon3}
      title="Industry-Institute Interaction"
      description="In an effort to bring the Industry closer to our students, the University at intervals 
      organizes talks and interactive sessions involving executives from the Industry and students and 
      faculty of the University. This, on one hand, facilitates the industry executives to visit and 
      see the University, and, on the other hand, gives the students an opportunity to interact 
      face-to-face with the executives. The faculty/officers of the University also visit industrial 
      houses on various occasions as a part of the industry-academia boarding exercise."
      image={image3}
      /> 

    </div>
  );
}

export default Section3
