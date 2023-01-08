import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error

    ] = useSignInWithEmailAndPassword(auth);

    const [errormsg, setErrormsg] = useState('')

    console.log(error);

    useEffect(() => {
        if (error) {
            setErrormsg('Password did not match or somthing is wrong! try again!')
        }
    }, [error]

    )


    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserLogin = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', {
            email,
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (googleUser) {
        navigate(from, { replace: true });
    }

    const handleForgotPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');

        } else {
            toast('Enter your email address!')
        }
    }



    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Login</h2>

                <form onSubmit={handleUserLogin} className="max-w-lg border rounded-lg mx-auto">
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
                            <input onBlur={handleEmailBlur} name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required type="email" />
                        </div>

                        <div>
                            <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
                            <input onBlur={handlePasswordBlur} name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required type="password" />

                        </div>
                        <p className=' text-red-400'>{errormsg}</p>
                        <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Log in</button>


                        <div className="flex justify-center items-center relative">
                            <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                            <span className="bg-white text-gray-400 text-sm relative px-4">Log in with social</span>
                        </div>

                        <button onClick={() => signInWithGoogle()} className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                            <svg className="w-5 h-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
                                <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
                                <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
                                <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
                            </svg>

                            Continue with Google
                        </button>
                    </div>
                    <ToastContainer />
                    <div className='bg-gray-100 flex justify-center items-center'>
                        <button onClick={handleForgotPassword} className="mx-auto pt-3 text-sm  text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">Reset Password</button>
                    </div>

                    <div className="flex justify-center items-center bg-gray-100 p-4">
                        <p className="text-gray-500 text-sm text-center">Don't have an account? <Link to='/register' className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;