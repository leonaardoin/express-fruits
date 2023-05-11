// const React = require('react')
// class Show extends React.Component {
//   render () {
//    const vegetable = this.props.vegetable
//     return (
//       <div>
//       <h1> Show Page </h1>
//         The {vegetable.name} is {vegetable.color}. 
//         {vegetable.readyToEat? 'It is ready to eat. ' : 'It is not ready to eat... Cant touch this.' }
//         <a href="/vegetables"> back </a>
//       </div>
//       );
//      }
//    }
//   module.exports  = Show;

const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Vegetables show page</h1>
                The { this.props.vegetable.name } is { this.props.vegetable.color }
        { this.props.vegetable.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
            </div>
        )
    }
}
module.exports = Show;