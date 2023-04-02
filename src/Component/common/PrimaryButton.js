import React from 'react'


const PrimaryButton = ({ children, buttonType, className, type, ...rest }) => {
 
 
  return (
    <>
      <button as={buttonType} {...rest}  type={type} className={"bg-primary w-96 px-2 py-4  text-white  font-GilroySemiBold  text-xl my-5 text-center hover:border-2 border-fcGray "}>
        {children}
      </button>
    </>
  )
}

export default PrimaryButton


  