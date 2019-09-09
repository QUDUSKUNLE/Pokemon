import faker from 'faker';

export default {
  userDetails: {
    firstName: 'Adeyemi',
    lastName: 'Adewunmi',
    email: faker.internet.email(),
    phone: '07031187445',
    company: 'email',
  },
  noFirstName: {
    firstName: '',
    lastName: 'Adewunmi',
    email: 'bola.adewunmi@email.com',
    phone: '+2347031187445',
    company: 'email',
  },
  noLastName: {
    firstName: 'Adewunmi',
    lastName: '',
    email: 'bola.adewunmi@email.com',
    phone: '+2347031187445',
    company: 'email',
  },
  user: {
    id: '1',
  },
};
