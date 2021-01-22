import React from 'react'
import "./skeleton.css"

export default function SkeletonElements({type}) {

    const classes = `skeleton   skeleton-${type}`

    return (
        <div className={classes}>
            
    
        </div>
    )
}
