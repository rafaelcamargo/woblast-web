import storageService from '@scripts/base/services/storage/storage';

const _public = {};

_public.save = (user, onSuccess, onError) => {
  const existingUser = _public.findByEmail(user.email);
  if(existingUser) {
    onError('This email has already been used.');
  } else {
    storageService.set(getCollectionKey(), appendUserToCollection(user));
    onSuccess(user);
  }
};

_public.findByEmail = email => {
  return getUsers().find(user => user.email === email);
};

function getUsers(){
  return storageService.get(getCollectionKey(), { isJSON: true }) || [];
};

function getCollectionKey(){
  return 'w-users';
}

function appendUserToCollection(user){
  const users = getUsers();
  users.push(user);
  return users;
}

export default _public;
