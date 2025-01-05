import React, { useContext } from 'react'
import Table from '../components/Table';
import { AppContext } from '../state/context/AppContext';

const LoanManagement = () => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const { isLoanDetailsOpen, setIsLoanDetailsOpen } = useContext(AppContext);
    const columns = [
        { label: "Loan ID", key: "id" },
        { label: "Amount", key: "amount" },
        { label: "Status", key: "status" },
        { label: "Tenure", key: "tenure" },
    ];
    const data = [
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Paid", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Active", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Active", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Active", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Active", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Active", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Active", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },
        { id: "John Doe", amount: 25, status: "Active", tenure: "2 Months" },
        { id: "Emeka Okoye", amount: 452, status: "Active", tenure: "4 Months" },
        { id: "Ifeanyi Ugwu", amount: 3, status: "Active", tenure: "28 Months" },
        { id: "Obinna Nweke", amount: 250, status: "Paid", tenure: "290 Months" },
        { id: "Okafor Chidi", amount: 389, status: "Paid", tenure: "242 Months" },

    ];
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentData = data.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );
    const openLoanDetails = (index:number)=>{
        setIsLoanDetailsOpen(index)
    }
   
    return (
        <div className='bg-white my-4 rounded-lg h-max w-[380px] sm:w-full'>
            <h2 className='px-6 py-4'>Loan History</h2>
            <Table columns={columns} data={currentData.map((item)=>item)} loan openLoanDetails={openLoanDetails}/>
            <div className="flex justify-center space-x-4 mt-4 mb-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
              currentPage === index
                ? "border-purple-500 bg-purple-500 text-white"
                : "border-gray-300 bg-white text-gray-500"
            } transition duration-300`}
          >
            <p className='text-sm'>{index + 1}</p>
          </button>
        ))}
      </div>
        </div>
    )
}

export default LoanManagement
