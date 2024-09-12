import React from 'react'
import { Element } from "react-scroll"

function ScrollElement({ name, children }) {
  return (
    <Element name={name} style={{ width: "100%" }}>
        {children}
    </Element>
  )
}

export default ScrollElement
