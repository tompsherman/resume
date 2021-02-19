import React from 'react'

const RightSection = (props) => {
    
    const {projObj} = props
    const {extra} = props
    const {spacing} = props

    let descMap = projObj.descript.map(bullet => {
        return <ul class="a">{bullet}</ul>
    })


    return (
        <div className="right" style={spacing}>
                <img className="imghalf" src={projObj.image} alt="picture" style={extra}/>
                <div className="half border">
                    <div className="flex-card-row border">
                        <h3>{projObj.title}</h3>
                        <h4>{projObj.role}</h4>
                    </div>
                    <h3 style={{textAlign: "center"}}>{projObj.stack}</h3>
                    <div className="left-text">
                        <h3 className="">phone:</h3>
                        <h3 className=""> 
                            <a href="tel:302-703-7088">(302) 703-7088</a>
                        </h3>
                    </div>
                    <div className="left-text">
                        <h3 className="">email:</h3>
                        <h3 className=""> 
                            <a href="mailto:tpsherman703@gmail.com">tpsherman703@gmail.com</a>
                        </h3>
                    </div>
                    {/* <div className="flex-card-row">
                        <h3 className="forty right-text">github:</h3>
                        <h3 className="forty  left-text blue"> 
                            <a href="https://github.com/tompsherman/">tompsherman</a>
                        </h3>
                    </div>
                    <div className="flex-card-row">
                        <h3 className="forty right-text">LinkedIn:</h3>
                        <h3 className="forty  left-text blue"> 
                            <a href="https://www.linkedin.com/in/tom-sherman-full-stack-csm/">Tom Sherman C.S.M, F.O.T.</a>
                        </h3>
                    </div> */}
                </div>
        </div>
    )
}

export default RightSection
