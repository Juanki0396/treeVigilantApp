import ToogleButton from "./ToogleButton"

const DarkModeToogle = (): JSX.Element => {
    const toogleDarkMode = (_e: React.MouseEvent<HTMLElement>): void => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
        }
        else {
            document.documentElement.classList.add('dark')
        }
    }

    const startToogled = (): boolean => document.documentElement.classList.contains('dark')

    return  <ToogleButton onClick={toogleDarkMode} startToogled={startToogled} buttonText="Darky"/>
}

export default DarkModeToogle
