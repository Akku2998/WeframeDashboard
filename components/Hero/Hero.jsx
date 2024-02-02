import { Advertisements, Articles, Categories, Stories } from "@/svgs";
import { SimpleCard } from "..";

const simpleCards = [
  {
    id: 1,
    title: "Articles",
    description: "4,950 New Updates",
    icon: <Articles />,
  },
  {
    id: 2,
    title: "Categories",
    description: "4,950 New Updates",
    icon: <Categories />,
  },
  {
    id: 3,
    title: "Stories",
    description: "4,193 New Updates",
    icon: <Stories />,
  },
  {
    id: 4,
    title: "Advertisements",
    description: "928 New Updates",
    icon: <Advertisements />,
  },
];

export function Hero() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center lg:flex-row mb-8">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h4 className="pt-6 text-4xl text-black">Hello Admin,</h4>
          <p className="pt-2 text-grey-50 text-base font-light">
            This is what we got you for today
          </p>
        </div>
      </div>

      <div className="flex gap-8">
        {simpleCards.map((item) => (
          <SimpleCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
