import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mainHeader.module.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const mainHeader = () => {
  return (
    <div className="navbar bg-secondary" style={{ height: '100px' }}>
      <div className="flex-1">
        <Link to="/" className="normal-case text-xl">
          <img className='yuj-logo' alt='No Image' src='assets/YujMainLogo.svg' style={{ height: '80px', marginLeft: '30px' }}></img>
        </Link>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <input type="text" placeholder="검색" className="input input-bordered" style={{ height: '2rem', fontSize: '13px' }} />
        </div>
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className={styles.menu}>메인 페이지</Link></li>
          <li><Link to="/" className={styles.menu}>강의 소개</Link></li>
          <li><Link to="/" className={styles.menu}>강사 소개</Link></li>
          <li><Link to="/" className={styles.menu}>문의사항</Link></li>
        </ul>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className={styles.menu}>
              <AccountBoxIcon />
            </Link>
          </li>
          <li><Link to="/login" className={styles.menu}>로그인</Link></li>
          <li><Link to="/signin" className={styles.menu} style={{ marginRight: '30px' }}>회원가입</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default mainHeader;

