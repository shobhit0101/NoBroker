import React from 'react'

const Filter = () => {
    const handleSubmit=()=>{}
  return (
    <>
        <form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="container">
                <div className="container d-flex">
                    <div>
                        <h5>Filter</h5>
                    </div>
                    <div className='align-self-end'>
                        <h5>Filter</h5>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default Filter