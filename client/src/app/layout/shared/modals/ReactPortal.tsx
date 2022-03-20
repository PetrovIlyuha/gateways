import React from "react"
import {createPortal} from "react-dom"

interface Props {
  children: React.ReactElement
  wrapperId: string
}

const ReactPortal: React.FC<Props> = ({children, wrapperId = "react-portal-wrapper"}) => {
  let element = document.getElementById(wrapperId)
  // if element is not found with wrapperId,
  // create and append to body
  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId)
  }

  return createPortal(children, element)
}
function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div")
  wrapperElement.setAttribute("id", wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

export default ReactPortal
