import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

export const Container : React.FC<ContainerProps> = ({children}) => {
    return <div className="max-w-screen-xl mx-auto px-3">
        {children}
    </div>
}