type variantInterface = "success" | "danger"

interface AlertModel {
    show: boolean,
    timer: number,
    variant: variantInterface,
    message: string
}

export default AlertModel