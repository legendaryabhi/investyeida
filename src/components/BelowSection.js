export default function BelowSection() {

    // Add your important links here:
    const links = [
        {
            img: "/linkimages/YEIDA.webp",
            url: "https://www.yamunaexpresswayauthority.com"
        },
        {
            img: "/linkimages/plan.jpeg",
            url: "https://www.yamunaexpresswayauthority.com/web/about-us/master-plan/"
        },
        {
            img: "/linkimages/investup.jpg",
            url: "https://invest.up.gov.in"
        },
        {
            img: "/linkimages/upgov.jpg",
            url: "https://up.gov.in/"
        },
        
    ];

    return (
        <div className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                    Important Links
                </h2>

                {/* Row of Images */}
                <div className="flex gap-6 justify-center overflow-x-auto scrollbar-hide pb-4">

                    {links.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-24 w-24 rounded-full overflow-hidden shadow-lg bg-gray-100 group hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={item.img}
                                className="w-full h-full object-cover "
                                alt="link"
                            />
                        </a>
                    ))}

                </div>

            </div>
        </div>
    );
}
