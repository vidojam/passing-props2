import GreetingCard from "./GreetingCard"

export default function GreetingList() {
  return (
  <section className="GreetingList">
    <h2>Greeting List</h2>
    <GreetingCard firstName="David"  age={41} />
    <GreetingCard firstName="Johnathan" age={21}/>
    <GreetingCard fiestName= "Jasmine" age={24} />
    <GreetingCard fiestName= "Barbara" age={48} />
  </section>
  )
}