import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import faker from 'faker';
import ApprovalCard from './approvalcard';

const App = () => {
    const submit = {text: 'Click Me!'}
    const style = {backgroundColor: 'blue', color: 'white'};
    return (
        <>
        <div className="ui container comments">
        <ApprovalCard>
        <Comment 
          author="Alex"
          dateTime="Today at 15:00"
          content="The Beautiful House"
          avatar={faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard>
            <Comment 
            author="Ahmad"
            dateTime="Today at 15:30"
            content="The Beautiful Apartment"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        </div>
        <ApprovalCard>Are you sure to submit this?</ApprovalCard>
        
{/*         <div>
            <label className="label" htmlFor="name">Enter your name </label>
            <input id="name" type="text"/>
    <button style={style}>{submit.text}</button>
        </div> */}
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)