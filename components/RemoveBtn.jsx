import {HiOutlineTrash} from  'react-icons/hi'

function RemoveBtn() {
    return ( 
        <button className='text-red-600'>
            <HiOutlineTrash size={24} />
        </button>
     );
}

export default RemoveBtn;