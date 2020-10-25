import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, clearCurrent, updateContact, current } = contactContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({ name: '', email: '', phone: '', type: 'personal' });
		}
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	const { name, email, phone, type } = contact;

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>{current ? 'Edit' : 'Add'} Contact</h2>
			<input
				type='text'
				placeholder='name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Phone number'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type='radio'
				name='type'
				id='type-personal'
				value='personal'
				checked={type === 'personal'}
				onChange={onChange}
			/>
			<label htmlFor='type-personal'> Personal </label>
			<input
				type='radio'
				name='type'
				id='type-professional'
				value='professional'
				checked={type === 'professional'}
				onChange={onChange}
			/>
			<label htmlFor='type-professional'> Professional</label>{' '}
			<div>
				<input
					type='submit'
					value={(current ? 'Update' : 'Add') + ' Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button
						className='btn btn-light btn-block'
						onClick={clearAll}
					>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
