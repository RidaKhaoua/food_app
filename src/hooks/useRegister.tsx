import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { singUpShema, singUpType } from "@validation/singUpShema";
import useEmailCheckAvailable from "./useEmailCheckAvailable";
import { useAppDispatch, useAppSelectore } from "@store/hooks";
import React, { useEffect } from "react";
import { actRegister, resetUi } from "@store/auth/authSlice";
import { useSearchParams } from "react-router-dom";


type TUseRegister = {
  showSingIn : () => void
}

const useRegister = ({showSingIn}:TUseRegister) => {
  const {status, user, accessToken, error} = useAppSelectore(state => state.auth)
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
    const {
    statusAvailableEmail,
    checkEmailAvailable,
    enterdEmail,
    resetCheckEmailAvailable,
  } = useEmailCheckAvailable();

  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
    getFieldState
  } = useForm<singUpType>({
    resolver: zodResolver(singUpShema),
    mode: "onBlur",
  });



  const onBlurCheckEmailAvailable = async(e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const {isDirty, invalid} = getFieldState("email");
    if(isDirty && !invalid && enterdEmail !== e.target.value) {
        checkEmailAvailable(e.target.value)
    }
    if(isDirty && invalid && enterdEmail) {
        resetCheckEmailAvailable()
    }
  }

  const submitFormRegister : SubmitHandler<singUpType> = async(data) => {
    dispatch(actRegister(data)).
    unwrap()
    .then(()=> {
      if(showSingIn)
        showSingIn() 

    })  
    .catch((error) => {
        console.log(error)
    })
  }

  return {
    status,
    error,
    user,
    accessToken,
    handleSubmit,
    register,
    errors,
    statusAvailableEmail,
    enterdEmail,
    submitFormRegister,
    checkEmailAvailable,
    resetCheckEmailAvailable,
    onBlurCheckEmailAvailable
  };
};

export default useRegister;
