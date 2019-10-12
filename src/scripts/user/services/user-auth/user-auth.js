import storageService from '@scripts/base/services/storage/storage';
import userResource from '@scripts/user/resources/user/user';
import routeService from '@scripts/base/services/route/route';

const _public = {};

_public.auth = (email, password, onSuccess, onError) => {
  const user = userResource.findByEmail(email);
  if(isValidCredential(user, password)) {
    saveAuthToken(user);
    onSuccess();
  } else {
    onError('Invalid credentials. Please, try again.');
  }
};

_public.isAuthenticated = () => {
  return storageService.get(getAuthTokenStorageKey(), { isJSON: true });
};

_public.logout = () => {
  storageService.remove(getAuthTokenStorageKey());
  routeService.go('/');
};

function saveAuthToken(user){
  storageService.set(getAuthTokenStorageKey(), user);
}

function isValidCredential(user, password){
  if(!user)
    return false;
  return user.password === password;
}

function getAuthTokenStorageKey(){
  return 'w-auth-token';
}

export default _public;
