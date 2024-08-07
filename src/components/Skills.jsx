import '../css/Skills.css'
import '../css/animation.css'

const Skills = ({skill}) => {
    
    return(
        <ul>
            <li>
                <a className='fade-in-down-animation'>{skill}</a>
            </li>
        </ul>
    );

}

export default Skills;