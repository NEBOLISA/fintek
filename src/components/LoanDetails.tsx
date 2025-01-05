import React from 'react'
interface LoanDetailsProps {
    dropdownRef: React.RefObject<HTMLDivElement>;
    isLoanDetailsOpen: number | null;
    index: number;
}
const LoanDetails:React.FC<LoanDetailsProps> = ({dropdownRef, isLoanDetailsOpen, index}) => {
  return (
    <div ref={dropdownRef} onClick={(e) => e.stopPropagation()} className={`${isLoanDetailsOpen === index ? "block":"bg-white hidden"} bg-white p-4 rounded-md shadow-md absolute w-[250px] h-[300px] text-black top-5 z-40 right-4`}>
    <p className=" mb-4 font-semibold ">Loan Details</p> 
    <div >
    <p className="text-gray-500 text-center font-semibold mb-3">Loan Identification</p>
    <div className="space-y-4">
    <p className="text-gray-500 flex justify-between font-normal text-[12px]">Loan ID <span className="text-gray-600  text-end font-semibold">23784</span></p>
     <p className="text-gray-500 flex justify-between font-normal text-[12px]">Loan Type <span className="text-gray-600  text-end font-semibold">Personal Loan</span></p>
     
    </div>
    <div >
    <p className="text-gray-500 mt-3 text-center font-semibold mb-3">Loan Amount</p>
    <div className="space-y-4">
    <p className="text-gray-500 flex justify-between font-normal text-[12px]">Principal Amount <span className="text-gray-600  text-end font-semibold">$56,000</span></p>
     <p className="text-gray-500 flex justify-between font-normal text-[12px]">Remaining Balance <span className="text-gray-600  text-end font-semibold">$39,000</span></p>
     </div>
    </div>
    </div>
 </div>
  )
}

export default LoanDetails
