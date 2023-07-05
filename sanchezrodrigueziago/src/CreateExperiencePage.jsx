import CreateExperienceCard from './components/CustomExperienceCard';
import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';
import './css/HomePage.css'

function CreateExperiencePage() {
return (
  <>
    <div>
      <Slideshow/>
      <NavBar/>
      <div id="main-content-flex">
        <CreateExperienceCard/>   
      </div>
      <footer>
      </footer>
    </div>
  </>
)
}

export default CreateExperiencePage;