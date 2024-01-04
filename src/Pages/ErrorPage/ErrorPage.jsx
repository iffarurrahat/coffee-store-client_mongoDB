import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";

const ErrorPage = () => {
    return (
        <>
            <Container>
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <img src="https://i.postimg.cc/mgDr5P1K/404.gif" alt="" />
                        <Link to='/' className="bg-secondary text-white py-3 px-4 rounded"> Go To Home</Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ErrorPage;