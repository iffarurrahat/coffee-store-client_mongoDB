import CoffeeProducts from "../../components/CoffeeProducts/CoffeeProducts";
import FollowUsNow from "../../components/FollowUsNow/FollowUsNow";
import Banner from "../../components/Header/Banner/Banner";
import TagSection from "../../components/TagsSection/TagSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <TagSection />
            <CoffeeProducts />
            <FollowUsNow />
        </div>
    );
};

export default Home;