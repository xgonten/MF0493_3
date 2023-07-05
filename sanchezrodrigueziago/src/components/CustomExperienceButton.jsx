import { Link } from 'react-router-dom';
import '../css/CustomExperienceButton.css'

function CustomExperienceButton() {

  return (
    <Link to={'/create'} className='exp-link'>
    <div className='exp-btn'>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/common-icons-2/add-74.png" className='exp-icn'/>
        <p className='exp-btn-txt'>Añadir nueva experiencia</p>
    </div>
    </Link>
  )
}

export default CustomExperienceButton;
