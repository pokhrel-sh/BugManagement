import { useEffect } from "react";
import {useTheme} from "../contents/themeContext";

function Database() {
    const {theme} = useTheme();
    return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Words</h1>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">shishirpokhrel.com</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Bug Management</button>
      </div>
    </div>
  );
}

export default Database;