import React from "react";

const TableHead = ({data})=>{
    console.log(data)
    return(
        <thead>
            <tr>
                {
                    data && data.map((item, index)=>{
                        return(
                            <td key={`table-thead-${index}`}>
                                <b>{item}</b>
                            </td>
                        )
                    })
                }
            </tr>
        </thead>
    )
};

export default TableHead;