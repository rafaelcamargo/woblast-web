import storageService from '@scripts/base/services/storage/storage';

const _public = {};

_public.save = user => {
  const existingUser = _public.findByEmail(user.email);
  if(existingUser)
    return 'This email has been already used.';
  storageService.set(getCollectionKey(), appendUserToCollection(user));
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
