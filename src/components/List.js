import React from 'react';

function List(props) {
  return (
    {this.props.bulleted && (
      <ul>
        {data.map((list) => {
          return (
            <li>{list.item}</li>
          );
        })}
      </ul>
    )}
    {this.props.numbered && (
      <ol>
        {data.map((list) => {
          return (
            <li>{list.item}</li>
          );
        })}
      </ol>
    )}
  );
}       


export default List;