import SkilsBlock from "./Skills";


const Page2 = () => {
    const componentsData = [
        {skill: 'React'},
        {skill: 'C'},
        {skill: 'PowerUI'},
        {skill: 'Java'},
        {skill: 'HTML'},
        {skill: 'CSS'}
    ];

    return (
        <div>
            {componentsData.map((data, index) => (
                <SkilsBlock key={index} {...data} />
            ))}
        </div>
    )
}

export default Page2;
