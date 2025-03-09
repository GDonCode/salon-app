export default function HeroText() {
    return (
        <div className="text-gray-100 text-center mt-40 p-8 rounded-lg">
            <h1 className="text-5xl text-center">More than a salon. <br/>A destination.</h1>
            <h3 className="text-xl w-fit-content">Where beauty and relaxation come together</h3>
            <div className="flex gap-4 justify-center mt-8">
                <button className="border-2 border-[#16B900] bg-[#16B900] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">Book Now</button>
                <button className="border-2 border-[#16B900] bg-[#16B900] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">View Services</button>
            </div>
        </div>
    );
}