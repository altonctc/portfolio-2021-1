import React from 'react'
import styled from 'styled-components'

const StyledBannerImg = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background: url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" ) no-repeat center center/cover;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.3);
    }
    `
const StyledTitleContainer1 = styled.div`
    height: 80vh;
`

const StyledTitleContainer2 = styled.div`
    height: 20vh;
`
const StyledTitle2 = styled.div`
    
`

const Banner = () => {
    return (
        <StyledBannerImg>
            <StyledTitleContainer1 className="w-100 d-flex align-items-center justify-content-center">
                <h1 className="text-white display-3">RESTAURANT</h1>
            </StyledTitleContainer1>
            <StyledTitleContainer2 className="w-100 d-flex align-items-end justify-content-between">
                <StyledTitle2 className="px-4 py-2 d-flex align-items-end justify-content-end flex-column">
                    <h3 className="text-light">fssfesffsd</h3>
                    <h3 className="text-light">fssfesffsd</h3>
                </StyledTitle2>
                <StyledTitle2 className="px-4 py-2 d-flex align-items-end justify-content-end flex-column">
                    <h3 className="text-light">fssfesffsd</h3>
                </StyledTitle2>
            </StyledTitleContainer2>
        </StyledBannerImg>
    )
}

export default Banner
