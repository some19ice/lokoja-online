import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'home & kitchen',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1
				},
				{
					title: 'electronics',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2
				},
				{
					title: 'furnitures',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 3
				},
				{
					title: 'clothes',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					size: 'large',
					id: 4
				},
				{
					title: 'books',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					size: 'large',
					id: 5
				}
			]
		};
	}

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
