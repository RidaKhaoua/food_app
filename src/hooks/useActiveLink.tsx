import { useState } from "react"

const useActiveLink = (props: string) => {
    const [activeLink, setActiveLink] = useState(props);

    const handleActiveLink = (newLink: string) => {
        setActiveLink(newLink)
    }

    return {
        activeLink,
        handleActiveLink
    }
}

export default useActiveLink