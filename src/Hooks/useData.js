import { useEffect, useState } from "react"

const useData = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    return [laptops]

}

export default useData