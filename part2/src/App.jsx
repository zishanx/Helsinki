const Header = (props) => <h1>{props.course}</h1>

const Content = ({parts}) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({ total }) => {

  let all = 0

  for (let i = 0; i < total.length; i++) {
    all += total[i].exercises
  }

  return (
    <p>Number of Exercises: {all}</p>
  )

}
const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts}
      />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
    ],
  }

  return <Course course={course} />

}

export default App