import CoffeeProducts from "../../components/CoffeeProducts/CoffeeProducts";
import Banner from "../../components/Header/Banner/Banner";
import TagSection from "../../components/TagsSection/TagSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <TagSection />
            <CoffeeProducts />
        </div>
    );
};

export default Home;