import React from 'react'

const Page = (props) => {
  return (
    <>
      <div className='flex-none flex'>
        <div className='flex flex-col justify-center px-10 py-5 bg-blue-100  border-indigo-500 outline  hover:outline-offset-2'>
<div className='mx-auto font-mono text-xs font-semibold'>
    {props.number}
</div>
<div className='mx-auto font-sans text-md font-bold'>
    {props.name} 
</div>
        </div>
        
      </div>
    </>
  )
}


const Pages = () => {
    return (
        <div className='w-full outline  outline-grey-400'>
        <div className='flex max-w-3xl mx-auto justify-between  '>
        <Page number={"01"} name={"name"} />
        <Page number={"02"} name={"prakash"} />
        <Page number={"02"} name={"prakash"} />
        <Page number={"02"} name={"prakash"} />
        <Page number={"02"} name={"prakash"} />
        </div></div>
    )
}

export default Pages
