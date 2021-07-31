// import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import Button from '../../components/FormElements/Button';
import { Button } from '../../components/Button/Button';
import { InputField } from '../../components/FormElements/InputField';

function Register() {
    // form validation rules
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        name: Yup.string().required('Name is required'),
        userName: Yup.string().required('User name is required'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        contactNumber: Yup.string()
            .required('Phone Number is required')
            .min(10, 'Incorrect Phone number')
            .max(10, 'Incorrect Phone number'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Ts & Cs is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert(JSON.stringify(data, null, 4));
        console.table(data);
        return false;
    }

    return (
        <div>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gradient-to-r from-gray-800 to-blue-500">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-3xl font-semibold">
                                    Create a Symetry Account !
                                </h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="relative space-y-2 ">
                                            <div className="relative">
                                                <InputField
                                                    value=""
                                                    type="text"
                                                    placeholder="name"
                                                    label="Name"
                                                    register={register}
                                                />
                                                <div className="text-sm font-semibold text-red-700">
                                                    {errors.name?.message}
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <InputField
                                                    value=""
                                                    type="text"
                                                    placeholder="username"
                                                    label="User Name"
                                                    register={register}
                                                />
                                                <div className="text-sm font-semibold text-red-700">
                                                    {errors.userName?.message}
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <InputField
                                                    value=""
                                                    type="email"
                                                    placeholder="xyz@xyz.com"
                                                    label="Email"
                                                    register={register}
                                                />
                                                <div className="text-sm font-semibold text-red-700">
                                                    {errors.email?.message}
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <InputField
                                                    value=""
                                                    type="text"
                                                    placeholder="91xxxx..."
                                                    label="Contact Number"
                                                    register={register}
                                                />
                                                <div className="text-sm font-semibold text-red-700">
                                                    {errors.contactNumber?.message}
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <InputField
                                                    value=""
                                                    type="password"
                                                    placeholder="enter password"
                                                    label="Password"
                                                    register={register}
                                                />
                                                <div className="text-sm font-semibold text-red-700">
                                                    {errors.password?.message}
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <InputField
                                                    value=""
                                                    type="password"
                                                    placeholder="enter password again"
                                                    label="Confirm Password"
                                                    register={register}
                                                />
                                                <div className="text-sm font-semibold text-red-700">
                                                    {errors.confirmPassword?.message}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative space-y-3 space-x-4">
                                            <input
                                                name="acceptTerms"
                                                type="checkbox"
                                                {...register('acceptTerms')}
                                                id="acceptTerms"
                                                className={`px-3 py-2 border border-gray-300  ${
                                                    errors.acceptTerms ? 'is-invalid' : ''
                                                }`}
                                            />
                                            <label
                                                htmlFor="acceptTerms"
                                                className="form-check-label"
                                            >
                                                Accept Terms & Conditions
                                            </label>
                                            <div className="text-sm font-semibold text-red-700">
                                                {errors.acceptTerms?.message}
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <Button type="submit" text="Register" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Register };
