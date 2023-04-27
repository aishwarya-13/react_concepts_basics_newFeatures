import React from "react";

const TableBody = ({data})=>{
    return(
        <tbody>
            {
                data && data.map((item, index)=>{
                    return(
                        <tr key={`table-body-${index}`}>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TableBody;