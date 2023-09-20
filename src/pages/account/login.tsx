// import RightSign from '@/components/RightSign';
import Stepper from '@/components/Stepper';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Error } from '@/components/Error';

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required('First name must be at least two characters.'),
  lastname: yup.string().required('Last name must be at least two characters.'),
  email: yup
    .string()
    .email('Invalid email address.')
    .required('Email address is required.'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <section>
        <div className="flex flex-wrap items-center  text-neutral-800 bg-green-400 w-auto">
          <div className="h-auto block  bg-white shadow-lg z-10">
            <div className="g-0 lg:flex lg:flex-wrap ">
              <div className="h-[100vh] px-4 md:px-0 md:py-28 ">
                <div className="md:mx-6 md:p-12  ">
                  {/* <!--Logo--> */}
                  <div className="text-center max-w-lg">
                    <div className="font-bold text-3xl text-purple-600">
                      WritingHero.
                    </div>
                  </div>

                  <div className="text-left mt-8">
                    <div className="font-extrabold text-2xl text-black">
                      Sign in to your account
                    </div>
                    <div className=" text-sm text-black">
                      Or{' '}
                      <a href="#" className="text-indigo-600">
                        create an account
                      </a>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-lg mt-6"
                  >
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label
                          className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email address
                        </label>
                        <input
                          className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                          {...register('email', {
                            pattern: {
                              value: /.+@.+/,
                              message: 'Invalid Email',
                            },
                          })}
                        />
                        {errors.email && (
                          <Error message={errors.email.message!} />
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        className="shadow w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
                        type="submit"
                        // onClick={onNext}
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={'/bglog.jpg'}
            alt={''}
            width={100}
            height={100}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
      </section>
    </>
  );
}
