import React, {useLayoutEffect, useState} from "react"
import {createPortal} from "react-dom"

interface Props {
  children: React.ReactElement
  wrapperId: string
}

const ReactPortal: React.FC<Props> = ({children, wrapperId = "react-portal-wrapper"}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)

    return () => {
      // delete the programatically created element
      if (systemCreated && element && element.parentNode) {
        element?.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (wrapperElement) {
    return createPortal(children, wrapperElement)
  } else {
    return null
  }
}

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div")
  wrapperElement.setAttribute("id", wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

export default ReactPortal
