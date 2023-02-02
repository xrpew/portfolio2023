import React from 'react'

export const CardProyect = ({title, description, url, image, callToAction='ir'}) => {
  return (
    <div className="col">
          <div className="card">
            <img
              src={ image }
              className="card-img-top"
              alt={ title }
            />
            <div className="card-body">
              <h4 className="card-title">{ title }</h4>
              <p className="card-text">
                { description }
              </p>
              <a href={ url } className="btn btn-primary" target='_blank'>
                { callToAction }
              </a>
            </div>
          </div>
        </div>
  )
}
