import React from 'react'
import styles from './Home.module.scss'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa6'

const Home = () => {
	return (
		<section>
			<div className={styles['home']}>
				<div className={`${styles['home__card']} ${styles['grid-col-2']}`}>
					<div className={styles['home__card-title']}>
						<h1>
							Hey, We are the best <span>pEt CaRE</span> agency with 4 year
							experince
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
							aliquam sunt! Natus recusandae voluptatum, perspiciatis
							dignissimos expedita unde velit quisquam!
						</p>
					</div>

					<div className={styles['home__card-social']}>
						<button>Contact</button>
						<a href='#'>
							<FaTelegram />
						</a>
						<a href='#'>
							<FaInstagram />
						</a>
						<a href='#'>
							<FaYoutube />
						</a>
					</div>
				</div>
				<div className={styles['home__card']}></div>
			</div>
		</section>
	)
}

export default Home
