import React from 'react'

const Hello = () => {
    return (
        <div className='dummyClass'>
            <h1>
                Hello Nam
            </h1>
        </div>
    )

    // return React.createElement('div', null, 'h1', 'Hello Namz');
    // return React.createElement('div', null, React.createElement('h1', null, 'Hello namz'));

    // return React.createElement(
    //     'div',
    //     {id: 'hello', className: 'dummyClass'},
    //     React.createElement('h1', null, 'Hello Namz')
    // )
}

export default Hello;