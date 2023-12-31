import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
import {HiPencilAlt} from "react-icons/hi"


export default function TasksList() {
    return (
        <>
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">Task Title</h2>
                    <div>Task Description</div>
                </div>

                <div className="flex gap-2">
                    <RemoveBtn/>
                    <Link href={'/editTask/123'}><HiPencilAlt size={24}/></Link>
                </div>
            </div>
        </>
    )
}