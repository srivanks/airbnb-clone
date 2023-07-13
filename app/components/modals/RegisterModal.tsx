'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'

import React from 'react'
import Modal from './modal'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button/Button'

type Props = {}

function RegisterModal({}: Props) {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    setIsLoading(true)
    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((err) => toast.error('Something went wrong.'))
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to AirBnb"
        subTitle="Create an account!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        onClick={() => {}}
        icon={FcGoogle}
      />
      <Button
        outline
        label="Continue with Github"
        onClick={() => {}}
        icon={AiFillGithub}
      />
      <div className="flex flex-row items-center justify-center gap-2">
        <div>Already have an account?</div>
        <div
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={registerModal.onClose}
        >
          Log in
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      actionLabel={'Continue'}
      secondaryActionLabel={''}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      isOpen={registerModal.isOpen}
      title="Register"
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  )
}

export default RegisterModal
