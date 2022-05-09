import { useEffect, useState } from "react"

const useData = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('https://polar-atoll-56394.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    return [laptops]

}

export default useData