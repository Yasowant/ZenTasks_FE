import { Button } from "@/components/ui/button";
import { RootState } from "@/store/Store";
import { setSelectedGroup } from "@/store/slice/groupSlice";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FaCircleDot } from "react-icons/fa6";

const Sidebar = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.sidebar.items);
  const [isDark, setIsDark] = useState<boolean>(false);
  let navigate = useNavigate();
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleClick = (itemId: string) => {
    dispatch(setSelectedGroup(itemId));
  };
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.setItem("accessToken", "");
    navigate("/");
  };

  return (
    <aside className="w-[250px] fixed border-r h-[calc(100vh-66px)] overflow-y-auto pt-3">
      <div className="p-[10px]">
      <h3 className={`text-[12px] pb-2  ${isDark ? "text-gray-500 " :""} `}>Groups</h3>
      <ul className="flex flex-col gap-1 justify-start items-start ">
        {/* {items.map((item) => (
          <li key={item.id} className="text-start break-words" onClick={() => handleClick(item.id)}>
            <button >{item.label}</button>
          </li>
        ))} */}
        <li className="flex text-[14px] items-center gap-2 ">
          <FaCircleDot  className="text-[#52357B]"/>
          Project 1
        </li>
        <li className="flex text-[14px] items-center gap-2 ">
          <FaCircleDot className="text-[#AF3E3E]"/>
          Project 2
        </li>
      </ul>
      </div>
      <div className="bottom-0 flex justify-between items-center absolute border-t w-[100%] py-2 px-2 ">
        <Button
          variant="ghost"
          onClick={toggleTheme}
          size="icon"
          className="rounded border hover:scale-105"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <button
          className={`bg-red-600  border rounded p-[9px] `}
          onClick={() => handleLogout()}
        >
          <HiOutlineLogout className={`h-5 w-5 text-white`} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
