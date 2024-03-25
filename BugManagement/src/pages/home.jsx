import { useEffect } from "react";
import {useTheme} from "../contents/themeContext";

function Home() {
    const {theme} = useTheme();
    return (
      <div className="align-center">
      <div className="text-9xl text-center font-bold mb-8">Words</div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">shishirpokhrel.com</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Bug Management</button>
      </div>
      </div>
  );
}

export default Home;