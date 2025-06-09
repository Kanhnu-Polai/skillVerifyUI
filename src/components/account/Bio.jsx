import { FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { MdEmail, MdLocationCity, MdPerson } from 'react-icons/md';
import { FaSchool, FaUniversity, FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { HiIdentification } from 'react-icons/hi';
import UpdateIcon from '@mui/icons-material/Update';
import AddIcon from '@mui/icons-material/Add';

const Bio = () => {
  return (
    <div className="w-80 bg-slate-200 shadow-md rounded-lg p-6 font-poppins text-sm text-gray-800 space-y-4 relative">

      <div className='w-full flex justify-end space-x-1 p-1'>
        
       <button className='text-sm p-1 rounded-md border bg-blue-950 text-slate-300 cursor-pointer  hover:border-slate-950 antialiased' >Update</button>
      </div>
      <hr />
      {/* Profile Header */}
      <div className="flex  justify-around items-start">
        <div className="relative group w-fit">
  <img
    src="pro.jpg"
    alt="Profile"
    className="w-24 h-24 rounded-xl object-cover"
  />
  <button className="absolute top-10 right-0 text-xs cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-green-600 rounded-md p-0.5 text-white ">
    Update
  </button>
</div>
        <div className='mt-2'>
          <h2 className="text-lg font-semibold">Kanhnu Polai</h2>
          <p className="text-xs text-gray-500">#ERD246534</p>
        </div>
      </div>

      {/* About Section */}
      <hr />
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold">About</h3>
         
        </div>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <FaPhone className="text-sm" />
          <span>(+91) 9337172632</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <MdEmail className="text-sm" />
          <span>kanhnupolai79@gmail.com</span>
        </div>
      </div>

      {/* Address Section */}
      <div className="border-t border-gray-200 pt-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold">Address</h3>
         
        </div>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <FaMapMarkerAlt className="text-sm" />
          <span>Aditya Nagar , Rayagada</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <MdLocationCity className="text-sm" />
          <span>Odisha , India</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <MdPerson className="text-sm" />
          <span>765001</span>
        </div>
      </div>
{/* Education Details */}
<div className="border-t border-gray-200 pt-2 mt-4 space-y-3">
  <div className="flex justify-between items-center mb-2">
    <h3 className="text-sm font-semibold">Education</h3>
 <div className="relative group inline-block">
  <AddIcon className="text-slate-900 border rounded-full cursor-pointer p-1 hover:bg-slate-800 hover:text-slate-50" />

  {/* Tooltip */}
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap shadow-md">
    Add more education fields
  </div>
</div>
   
  </div>

  {/* School */}
  <div className="flex items-center gap-2 text-gray-600 mt-1">
    <FaSchool className="text-sm" />
    <span>Jsco Public School, Bhubaneswar</span>
  </div>

  {/* +2 */}
  <div className="flex items-center gap-2 text-gray-600 mt-1">
    <FaUniversity className="text-sm" />
    <span>CHSE Odisha - Science, 2019</span>
  </div>

  {/* Undergraduate */}
  <div className="flex items-center gap-2 text-gray-600 mt-1">
    <FaGraduationCap className="text-sm" />
    <span>B.Sc in Computer Science - Utkal University, 2022</span>
  </div>

  {/* Masters */}
  <div className="flex items-center gap-2 text-gray-600 mt-1">
    <FaUserGraduate className="text-sm" />
    <span>M.Sc in Computer Science - Vikram Dev University (Pursuing)</span>
  </div>
</div>
    </div>
  );
};

export default Bio;