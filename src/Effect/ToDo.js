import React, { useState, useEffect } from 'react'

export default function ToDo() {
  const [msg, setMsg] = useState('');
  
  /*
  componentDidMount()
  componentDidUpdate()
  componentWillUnmount()
  */
    //Chay 1 lần sau khi component được mount
    useEffect(() => {
        console.log('componentDidMount')
        setMsg('Tech2')
    }, []);

    //Chạy khi biến trong depen thay đổi
    useEffect(() => {
        console.log('componentDidUpdate')
    }, [msg]);

    //Chạy khi component được loại bỏ khỏi dom
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount')
        }
    }, []);

    //Chạy khi state thay đổi
    useEffect(() => {
        console.log('test')
    });

    const handleClick = () => {
        setMsg(Math.random());
    }
  
  return (
    <div onClick={handleClick}>ToDo</div>
  )
}
