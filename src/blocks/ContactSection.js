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
                    <div className="flex-card-row">
                        <h3 className="forty right-text">phone:</h3>
                        <h3 className="forty  left-text"> 
                            <a href="tel:302-703-7088">(302) 703-7088</a>
                        </h3>
                    </div>
                    <div className="flex-card-row">
                        <h3 className="forty right-text">email:</h3>
                        <h3 className="forty  left-text"> 
                            <a href="mailto:tpsherman703@gmail.com">tpsherman703@gmail.com</a>
                        </h3>
                    </div>
                </div>
        </div>
    )
}

export default RightSection
