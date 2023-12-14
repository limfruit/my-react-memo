import '../../App.css'
import React from 'react'

const MemoItem = ({ memo }) => {


    return (
        <>
            <td className='cell'>
                <div className='inner'>
                    <h2> {memo.title} </h2>
                    <h5> {memo.writer} </h5><br /><br />
                    <h4> {memo.content} </h4><br />
                </div>
            </td>
        </>
    )
}

export default MemoItem