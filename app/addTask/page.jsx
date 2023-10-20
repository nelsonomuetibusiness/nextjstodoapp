function addTask() {
    return ( 
        <form className="flex flex-col gap-3">
            <input className="border border-yellow-500 mt-4 px-8 py-2" type="text" placeholder="Add new task"/>

            <input className="border border-yellow-500 mt-4 px-8 py-2" type="text" placeholder="Task Description"/>

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Add Task
            </button>
        </form>
     );
}

export default addTask;