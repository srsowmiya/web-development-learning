import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "../data"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */


const elements=data.map(obj=>{
  return <Entry key={obj.id} img={obj.img} title={obj.title} country={obj.country} googleMapsLink={obj.googleMapsLink} dates={obj.dates} text={obj.text}/>
})
export default function App() {
    return (
        <>
            <Header />
            <main className="container">
               {elements}
            </main>
        </>
    )
}