import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <h1 className="text-center text-5xl font-bold pt-4 underline">
          Color Changer Game
        </h1>
        <br />
        <br />
        <div className="flex flex-wrap justify-around gap-4 w-[90%] m-auto">
          <button
            onClick={() => setColor("green")}
            className="w-[130px] h-[130px] bg-[#008000] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Green
          </button>

          <button
            onClick={() => setColor("red")}
            className="w-[130px] h-[130px] bg-[#ff0000] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Red
          </button>

          <button
            onClick={() => setColor("pink")}
            className="w-[130px] h-[130px] bg-[#ffc0cb] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Pink
          </button>

          <button
            onClick={() => setColor("purple")}
            className="w-[130px] h-[130px] bg-[#800080] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Purple
          </button>

          <button
            onClick={() => setColor("orange")}
            className="w-[130px] h-[130px] bg-[#FFA500] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Orange
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="w-[130px] h-[130px] bg-[#FFFF00] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("orchid")}
            className="w-[130px] h-[130px] bg-[#DA70D6] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Orchild
          </button>

          <button
            onClick={() => setColor("maroon")}
            className="w-[130px] h-[130px] bg-[#800000] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Maroon
          </button>

          <button
            onClick={() => setColor("blue")}
            className="w-[130px] h-[130px] bg-[#0000FF] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("white")}
            className="w-[130px] h-[130px] bg-[#ffffff] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            White
          </button>
          <button
            onClick={() => setColor("gold")}
            className="w-[130px] h-[130px] bg-[#FFD700] border border-amber-100 rounded-bl-4xl rounded-tr-4xl"
          >
            Gold
          </button>
          <button
            onClick={() => setColor("crimson")}
            className="w-[130px] h-[130px] bg-[#DC143C] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Crimson
          </button>
          <button
            onClick={() => setColor("aqua")}
            className="w-[130px] h-[130px] bg-[#00FFFF] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("magenta")}
            className="w-[130px] h-[130px] bg-[#FF00FF] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Magenta
          </button>
          <button
            onClick={() => setColor("olive")}
            className="w-[130px] h-[130px] bg-[#808000] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Olive
          </button>
          <button
            onClick={() => setColor("coral")}
            className="w-[130px] h-[130px] bg-[#FF7F50] border border-amber-50 rounded-bl-4xl rounded-tr-4xl"
          >
            Coral
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
