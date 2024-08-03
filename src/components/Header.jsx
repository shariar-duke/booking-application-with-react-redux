import logo from "../assets/lws-logo.svg"
export default function Header() {
    return (
        <header id="header">
            <div className="px-16 py-8 flex justify-between">
                <img className="h-[70px]" src={logo} alt="lws-logo" />
                <div className="flex items-center gap-[20px]">
                    <a className="text-white font-bold text-[20px] min-w-[50px] " href="#">Home</a>
                    <button className="text-white text-[20px] font-bold bg-[#780bcd] px-[30px] py-[8px] rounded-[80px]">Login</button>
                </div>
            </div>
        </header>
    )
}
