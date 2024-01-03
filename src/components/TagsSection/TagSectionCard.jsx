
const TagSectionCard = ({ tag }) => {
    const { image, title, details } = tag || {}
    return (
        <div className="text-center md:text-start">
            <img className="mx-auto md:mx-0" src={image} alt="" />
            <h3 className="text-secondary text-3xl font-rancho mt-4 mb-2">{title}</h3>
            <p className="font-raleway">{details}</p>
        </div>
    );
};

export default TagSectionCard;