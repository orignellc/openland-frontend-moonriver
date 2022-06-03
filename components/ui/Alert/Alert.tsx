import { Dispatch, FC, SetStateAction, useEffect } from "react"
import AlertModel from "../../../models/AlertModel"

interface AlertProps {
    setShowAlert: Dispatch<SetStateAction<AlertModel>>
    showAlert: AlertModel
}

const Alert: FC<AlertProps> = (props) => {
    const { setShowAlert, showAlert: { show, timer, variant, message } } = props

    const successVariant = ["bg-green-400", "bg-green-600", "bg-green-800"]
    const dangerVariant = ["bg-red-400", "bg-red-600", "bg-red-800"]

    const backgroundColor = variant === "danger" ? dangerVariant : successVariant

    const alertJsx = <div className={`text-center fixed top-[5%] right-[5%] z-[900] rounded-md ${backgroundColor[0]} py-4 lg:px-4`}>
        <div className={`p-2 ${backgroundColor[1]} items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`} role="alert" >
            <span className={`flex rounded-full ${backgroundColor[2]} uppercase px-2 py-1 text-xs font-bold mr-3`}>New</span>
            <span className="font-semibold mr-2 text-left flex-auto">{message}</span>
        </div>
    </div>

    useEffect(() => {
        const interval = setInterval(() => {
            setShowAlert({ show: false, timer, variant, message })
        }, timer)

        return () => clearInterval(interval)
    }, [])

    return show ? alertJsx : <></>
}

export default Alert