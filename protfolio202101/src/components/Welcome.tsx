import React from 'react'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'

const StyledImg = styled(Image)`
    height: 100px !important;
    width: 100px !important;
`

const Welcome = () => {
    return (
        <div className="container-xl">
            <div className="row p-3">
                <div className="col-md-4 m-auto py-3">
                    <div className="row m-auto justify-items-center ">
                        <div className="col-lg-5 p-0 m-auto d-flex justify-content-center">
                            <StyledImg src={require('../images/about.jpg').default} roundedCircle  />
                        </div>
                        <p className=" col-lg-7 m-auto text-center text-lg-left m-0 p-2 py-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque!</p>
                    </div>
                </div>
                <div className="col-md-4 m-auto py-3">
                    <div className="row m-auto justify-items-center ">
                        <div className="col-lg-5 p-0 m-auto d-flex justify-content-center">
                            <StyledImg src={require('../images/about.jpg').default} roundedCircle  />
                        </div>
                        <p className=" col-lg-7 m-auto text-center text-lg-left m-0 p-2 py-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque!</p>
                    </div>
                </div>
                <div className="col-md-4 m-auto py-3">
                    <div className="row m-auto justify-items-center ">
                        <div className="col-lg-5 p-0 m-auto d-flex justify-content-center">
                            <StyledImg src={require('../images/about.jpg').default} roundedCircle  />
                        </div>
                        <p className="w-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque!00 col-lg-7 m-auto text-center text-lg-left m-0 p-2 py-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Welcome
