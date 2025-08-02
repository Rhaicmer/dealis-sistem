import { useState } from 'react'
import './Users.css';
import Navibar from '../../Components/Navibar/Navibar';
import ListUser from '../../Components/ListUSer/ListUSer';
function Users() {

  return (
    <div>
    <Navibar />
     <div className='container'>
        <div>
        Usuários cadastrados
        </div>
        <div>
            <ListUser/>
        </div>
        <div>
            Fim de lista
        </div>

     </div>
     </div>
  )
}

export default Users
