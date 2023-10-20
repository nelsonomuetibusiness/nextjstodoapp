import Link from "next/link";

export default function Navbar () {
    return ( 
        <nav className="flex justify-between item-center bg-green-800 px-8 py-3 rounded shadow-2xl">
            <Link className="text-white font-bold" href={"/"}>Awesome Todo App</Link>
            <Link className="bg-white p-2 rounded-full" href={"/addTask"}>Add Task</Link>
        </nav>
     );
}

