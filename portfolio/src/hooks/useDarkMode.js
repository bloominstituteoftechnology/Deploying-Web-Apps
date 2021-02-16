import useLocalStorage from './useLocalStorage'

const useDarkMode = (theme) => {
    const [value, setvalue] = useLocalStorage('mode', theme);

    const handleToggle = (e) => {
        setvalue(!value)
    }
    return [value, handleToggle]
}

export default useDarkMode;