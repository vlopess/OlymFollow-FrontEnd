import { useRegister } from "./RegisterHooks";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import googleSVG from "../../assets/google-color-svgrepo-com.svg";
import animationLogin from "../../assets/AnimationLogin.json";
import Lottie from "lottie-react";
import React, { useState } from "react";
import { Loader } from "../loader/Loader.jsx";
import { motion } from "framer-motion";

/**
 * Componente Register para gerenciar o registro de novos usuários.
 *
 * @description Este componente utiliza o hook `useRegister` para lidar com a lógica de registro, incluindo a validação de dados
 * e a comunicação com a API de registro. Ele renderiza um formulário de registro e exibe mensagens de erro ou sucesso
 * conforme necessário.
 *
 * @example
 * <Register />
 *
 * @returns {JSX.Element} O JSX do componente Register.
 */
const Register = () => {
  const {
    register,
    setRegister,
    showPassword,
    setShowPassword,
    handleSubmit,
    isInvalidPassword,
    setIsInvalidPassword,
    showConfirmationPassword,
    setShowConfirmationPassword,
  } = useRegister();
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (value) => {
    setIsInvalidPassword(false);
    if (value !== register.password) {
      setIsInvalidPassword(true);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="main-div-login">
        <motion.div
          className="div-lottie-login"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Lottie animationData={animationLogin} />
        </motion.div>
        <form>
          <motion.h1
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Crie a sua conta
          </motion.h1>
          <motion.div
            className="div-input-login"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <input
              value={register.username}
              name="name"
              autoComplete="name"
              placeholder="Digite o seu nome"
              type="text"
              onChange={(e) => {
                setRegister({ ...register, username: e.target.value });
              }}
            />
            <span>
              <svg
                fill="#adadad"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
                </g>
              </svg>
            </span>
          </motion.div>
          <motion.div
            className="div-input-login"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            <input
              value={register.email}
              placeholder="Digite o email"
              autoComplete="off"
              type="email"
              name="email"
              onChange={(e) => {
                setRegister({ ...register, email: e.target.value });
              }}
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#b6b6b6"
              >
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
            </span>
          </motion.div>
          <motion.div
            className="div-input-login"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <input
              value={register.password}
              placeholder="Digite a senha"
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              onChange={(e) => {
                setRegister({ ...register, password: e.target.value });
              }}
            />
            <span>
              {showPassword ? (
                <>
                  <svg
                    className="svg-icon-input-psswd"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    onClick={() => setShowPassword(false)}
                  >
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    className="svg-icon-input-psswd"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    onClick={() => setShowPassword(true)}
                  >
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                  </svg>
                </>
              )}
            </span>
          </motion.div>
          <motion.div
            className="div-input-login"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, delay: 0.25 }}
          >
            <input
              value={register.passwordConfirmation}
              className={isInvalidPassword ? "invalid" : ""}
              placeholder="Confirme sua senha"
              autoComplete="off"
              type={showConfirmationPassword ? "text" : "password"}
              onChange={(e) => {
                validatePassword(e.target.value);
                setRegister({
                  ...register,
                  passwordConfirmation: e.target.value,
                });
              }}
            />
            <span>
              {showConfirmationPassword ? (
                <>
                  <svg
                    className="svg-icon-input-psswd"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    onClick={() => setShowConfirmationPassword(false)}
                  >
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    className="svg-icon-input-psswd"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    onClick={() => setShowConfirmationPassword(true)}
                  >
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                  </svg>
                </>
              )}
            </span>
          </motion.div>
          {isLoading ? (
            <div
              style={{
                height: "75px",
                margin: "35px",
              }}
            >
              <Loader />
            </div>
          ) : (
            <motion.button
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="button"
              type="button"
              onClick={() => handleSubmit(setIsLoading)}
            >
              Cadastrar
            </motion.button>
          )}
          <motion.p
            className="signup-link"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}
          >
            Já possui conta?
            <motion.a
              onClick={() => navigator("/login")}
              style={{ color: "#2d9ffc" }}
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, delay: 0.7 }}
            >
              Entrar
            </motion.a>
          </motion.p>
          <motion.button
            className="buttonBack"
            onClick={() => navigator("/")}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </motion.button>
        </form>
      </div>
    </>
  );
};
export default Register;
