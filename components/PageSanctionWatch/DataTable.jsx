import React from "react";



const DataTable = () => {
    return(
        <section>
            <div className="max-w-1140px mx-auto">
                <table class="w-full my-3">
                    <thead className="bg-golden">
                        <tr className="text-left">
                            <th className="text-base font-roboto leading-0 border border-gray-300 p-[10px]">ID</th>
                            <th className="text-base font-roboto leading-0 border border-gray-300 p-[10px]">Sanction</th>
                            <th className="text-base font-roboto leading-0 border border-gray-300 p-[10px]">PEP</th>
                            <th className="text-base font-roboto leading-0 border border-gray-300 p-[10px]">Classification</th>
                            <th className="text-base font-roboto leading-0 border border-gray-300 p-[10px]">Name</th>
                            <th className="text-base font-roboto leading-0 border border-gray-300 p-[10px]">Status</th>
                            <th className="text-base font-roboto leading-0 border border-gray-300 p-[10px]">Details</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </section>
    )
}


export default DataTable