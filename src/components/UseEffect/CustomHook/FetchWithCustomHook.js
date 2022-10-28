import React from 'react'
import useFetch from './useFetch';

export default function FetchWithCustomHook() {
    const {datas, error, isLoading} = useFetch('https://jsonplaceholder.typicode.com/todos');
    console.log(datas);

  return (
    <div>
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
        {isLoading && <h3 style={{color: 'green'}}>Your data is loading</h3>}
        {datas && datas.map(data => <p key={data.id}>{data.title}</p>)}
    </div>
  )
}
