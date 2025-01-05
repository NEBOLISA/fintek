import React, { useContext, useEffect, useRef } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { AppContext } from "../state/context/AppContext";
interface Columns {
    key: string;
    label: string;
}
interface Data {
    [key: string]: string | number
}
interface TableProps {
    columns: Columns[];
    data: Data[],
    loan?: boolean
    openLoanDetails?: (index: number) => void
}
const Table: React.FC<TableProps> = ({ columns, data, loan, openLoanDetails }) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    
    const { isLoanDetailsOpen,setIsLoanDetailsOpen } = useContext(AppContext);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            
          if (dropdownRef.current && !dropdownRef.current!.contains(event.target as Node)) {
            setIsLoanDetailsOpen(null);
           
          }
        };
    
       
        document.addEventListener("mousedown", handleClickOutside);
    
       
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-100">
                <thead>
                    <tr className="bg-purple-200 text-gray-600 uppercase text-sm leading-normal">
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className="py-3 px-6 text-left font-medium border-b"
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light relative">
                    {data.map((row, index) => (

                        <tr
                            key={index}
                            className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-purple-50"
                                } hover:bg-gray-100 relative`}
                        >
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className="py-3 px-6 border-b"
                                >
                                    {loan && col.key === "status" ? (
                                        <p
                                            className={`text-white px-2 py-1 rounded  ${row["status"] === "Active" ? "bg-red-500 cursor-pointer" : "bg-green-500 cursor-default "
                                                }`}
                                        >
                                            {row["status"] === "Active" ? <p className="flex items-center justify-between">{row[col.key]}<IoIosArrowDropright onClick={() =>{ openLoanDetails && openLoanDetails(index)}} />
                                               
                                            </p> : row[col.key]}
                                        </p>
                                    ) : (
                                        <p>{row[col.key]}</p>
                                    )}

                                </td>
                            ))}
                        </tr>


                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
