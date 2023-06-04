import NavComponent from "./header"
const Layout = ({children})=>{
    return <div>
        <NavComponent/>
        <main>{children}</main>
    </div>
};

export default Layout;