import { useCallback } from "react"


export const useDebounce = (callback: Function, delay: number) : Function => {

    let timer: number;

    const debouncedCallback = useCallback((...args: any[]) => {
        if (timer) {
            clearTimeout(timer)
        }
    
        timer = setTimeout(() => {
            callback(...args)
        }, delay)

    }, [callback, delay])

    return debouncedCallback;
}