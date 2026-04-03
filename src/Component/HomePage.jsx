import HomeLayout from "../Layout/HomeLayout";
import homeImage from "../assets/image.png"

function HomePage() {
    return (
        <HomeLayout>
            <div >
                <img className="w-full min-h-[100vh]" src={homeImage} alt="" />
            </div>
        </HomeLayout>
    )
}
export default HomePage;