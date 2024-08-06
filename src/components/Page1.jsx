import ExperienceBlock from "./ExperienceBlock";

const Page1 = () => {
    const componentsData = [
        {emoji: '🎓', firm: 'Turkish-German University', title: 'Informatik', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', year: 2024},
        {emoji: '🎓', firm: 'Duzce Fen Lisesi', title: '-', description: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ', year: 2019},
    ];

    return (
        <div className="experience-wrapper">
            {componentsData.map((data, index) => (
                <ExperienceBlock key={index} {...data} />
            ))}
        </div>
    )
}

export default Page1;
