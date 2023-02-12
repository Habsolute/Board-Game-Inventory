import { SideNavBar } from "../navBar/sideNavBar"
import { TopNavBar } from "../navBar/topNavBar"

export const Header = () => {
    return (
        <header>
            <TopNavBar />
            <SideNavBar /> 
        </header>
    )
}