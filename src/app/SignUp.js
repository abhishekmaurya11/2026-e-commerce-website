
import { submitForm } from "./actions/auth.ts";
export default function SignUp(){
    return (
        <div className='signupformclass hidden p-5'>
            <form action={submitForm} method="POST" className='p-3'>
                <input type="text" placeholder="Type Name..." name="name" required className="p-2 bg-green-100" ></input>

                <input type="email" placeholder="Type Email..." name="email" required className="p-2 bg-green-100"></input>

            <button   type='submit ' className="click_signup p-2 bg-orange-100" >Click Here To SignUp</button>
            
            </form>
        </div>
    );
}