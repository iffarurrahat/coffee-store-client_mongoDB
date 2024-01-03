import Container from "../ui/Container";
import TagSectionCard from "./TagSectionCard";

const TagSection = () => {

    const tags = [
        {
            id: '1',
            image: 'https://i.imgur.com/23XhxhD.png',
            title: "Awesome Aroma",
            details: "You will definitely be a fan of the design & aroma of your coffee"
        },
        {
            id: '2',
            image: 'https://i.imgur.com/cIHzo1T.png',
            title: "Hight Quality",
            details: "We served the coffee to you maintaining the best quality"
        },
        {
            id: '3',
            image: 'https://i.imgur.com/vDNcwpf.png',
            title: "Pure Grades",
            details: "The coffee is made of the green coffee beans which you will love"
        },
        {
            id: '4',
            image: 'https://i.imgur.com/Wqka7Xr.png',
            title: "Proper Roasting",
            details: "Your coffee is brewed by first roasting the green coffee beans"
        },
    ]

    return (
        <div className="bg-[#ECEAE3] py-10 md:py-20">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                    {
                        tags.map(tag => <TagSectionCard
                            key={tag.id}
                            tag={tag}></TagSectionCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default TagSection;