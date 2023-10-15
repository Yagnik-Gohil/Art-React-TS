import React from 'react'

const HomeCard = ({ data }: any) => {
  return (
 
    <div className="">
    <div className="card home-card float-right my-3">
      <div className="row">
        <div className="col-sm-6">
          <img
            className="img-fluid h-100 w-100 card-image"
            src={data.path}
            alt="Card image"
          />
        </div>
        <div className="col-sm-6">
          <div className="card-body px-0">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.text}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default HomeCard
