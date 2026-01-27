/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import React from "react"
import Header from "./Header"
import Form from "./Form"

export default function App() {
  return (
    <>
      <Header/>
      <Form/>
    </>
  )
}