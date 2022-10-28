import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch = (url) => {
    console.log(url);
    const [datas, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Something went wrong. Try to figure it out')
            }
            return res.json()
        })
        .then(result => {
            setData(result)
            setIsLoading(false)
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
        })
    },[url]);

    return {datas, error, isLoading}
};

export default useFetch;
