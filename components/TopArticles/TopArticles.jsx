import Image from "next/image";
import { Button } from "..";
import { ThreeDots } from "@/svgs";

const topArticles = [
  { id: 1, imageUrl: "/Rectangle 684.png" },
  { id: 2, imageUrl: "/Rectangle 685.png" },
  { id: 3, imageUrl: "/Frame 1000001069.png" },
  { id: 4, imageUrl: "/Rectangle 684.png" },
  { id: 5, imageUrl: "/Rectangle 685.png" },
  { id: 6, imageUrl: "/Frame 1000001069.png" },
];

export function TopArticles() {
  return (
    <>
      <div className="flex justify-between my-8 px-10">
        <p className="text-2xl font-semibold">Top Articles</p>
        <p className="text-voilet-50 text-base font-light">See all</p>
      </div>

      <div className="pl-10">
        <div className="flex overflow-x-scroll hide-scroll-bar flex-nowrap gap-2">
          {topArticles.map(({ id, imageUrl }) => (
            <div
              key={id}
              className="inline-block flex-shrink-0 rounded-xl p-2 bg-white"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={imageUrl}
                  alt={`${imageUrl}-${id}`}
                  width={340}
                  height={200}
                />
              </div>
              <div className="text-sm text-grey-50">
                Why Branding matters for your Business
              </div>

              {/* <div className="flex overflow-x-scroll flex-nowrap gap-2">
                {["Branding", "Communication", "Branding"].map((item, i) => (
                  <div
                    key={i}
                    className="bg-grey-100 text-grey-50 p-2 overflow-hidden inline-block flex-shrink-0"
                  >
                    {item}
                  </div>
                ))}
              </div> */}
              <div className="flex gap-2">
                <button className="bg-voilet-100 flex-grow rounded-lg py-3 text-md text-voilet-50">
                  View
                </button>
                <div className="flex items-center bg-grey-150 px-4 rounded-lg">
                  <ThreeDots />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
