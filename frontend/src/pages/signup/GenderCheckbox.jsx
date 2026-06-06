const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex gap-6 px-2 py-3 bg-slate-700 rounded-lg border border-slate-600'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "text-blue-400" : "text-slate-300"}`}>
					<input
						type='radio'
						name='gender'
						className='radio radio-primary'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
					<span className='label-text font-medium'>Male</span>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "text-blue-400" : "text-slate-300"}`}>
					<input
						type='radio'
						name='gender'
						className='radio radio-primary'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
					<span className='label-text font-medium'>Female</span>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;

  //Starter code for this file
//   const GenderCheckbox = () => {
//     return (
//       <div className="flex gap-4"> 
//         <div className='form-control'>
//           <label className='label gap-2 cursor-pointer'>
//             <span className='label-text'>Male</span>
//             <input type='checkbox' className='checkbox border-slate-900' />
//           </label>
//         </div>
//         <div className='form-control'>
//           <label className='label gap-2 cursor-pointer'>
//             <span className='label-text'>Female</span>
//             <input type='checkbox' className='checkbox border-slate-900' />
//           </label>
//         </div>
//       </div>
//     )
//   }
  
//   export default GenderCheckbox;
  
  