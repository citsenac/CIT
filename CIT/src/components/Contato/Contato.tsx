import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import SpinLoader from '../Partials/SpinLoader';

type Inputs = {
    nome: string
    email: string
}

export default function Contato({target}: {target: string}) {

    const [erro, setErro] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successAnimation, setSuccessAnimation] = useState(false);

    {/* React Hook Form */}
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<Inputs>({mode: "onChange", reValidateMode: "onSubmit"});
    const [formData, setFormData] = useState({nome: '', email: ''});

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;

        setErro(false);
        if (name === 'email') {
            clearErrors('email');
        
        }
        if (name === 'nome') {
            clearErrors('nome');
        }

        setFormData(oldData => {
            return{...oldData, [name]: value}
        });
    }

    const onSubmit: SubmitHandler<Inputs> = () => {
        setLoading(true);
        sendEmail();
    }

    const registerOptions = {
        nome:{
            required: "Nome é obrigatório!",
            minLength: {
                value: 3,
                message: "O nome deve ter pelo menos 3 letras!"
            }
        },
        email: {
            required: "Email é obrigatório!",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Endereço de email inválido!"
            }
        }
    }

    {/* EmailJS send */}

    const sendEmail = () => {

        emailjs
        .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {to_name: formData.nome, to_email: formData.email}, {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
            () => {
                setLoading(false);
                setFormData({nome: '', email: ''});
                setSuccessAnimation(true);
            },
            () => {
                setLoading(false);
                setErro(true);
            },
        );
    };
    
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
    };

    if(successAnimation) {
        setTimeout(
            () => {
                setSuccessAnimation(false);
            },
            3000
        )
    }

    return (
        <section id={target} className="relative mt-16 px-2 grid grid-cols-2 grid-rows-5">
            <h3 className="text-2xl font-semibold text-center text-white mx-auto poppins col-span-2 row-span-1 md:col-span-1">
                Entre em contato com a gente
            </h3>
            <form onSubmit={handleFormSubmit} className="w-full col-span-2 row-span-3 md:col-span-1 md:row-span-6">
                <div className="flex flex-col gap-y-2 mb-6 relative">
                    <label htmlFor="nome" className="text-white poppins font-semibold text-lg ml-4">
                        Nome
                    </label>
                    <input {...register("nome", registerOptions.nome)} onChange={handleChange} value={formData.nome} required type="text" name="nome" id="nome" placeholder="Nome"
                        data-invalid={errors.nome ? 'true' : 'false'}
                        className={`w-full bg-[#D9D9D9] focus:outline-[#5D5D5D] focus:outline-1 rounded-lg p-4 text-black font-semibold text-xs poppins border-solid border-2 ${errors.nome ? 'border-red-500' : 'border-[#D9D9D9]'}`} />
                    {errors.nome && <span className="absolute -bottom-6 left-0 text-red-500">{errors.nome.message}</span>}
                </div>
                <div className="flex flex-col gap-y-2 mb-8 relative">
                    <label htmlFor="email" className="text-white poppins font-semibold text-lg ml-4 relative">
                        E-mail
                    </label>
                    <div className="relative w-full flex items-center">
                        <input {...register("email", registerOptions.email)} onChange={handleChange} value={formData.email} required type="email" name="email" id="email" placeholder="email@gmail.com"
                            data-invalid={erro || errors.email ? 'true' : 'false'}
                            className={`pl-10 w-full bg-[#D9D9D9] focus:outline-[#5D5D5D] focus:outline-1 rounded-lg p-4 text-black font-semibold text-xs poppins border-solid border-2 ${erro || errors.email ? 'border-red-500' : 'border-[#D9D9D9]'}`} />
                        <img src="icons/mail.svg" alt="Ícone de envelope de carta" className="absolute left-2 w-6 h-6" />
                    </div>
                    {errors.email && <span className="absolute -bottom-6 left-0 text-red-500">{errors.email.message}</span>}
                    {erro && <span className="absolute -bottom-6 left-0 text-red-500">Email inválido</span>}
                </div>
                <div className={`w-full relative flex justify-center items-center mb-6 ${loading || !formData.nome || !formData.email || successAnimation || erro ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                    <button className={`w-full py-3 rounded-lg flex justify-center items-center text-white bg-[#410C85] font-medium text-base poppins`}
                        disabled={loading || !formData.nome || !formData.email || successAnimation || erro }
                        data-invalid={erro || errors.email || errors.nome ? 'true' : 'false'}
                        data-success={successAnimation ? 'true' : 'false'}
                        data-normal={!loading && !erro && !errors.email && !errors.nome && !successAnimation ? 'true' : 'false'}>
                        {loading ?
                            <SpinLoader />
                        : ''}
                        {successAnimation && 'Enviado'}
                        {(erro || errors.email || errors.nome) && "Erro"}
                        {!loading && !erro && !errors.email && !errors.nome && !successAnimation && 'Enviar'}
                    </button>
                    {successAnimation &&
                        <div className="absolute text-white font-medium text-base poppins w-full h-full growing-bg-success left-0 top-0 rounded-lg flex justify-center items-center">
                            <svg className="checkmark w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                            <span className='sr-only'>O envio foi um sucesso</span>
                        </div>
                    }
                    {(erro || errors.email || errors.nome) &&
                        <div className="overflow-hidden absolute text-white font-medium text-base poppins w-full h-full py-3 growing-bg-error left-0 top-0 rounded-lg flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                            <span className='sr-only'>O envio falhou</span>
                        </div>
                    }
                </div>
            </form>
            <span className="mt-3 col-span-2 row-span-1 md:col-span-1 sf-pro-display text-white text-lg">
                Ao inserir seu nome e e-mail, receberemos suas informações e entraremos em contato com você o mais breve possível.
            </span>
        </section>
    )
}