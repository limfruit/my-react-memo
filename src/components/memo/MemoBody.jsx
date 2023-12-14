import '../../App.css'
import React, { useState } from 'react'
import MemoItem from './MemoItem'
import { createPortal } from 'react-dom';
import MemoForm from './MemoForm'
import Modal from '../ui/Modal';

const MemoBody = ({ memos }) => {
    const [isOpen, open] = useState(false);
    const openModal = () => open(true);
    const closeModal = () => open(false);

    return (
        <>
            <div className='container'>
                <div className='App'>
                    <h1> 메모장 </h1><br /><br />
                    <table>
                        <tbody>
                            <tr className='trList'>
                                {memos.map(memo => <MemoItem memo={memo} key={memo.id} />)}
                                <td className='cell' >
                                    <div className='inner' onClick={openModal}>
                                        <img src={'/plus.png'} className='picture' alt='logo' />
                                    </div>
                                    {isOpen && createPortal(
                                        <Modal>
                                            <MemoForm />
                                        </Modal>,
                                        document.body
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default MemoBody