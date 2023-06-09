import { useState, useEffect, useCallback } from "react";

function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() =>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setNewValue = useCallback((value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key]); 

    return {storedValue, setNewValue}
}

export default useLocalStorage;