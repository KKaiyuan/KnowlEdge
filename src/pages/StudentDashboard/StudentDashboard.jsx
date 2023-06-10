import NavbarComponent from '../Components/Navbar';
import StudentCard from '../Components/StudnetCard';
import InformationCard from '../Components/InformationCard';
import CourseCard from '../Components/CourseCard';
import SmallCard from '../Components/SmallCard';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;

  .container {
    display: flex;

    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    min-width: 100%;
    padding: 25px 100px;
  }

  .column-container {
    padding: 0px 100px;
  }

  .text-align-left {
    text-align: left;
  }

  .greeting {
    font-weight: bold;
    font-size: x-large;
    display: flex;
    align-items: center;
  }

  .section-titles {
    font-weight: bold;
    font-size: large;
    margin-bottom: 15px;
  }

  #no-margin {
    margin-bottom: 0px;
  }

  #hidden {
    visibility: hidden;
  }

  .information-container {
    display: flex;
    flex-direction: column;
  }

  .information-wrapper {
    display: flex;
    height: 100%;
    margin-bottom: 20px;
  }

  .no-btm-padding {
    padding-bottom: 0;
  }

  .less-top-padding {
    padding-top: 15px;
  }
`;

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleCourseCardClick = (courseTitle) => {
    navigate(`/courses/${courseTitle}`);
  };

  return (
    <>
      <NavbarComponent />
      <DashboardStyled>
        <div className="container no-btm-padding">
          <h2 className="greeting">Welcome Mirabel</h2>
          <div>
            <StudentCard />
          </div>
        </div>
        <div className="container text-align-left">
          <div>
            <h3 className="section-titles">Study Sets</h3>
            <SmallCard type="study-set" title="CPSC 310 - SLDC" />
            <SmallCard type="study-set" title="CPSC 221 - Arrays" />
          </div>
          <div>
            <h3 className="section-titles">Notes</h3>
            <SmallCard type="notes" title="CPSC 310 - SLDC" />
            <SmallCard type="notes" title="CPSC 221 - Arrays" />
          </div>
          <div className="information-container">
            <h3 className="section-titles" id="hidden">
              Notes
            </h3>
            <div className="information-wrapper">
              <InformationCard />
            </div>
          </div>
        </div>
        <div>
          <div className="column-container text-align-left">
            <h3 className="section-titles" id="no-margin">
              Courses
            </h3>
          </div>
          <div className="container less-top-padding">
            <CourseCard title="CPSC 310" onclickfn={handleCourseCardClick} />
            <CourseCard title="CPSC 221" onclickfn={handleCourseCardClick} />
            <CourseCard title="CPSC 213" onclickfn={handleCourseCardClick} />
          </div>
        </div>
      </DashboardStyled>
    </>
  );
};

export default StudentDashboard;
