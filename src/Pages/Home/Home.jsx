import CoffeeProducts from "../../components/CoffeeProducts/CoffeeProducts";
import FollowUsNow from "../../components/FollowUsNow/FollowUsNow";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import TagSection from "../../components/TagsSection/TagSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <TagSection />
            <CoffeeProducts />
            <FollowUsNow />
            <Footer />
        </div>
    );
};

export default Home;