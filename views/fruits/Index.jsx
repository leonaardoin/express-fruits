// const React = require('react');

// class Index extends React.Component {
//   render() {
//     return (
//         <div>
//             <h1>Fruits index page</h1>
//             <ul>
//             {
//    this.props.fruits.map((fruit, i) => {
//     return (
//         <li>
//         The <a href={`/fruits/${ fruit.id }`}> { fruit.name } </a> is { fruit.color }
//         { fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
//         </li>
//         )
//     })
// }
//             </ul>
//             <nav>
//     <a href="/fruits/new">Create a New Fruit</a>
// </nav>
//         </div> );
//   }
// }

// module.exports = Index;

const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
  render(){
    const fruits = this.props.fruits;
    return (
      <DefaultLayout title={"Fruits Index Page"}>
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
          {
            fruits.map((fruit)=>{
              return (
                <li key={fruit._id}>
                  The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                  {' '}is {fruit.color} <br/>
                  {
                    fruit.readyToEat?
                    '  It is ready to eat':
                    '  It is NASTY!!!!!!'
                  }
                  <br />
                  {this.props.fruits.map((fruit,i) => {
                  return <li key={i}>
                      <a href={`/fruits/${fruit.id}`}>{fruit.name}</a>
                      is { fruit.readyToEat? <span>It is ready to eat   </span>: <span> It is not ready to eat </span>}
                      {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                      <a href={`/fruits/${fruit._id}/edit`}>Edit</a>

                      <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                  </li>
              })}
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;