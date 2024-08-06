import '../css/Wrapper.css'

const ExperienceBlock = ({emoji, firm, title, description, year}) => {

    return (
        <div className="experience">
             <div className="wrapper">
                <header>{year}</header>
                <div className="w-content">
                    <div>
                        <h3 className="w-title">
                            <div>
                                <a>
                                {title}
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
