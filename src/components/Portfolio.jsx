import css from "../../public/css.jpeg";
import htmln from "../../public/htmln.png";
import java from "../../public/java.png";
import javas from "../../public/javas.png";
import reac from "../../public/reac.png";
import sql from "../../public/sql.png";

export default function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: htmln,
      name: "HTML"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
    {
      id: 3,
      logo: javas,
      name: "JavaScript"
    },
    {
      id: 4,
      logo: reac,
      name: "React Js"
    },
    {
      id: 5,
      logo: java,
      name: "JAVA"
    },
    {
      id: 6,
      logo: sql,
      name: "MySql"
    }
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Project</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {cardItems.map(({ id, logo, name }) => (
            <div key={id} className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
              <img src={logo}  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] " alt="image missing" />
              <div>
                <div className="px-2 text-xl font-bold mb-2">{name}</div>
                <p className="px-2 text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="justify-around px-6 py-4 space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
