import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import { InputField } from '../../components/InputField/InputField';
import { MutedLink } from '../../components/Common/Common';
import { BoldLink } from '../../components/Link/Link';

export const LoginPage = () => {
    const {
        register,
        handleSubmit,

        formState: { errors, isSubmitting },
    } = useForm();
    const onSubmit = (data) => {
        console.table(data);
        console.log(isSubmitting);
    };

    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gradient-to-r from-gray-800 to-blue-500">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-3xl font-semibold">Welcome Back!!</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <InputField
                                        value=""
                                        type="email"
                                        placeholder="xyz@xyz.com"
                                        label="Email"
                                        register={register}
                                    />
                                    {errors.Email && (
                                        <p className="text-xs text-red-500 italic">
                                            This field is required
                                        </p>
                                    )}
                                    <InputField
                                        value=""
                                        type="password"
                                        placeholder="enter password"
                                        label="Password"
                                        register={register}
                                    />
                                    {errors.Password && (
                                        <p className="text-xs text-red-500 italic">
                                            This field is required
                                        </p>
                                    )}
                                    <Button isDisabled={isSubmitting}>Sign In</Button>
                                    <MutedLink href="#">
                                        Don&apos;t have an account?
                                        <BoldLink href="#">Signup</BoldLink>
                                    </MutedLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
LoginPage.propTypes = {};
