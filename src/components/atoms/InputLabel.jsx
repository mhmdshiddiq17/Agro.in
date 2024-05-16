import React from 'react'

const InputLabel = (props) => {
  return (
    <form className='flex flex-col border-b-2 border-[#8D9E9B] items-start w-3/4 gap-y-3'>
      	<label htmlFor={props.htmlFor} className='text-sm font-semibold text-[#8D9E9B] mt-5'>{props.children}</label>
      	<input type={props.type} name='email' id={props.id} className='focus:outline-none focus:ring-0'/>
    </form>
  )
}

export default InputLabel;
