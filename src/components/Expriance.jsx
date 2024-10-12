import C from "../../public/C.png";
import cpp from "../../public/cpp.png";
import oracal from "../../public/oracalpn.png";
import spring from "../../public/spring.png";
import tail from "../../public/wind.png";
import boot from "../../public/bootnew.png";


export default function Expriance() {
  const cardItems = [
    {
      id: 1,
      logo: boot,
      name: "Bootstrap"
    },
    {
      id: 2,
      logo: spring,
      name: "SpringBoot"
    },
    {
      id: 3,
      logo: tail,
      name: "TailwindCss"
    },
    {
      id: 4,
      logo: oracal,
      name: "Oracal"
    },
    {
      id: 5,
      logo: C,
      name: "C"
    },
    {
      id: 6,
      logo: cpp,
      name: "C++"
    }
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Expriance</h1>
        <p className="">I've More Then 1 Year Expriance In These Technologies</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-7 my-3">
          {cardItems.map(({ id, logo, name }) => (
            <div key={id} className="flex flex-col items-center justify-center border-[2px] md: w-[150px] md: h-[150px]  rounded-full p-1 cursor-pointer hover:scale-110 duration-300">
              <img src={logo}  className="w-[100px] h-[100px] rounded-full " alt="image missing" />
              <div>
                <div className=" ">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
