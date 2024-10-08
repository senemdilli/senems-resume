import '../css/Wrapper.css'
import '../css/animation.css'

const ExperienceBlock = ({emoji, firm, title, description, year}) => {

    return (
        <div className="experience">
             <div className="wrapper fade-in-down-animation">
                <header>{year}</header>
                <div className="w-content">
                    <div>
                        <h3 className="w-title">
                            <div>
                                <a className='gap'>
                                <span>{title}</span>
                                <span className="w-firm">{firm}</span>
                                </a>
                            </div>
                        </h3>
                        <p className="w-desc">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceBlock;
