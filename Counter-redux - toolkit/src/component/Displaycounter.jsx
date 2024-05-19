import React from 'react';
import { useSelector } from 'react-redux';

export default function DisplayCounter() {
  const {counterval} = useSelector((store) => store.counter);
 console.log(counterval)

  return (
    <p className="lead mb-4">Counter Current Value: {counterval}</p>
  );
}
