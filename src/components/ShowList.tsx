import { useEffect,useState } from "react"
import IDataList from "../model/IDataList"
import { getDataFromServer } from "../services/menu";
import React from "react";

function ShowList() {
    const [items, setItems] = useState<IDataList[]>([]);

    useEffect(() =>{
        const fetchMenu = async () => {
            try {
                const data = await getDataFromServer();
                setItems(data)
            }catch(error: any) {

            }
        };
        fetchMenu();
    })

    return(
        <>
        <header>Expense Tracker</header>
        <button>Add</button>

        <>
        <div className="use-inline data header-color">Data</div>
        <div className="use-inline header-color">Product Purchased</div>
        <div className="use-inline price header-color">Price</div>
        <div className="use-inline header-color">Payee</div>
        </>
        {
            items &&
            items.map((user, ind)=>(
                <div key={ind}>
                    <div className="use-inline data">{user.setDate}</div>
                    <div className="use-inline">{user.product}</div>
                    <div className="use-inline price">{user.price}</div>
                    <div className="use-inline">{user.payeeName}</div>
                </div>
            )) }
        <hr />
        </>
    )
}

export default ShowList