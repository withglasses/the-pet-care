import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header>
			<nav className={styles['nav']}>
				<div className={styles['nav__logo']}>
					<h1>The Pet Care</h1>
				</div>
				<div className={styles['nav__menu']}>
					<ul className={styles['nav__menu-list']}>
						<li className={styles['nav__menu-item']}>
							<a
								href='#home'
								className={`${styles['nav__menu-link']} ${styles['active']}`}
							>
								Home
							</a>
						</li>

						<li className={styles['nav__menu-item']}>
							<a href='#About' className={styles['nav__menu-link']}>
								About
							</a>
						</li>

						<li className={styles['nav__menu-item']}>
							<a href='#services' className={styles['nav__menu-link']}>
								Services
							</a>
						</li>

						<li className={styles['nav__menu-item']}>
							<a href='#contact' className={styles['nav__menu-link']}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
