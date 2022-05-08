import { useEffect, useState } from "react"

const useData = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    return [laptops]

}

export default useData