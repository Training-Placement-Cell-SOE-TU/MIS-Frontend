import Recruit1 from './Recruit1';
import {Container, Row, Col} from 'react-bootstrap'
import icon4 from '../components/images/SmallIcons-04.png'
import icon5 from '../components/images/SmallIcons-05.png'
import icon6 from '../components/images/SmallIcons-06.png'
import icon7 from '../components/images/SmallIcons-07.png'
import icon8 from '../components/images/SmallIcons-08.png'
import icon9 from '../components/images/SmallIcons-09.png'
import icon10 from '../components/images/SmallIcons-10.png'

const Section4 = () => {
  

  return (
    <>
    <div className="home1">
        <div className="act">
            <span className="acttext">Why Recruit ?</span>
            </div>
            
      

    </div>
      {/* ------------------BIG SCREENS--------------- */}
    <span className='sfourcon1'>
    <Container >
      <Row>
        <Col className="recruitcon1">

                <Row className="recruitrow1">
                  <Recruit1
                    icon={icon4}
                    title="The Facilitating Interface"
                    description="One of the unique features of the University is its commitment not only to produce quality manpower, but also to guide and shape the career of the students. In order to meet this objective, the University has a Training&amp;Placement Cell which acts as the interface between the recruiting organizations and the University students. It facilitates recruitment events on-campus as well as off-campus as required. It also organizes various pre-placement training programmes to enhance the employability of the targeted students."
          
                  />

                </Row>


                  <Row className="recruitrow1">
                    <Recruit1
                      icon={icon6}
                      title="Close-knit Monitoring"
                      description="While the residential nature of the University gives ample opportunity to the teachers and students to spend more time in the pursuit of teaching-learning, the non-affiliating quality facilitates more concentration on focused training and research. The teacher: student ratio in this University is one of the lowest in the country and therefore it provides for more attention to the student and a perfect atmosphere for one-to-one discussion."
          
                    />

                  </Row>

                  <Row className="recruitrow1">
                    <Recruit1
                      icon={icon8}
                      title="A Proven Track Record"
                      description="A number of past students of the University are now occupying highly responsible positions in various reputed and prestigious organizations including MNCs, PSUs, banks, Govt. organizations, institutions of learning etc. in various places of the globe. The University maintains a vibrant industry academia relationship and the suggestions of the experts are taken as tools for its continuous improvement. As per feedback received from the employers, the University alumni are remarkably high in professionalism, intelligence and job-interestedness and therefore they are worthy of their fast track records."
          
                    />

                  </Row>

                  <Row className="recruitrow1">
                    <Recruit1
                      icon={icon10}
                      title="Assuring the Facilities"
                      description="Besides our warm welcome, Campus recruiters are given the following aids :
                      Large classrooms and Halls for Pre-Placement talks and written tests 
                      Fully equipped computer labs for online tests.
                      Air conditioned rooms for Group Discussions, Video Conferencing and Interviews.
                      High Speed internet connection Facility (for submission of soft copies of resumes, mails for correspondence, etc.) 
                      Student Volunteers for prompt actions on the Placement Day. 
                      Guest house and lodging facilities.
                      Best of Hospitality amid lush green Campus.
                      "
          
                    />

                  </Row>
          
        </Col>




        <Col className="recruitcon2">
                  <Row className="recruitrow1">
                    <Recruit1
                      icon={icon5}
                      title="Rigourous Admission Tests"
                      description="The students of the University are selected through a two-stage filtration system, 
                      (a) Nation-wide written test and
                      (b) Group discussion and personal interview.
                      The main objective of these tests is to select the right kind of calibre for the right programme.
                      Joint Entrance Examination (JEE) like the IITs, NITs and other centrally funded technical institutions.
                      "
          
                    />

                  </Row>

                  <Row className="recruitrow1">
                    <Recruit1
                      icon={icon7}
                      title="Cultural and Extra Curriculars"
                      description="Life at Tezpur University is meant to pique your curiosity and stimulate your intellect at every turn. So in spite of the tight academic schedule followed by the students, they eagerly pursue various extra-curricular activities, ranging from inter hostel sports to national and international level competitions. This also includes the mess and hostel infrastructure facilities being managed by the students, clubs and societies to promote technical, managerial and social well-being of the students."
          
                    />

                  </Row>

                  <Row className="recruitrow1">
                    <Recruit1
                      icon={icon9}
                      title="Highly Conducive Campus"
                      description="The serene nature of the campus and its existence away from the city make the environment more pleasant and conducive for pursuit of education. The campus is self-contained with all facilities of modern township. As a result, the morale of the students remains high and confident, oblivious to the politics of student life. Equipped with the carefully and rigorously nurtured skill buttressed by their honesty, sincerity and integrity, the students prepare themselves to be assets to their employers in the life ahead."
          
                    />

                  </Row>


        </Col>
      </Row>
    </Container>
    </span>
    

    {/* ------------------SMALL SCREENS--------------- */}
    <span className='sfourcon2'>
    <Container >
      <Row>
        <Col className="recruitcon3">

                <Row className="recruitrow3">
                  <Recruit1
                    icon={icon4}
                    title="The Facilitating Interface"
                    description="One of the unique features of the University is its commitment not only to produce quality manpower, but also to guide and shape the career of the students. In order to meet this objective, the University has a Training&amp;Placement Cell which acts as the interface between the recruiting organizations and the University students. It facilitates recruitment events on-campus as well as off-campus as required. It also organizes various pre-placement training programmes to enhance the employability of the targeted students."
          
                  />

                </Row>


                  <Row className="recruitrow3">
                    <Recruit1
                      icon={icon6}
                      title="Close-knit Monitoring"
                      description="While the residential nature of the University gives ample opportunity to the teachers and students to spend more time in the pursuit of teaching-learning, the non-affiliating quality facilitates more concentration on focused training and research. The teacher: student ratio in this University is one of the lowest in the country and therefore it provides for more attention to the student and a perfect atmosphere for one-to-one discussion."
          
                    />

                  </Row>

                  <Row className="recruitrow3">
                    <Recruit1
                      icon={icon8}
                      title="A Proven Track Record"
                      description="A number of past students of the University are now occupying highly responsible positions in various reputed and prestigious organizations including MNCs, PSUs, banks, Govt. organizations, institutions of learning etc. in various places of the globe. The University maintains a vibrant industry academia relationship and the suggestions of the experts are taken as tools for its continuous improvement. As per feedback received from the employers, the University alumni are remarkably high in professionalism, intelligence and job-interestedness and therefore they are worthy of their fast track records."
          
                    />

                  </Row>

                  <Row className="recruitrow3">
                    <Recruit1
                      icon={icon10}
                      title="Assuring the Facilities"
                      description="Besides our warm welcome, Campus recruiters are given the following aids :
                      Large classrooms and Halls for Pre-Placement talks and written tests 
                      Fully equipped computer labs for online tests.
                      Air conditioned rooms for Group Discussions, Video Conferencing and Interviews.
                      High Speed internet connection Facility (for submission of soft copies of resumes, mails for correspondence, etc.) 
                      Student Volunteers for prompt actions on the Placement Day. 
                      Guest house and lodging facilities.
                      Best of Hospitality amid lush green Campus.
                      "
          
                    />

                  </Row>
          
                  <Row className="recruitrow3">
                    <Recruit1
                      icon={icon5}
                      title="Rigourous Admission Tests"
                      description="The students of the University are selected through a two-stage filtration system, 
                      (a) Nation-wide written test and
                      (b) Group discussion and personal interview.
                      The main objective of these tests is to select the right kind of calibre for the right programme.
                      Joint Entrance Examination (JEE) like the IITs, NITs and other centrally funded technical institutions.
                      "
          
                    />

                  </Row>

                  <Row className="recruitrow3">
                    <Recruit1
                      icon={icon7}
                      title="Cultural and Extra Curriculars"
                      description="Life at Tezpur University is meant to pique your curiosity and stimulate your intellect at every turn. So in spite of the tight academic schedule followed by the students, they eagerly pursue various extra-curricular activities, ranging from inter hostel sports to national and international level competitions. This also includes the mess and hostel infrastructure facilities being managed by the students, clubs and societies to promote technical, managerial and social well-being of the students."
          
                    />

                  </Row>

                  <Row className="recruitrow3">
                    <Recruit1
                      icon={icon9}
                      title="Highly Conducive Campus"
                      description="The serene nature of the campus and its existence away from the city make the environment more pleasant and conducive for pursuit of education. The campus is self-contained with all facilities of modern township. As a result, the morale of the students remains high and confident, oblivious to the politics of student life. Equipped with the carefully and rigorously nurtured skill buttressed by their honesty, sincerity and integrity, the students prepare themselves to be assets to their employers in the life ahead."
          
                    />

                  </Row>
        </Col>



        
      </Row>
    </Container>
    </span>
    
    </>
    
  );
}

export default Section4
