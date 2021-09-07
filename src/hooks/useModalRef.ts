import {useRef, useEffect} from "react";
import {useHistory} from "react-router-dom";

export function useModalRef(isMounted: boolean) {
    const ref = useRef<HTMLDivElement>(null)
    const history = useHistory()

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                if (isMounted) {
                    history.push('/')
                }
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [history, isMounted])

    return [ref]
}