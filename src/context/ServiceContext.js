import React, {createContext, useContext, useState, useEffect} from "react"
import {allServices} from "../data/services_data"

export const ServiceContext = createContext();

const initialData = []

export const ServiceContextProvider = (props) => {
const [serviceData, setServiceData] = useState(allServices)

return (
    <ServiceContext.Provider value={{serviceData, setServiceData}}>
        {props.children}
    </ServiceContext.Provider>
)}