import Container from "../../../components/ui/Container";

const Banner = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/ggPbQjL/banner-bg.jpg)] bg-cover ">
            <div className=" bg-black-600/30 backdrop-brightness-105">
                <Container>
                    <div className="flex h-[60vh] md:h-screen justify-end md:items-center pt-[50%] md:pt-0 ">
                        <div className="text-white md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-rancho mb-4">Would you like a Cup of Delicious Coffee?</h2>
                            <p className="font-raleway">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <button className="font-rancho bg-primary py-2 px-5 mt-8 text-xl text-black">Learn More</button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;