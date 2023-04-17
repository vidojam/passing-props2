
export default function GreetingCard(props) {
   const {firstName, age} = props
  return (
    <div className="GreetingCard">
      <h3>Hello {firstName}({age})!</h3>

    </div>
  )
}