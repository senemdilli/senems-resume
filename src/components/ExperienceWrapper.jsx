import ExperienceBlock from "./ExperienceBlock";
import '../css/animation.css'

const ExperienceWrapper = () => {
    const componentsData = [
        {emoji: '💻', firm: 'Accenture', title: 'Tech Analyst', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', year: 2024},
        {emoji: '🔮', firm: 'Mercedes-Benz', title: 'Project Intern', description: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ', year: 2023},
        {emoji: '💙', firm: 'Anny GmbH', title: 'Product Development Intern', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', year: 2022},
        {emoji: '💙', firm: 'Anny GmbH', title: 'Product Development Intern', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', year: 2022},
        {emoji: '💙', firm: 'Anny GmbH', title: 'Product Development Intern', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', year: 2022}

    ];

    return (
        <div>
            {componentsData.map((data, index) => (
                <ExperienceBlock key={index} {...data} />
            ))}
        </div>
    )
}

export default ExperienceWrapper;
