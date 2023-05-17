// const React = require('react');

// class Index extends React.Component {
//   render() {
//       const { vegetables } = this.props;
//       return (
//               <div>
//                   <h1>Vegetables Index Page</h1>
//                   <ul>
//                       {vegetables.map((vegetable, i) => {
//                           return (
//                               <li>
//                                   The{' '}
//                                   <a href={`/vegetables/${i}`}>
//                                       {vegetable.name}
//                                   </a>{' '}
//                                   is {vegetable.color} <br></br>
//                                   {vegetable.readyToEat
//                                       ? `It is ready to eat`
//                                       : `It is not ready to eat`}
//                                   <br />
//                               </li>
//                           );
//                       })}
//                     <nav>
//                         <a href="/vegetables/new">Create a New Vegetable</a>
//                     </nav>
//                   </ul>
//               </div>
//       );
//   }
// }
// module.exports = Index;

const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
  render(){
    const vegetables = this.props.vegetables;
    return (
      <DefaultLayout title={"Vegetables Index Page"}>
        <nav>
          <a href="/vegetables/new">Create a New Vegetable</a>
        </nav>
        <ul>
                  {this.props.vegetables.map((vegetable,i) => {
                  return <li key={i}>
                      <a href={`/vegetables/${vegetable.id}`}>{vegetable.name}</a>
                      is { vegetable.readyToEat? <span>It is ready to eat   </span>: <span> It is not ready to eat </span>}
                      {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                      <a href={`/vegetables/${vegetable._id}/edit`}>Edit</a>

                      <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                  </li>
              })}
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;