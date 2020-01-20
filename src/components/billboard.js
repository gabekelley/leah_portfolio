import React from 'react';

class Billboard extends React.Component {
    
    render() { 
        return ( 
            <div className="billboard"
                style={{
                    background: 'royalBlue',
                    width: '100vw',
                    height: '100vh',
                }}
                >
                <h1>Billboard</h1>
            </div>
         );
    }
}
 
export default Billboard;