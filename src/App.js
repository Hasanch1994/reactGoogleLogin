import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useState } from 'react';

function App() {
  //your google client id here ------------ you can get client id from this link  https://console.cloud.google.com/apis/credentials
  const ClientID = "your-client-key-here";

  const [email, setEmails] = useState('');
  const [nameFamily, setnameFamily] = useState('');
  const [profileImgUrl, setprofileImgUrl] = useState('');

  const responseGoogle = (response) => {
    if (response.profileObj) {
      const obj = response.profileObj;
      setEmails(obj.email);
      setnameFamily(obj.name);
      setprofileImgUrl(obj.imageUrl);
    }
    console.log(`response is ${response.tokenId}`, `tokenObj`, `profileObj ${response.profileObj.name} ${response.profileObj.email} ${response.profileObj.imageUrl}`);
  }

  const logoutGoogle = (resp) => {
    setEmails('')
    setnameFamily('')
    setprofileImgUrl('')
    alert('logout successfuly')
  }

  return (
    <div className="App">
      <GoogleLogin
        clientId={ClientID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true} />

      <GoogleLogout
        clientId={ClientID}
        buttonText="Logout Google"
        onLogoutSuccess={logoutGoogle}
      />

      <div>
        <h1>Login info</h1>
        <img src={profileImgUrl} alt={nameFamily} />
        <h3>{`email is: ${email}`}</h3>
        <h3>{`name family is: ${nameFamily}`}</h3>
      </div>
    </div >
  );
}

export default App;
