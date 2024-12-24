import React from "react";
import Image from "next/image";
const data = [
  {
    id: 1,
    company: "PT. Jivaloka",
    year: "2024 (6 Months)",
    position: "Game Designer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem numquam amet iusto consequuntur et, ipsam consequatur quia cumque maxime quibusdam?",
    logo: "/jvk.png",
  },
  {
    id: 2,
    company: "Nevtik Organization",
    year: "2023 (Present)",
    position: "Web Developer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem numquam amet iusto consequuntur et, ipsam consequatur quia cumque maxime quibusdam?",
    logo: "/nevtik.png",
  },
];

const Card = () => {
  return (
    <div className="space-y-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-[40rem] bg-zinc-900 rounded-xl p-6 shadow-lg mx-auto"
        >
          <div className="flex sm:flex-row sm:items-center sm:justify-between pb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
    
                  <Image src={item.logo} alt={item.company} width={30} height={30}/>
              
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">
                  {item.company}
                </h1>
                <h2 className="text-sm font-semibold text-gray-400 block sm:hidden">
                  {item.year}
                </h2>
              </div>
            </div>

            <div className="flex sm:gap-2 sm:items-center">
              <h2 className="text-lg font-semibold text-gray-400 hidden sm:block">
                {item.year}
              </h2>
            </div>
          </div>

          <div className="w-full bg-black rounded-md p-5 shadow-inner">
            <p className="flex flex-col">
              <span className="font-bold text-white text-lg">
                {item.position}
              </span>
              <span className="text-gray-400 text-sm mt-2">
                {item.description}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
