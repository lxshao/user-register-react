import React from 'react';
import User from './User';

class App extends React.Component {
    onFormSubmit(form) {
        console.log(form);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <User onSubmit={this.onFormSubmit}/>
            </div>
        ); 
    }
}
       

export default App;