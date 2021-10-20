import { api } from '../../services/api';

import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

type Message = {
  id: string;
  text: string;
  
}


export function MessageList() {
  const messages = useState([]);

  useEffect(() => {
    api.get('messages/last3').then(response => {
      console.log(response.data);
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora do DoWhile começar!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Thiago-Pereira.png" alt="Thiago Pereira" />
            </div>
            <span>Thiago Pereira</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora do DoWhile começar!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Thiago-Pereira.png" alt="Thiago Pereira" />
            </div>
            <span>Thiago Pereira</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora do DoWhile começar!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Thiago-Pereira.png" alt="Thiago Pereira" />
            </div>
            <span>Thiago Pereira</span>
          </div>
        </li>
      </ul>
    </div>
  )
}