import React from 'react'
import Styles from './MainFooter.module.css';

const MainFooter = () => {
    return (
        <footer class="footer footer-center p-4 bg-secondary text-base-content" style={{height:'30px', padding:0}}>
            <div>
                <p style={{fontSize:'13px'}}>Copyright © 2023 - All right reserved by Yuj.</p>
            </div>
        </footer>
    )
}

export default MainFooter