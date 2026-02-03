import Home from "./Home";


export default function Header() {

 

    return (
        <div className='p-8 border-4 flex justify-around '>
            <div className="flex justify-around w-1/3">
            <Home/>
                {/* <span>Username: abhishek11</span> */}
            </div>
            <div className="flex justify-around w-1/3">
                {/* <button>Your Cart</button> */}
                <button className="signup-btn">SignUp</button>
                <button className="login-btn">Login</button>
            </div>
        </div>
    );
}