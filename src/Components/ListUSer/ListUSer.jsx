import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../Services/firebase'
import Avatar from '@mui/material/Avatar';
import './ListUSer.css'

function ListUser() {
const [users, setUsers] = useState([]);

useEffect(() => {
  // A função onSnapshot retorna uma função de "unsubscribe"
  const unsubscribe = onSnapshot(collection(db, 'users'), (querySnapshot) => {
    const userList = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        Name: data.Name,
        Email: data.Email,
        Role: data.Role,
        Image: data.Image,
      };
    });
    setUsers(userList);
  }, (error) => {
    console.error('Erro ao ouvir as alterações:', error);
  });

  // Retornamos a função de "unsubscribe" para que ela seja chamada quando o componente for desmontado
  return () => unsubscribe();
}, []); // O array de dependências vazio garante que o listener só seja configurado uma vez
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <>
              <div className='Card'>

                <div>
                   <Avatar
                      alt="Foto de Perfil"
                      src={user.Image}
                      sx={{ width: 150, height: 150 }} // Define o tamanho
                    />
                </div>

              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUser;
