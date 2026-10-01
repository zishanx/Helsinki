const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => (
    parts.map(item => <Part name={item.name} exercises={item.exercises} ></Part>)
)

const Part = (props) => (
    <p>
        {props.name} {props.exercises}
    </p>
)

const Total = ({ total }) => {

    let all = total.reduce((acc, init) => acc + init.exercises, 0)

    return (
        <p>Total of {all} exercises</p>
    )

}
const Course = ({ course }) => {


    return (

        course.map(item => (
            <>
                <Header course={item.name} />
                <Content parts={item.parts} />
                <Total
                    total={item.parts}
                />
            </>
        ))

    )
}


export default Course