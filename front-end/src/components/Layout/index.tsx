import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = {
    children: React.ReactNode
    startTransparent?: boolean
}

export const Layout: React.FC<Props> = ({ children, startTransparent }) => {
        return (
            <>
                <Header startTransparent={startTransparent} />
                {children}
                <Footer />
            </>
        )
    }