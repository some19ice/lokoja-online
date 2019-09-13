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
					id: 1,
					linkUrl: 'homeAndKitchen'
				},
				{
					title: 'electronics',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: ''
				},
				{
					title: 'furnitures',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 3,
					linkUrl: ''
				},
				{
					title: 'clothes',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					size: 'large',
					id: 4,
					linkUrl: ''
				},
				{
					title: 'books',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					size: 'large',
					id: 5,
					linkUrl: ''
				}
			]
		};
	}

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...otherSectionsProps }) => (
					<MenuItem key={id} {...otherSectionsProps} />
				))}
			</div>
		);
	}
}

export default Directory;
