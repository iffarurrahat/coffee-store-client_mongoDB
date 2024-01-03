import Container from "../ui/Container";

const FollowUsNow = () => {
    return (
        <div className="mt-20">
            <Container>
                <div className="text-center mb-10">
                    <p><small>Follow Us Now</small></p>
                    <h2 className="text-4xl font-rancho">Follow on Instagram</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <img src={'https://i.imgur.com/B2ZXGqy.png'} alt="" /> 
                    <img src={'https://i.imgur.com/76kxtWl.png'} alt="" />
                    <img src={'https://i.imgur.com/mBokrLb.png'} alt="" />
                    <img src={'https://i.imgur.com/efwasUi.png'} alt="" />
                    <img src={'https://i.imgur.com/LtsUfrx.png'} alt="" />
                    <img src={'https://i.imgur.com/n3OKz4Z.png'} alt="" />
                    <img src={'https://i.imgur.com/KBGWMw2.png'} alt="" />
                    <img src={'https://i.imgur.com/mSF2mc1.png'} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default FollowUsNow;