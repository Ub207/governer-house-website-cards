import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="mt-10 mx-10">
      {/* First Row: 3 Cards */}
      <section className="flex justify-between gap-5 mb-10">
        {/* Card 1 */}
        <div className="bg-white w-1/3 h-80 rounded-lg shadow-lg overflow-hidden">
          <Image src="/image-01.jpg" alt="Card Image 1" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Card Title 1</h2>
            <p className="text-gray-600">This is a description for Card 1.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white w-1/3 h-80 rounded-lg shadow-lg overflow-hidden">
          <Image src="/image-02.jpg" alt="Card Image 2" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Card Title 2</h2>
            <p className="text-gray-600">This is a description for Card 2.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white w-1/3 h-80 rounded-lg shadow-lg overflow-hidden">
          <Image src="/image-03.jpg" alt="Card Image 3" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Card Title 3</h2>
            <p className="text-gray-600">This is a description for Card 3.</p>
          </div>
        </div>
      </section>
      {/* Second Row: 2 Cards */}
      <section className="flex justify-between gap-5">
        {/* Card 4 */}
        <div className="bg-white w-1/2 h-80 rounded-lg shadow-lg overflow-hidden">
          <Image src="/image-04.jpg" alt="Card Image 4" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Card Title 4</h2>
            <p className="text-gray-600">This is a description for Card 4.</p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white w-1/2 h-80 rounded-lg shadow-lg overflow-hidden">
          <Image src="/image-05.jpg" alt="Card Image 5" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Card Title 5</h2>
            <p className="text-gray-600">This is a description for Card 5.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

