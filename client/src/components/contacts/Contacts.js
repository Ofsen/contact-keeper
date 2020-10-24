import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts } = contactContext;

	return (
		<Fragment>
			<h2 className='text-primary'>Contacts List</h2>
			{contacts.map((contact) => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</Fragment>
	);
};

export default Contacts;
