
import './App.css';
import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Hello from './Hello';
import Bye from './Bye';
import Image from './component/profile/image';
function App() {

  const alertMe = () => {
    alert('Hello')
  }
  const esm="amir"
  const la9ab="miled"
  
  return (
    <div className="App">
      <Hello   nom={esm} prenom={la9ab} alertMe={alertMe} />
      <Bye style={{width:1250}}> BIO : web developper <br/>  profession : student </Bye>
      <Image>https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-aucune-photo-de-profil-utilisateur-dessin%C3%A9s-%C3%A0-la-main.jpg</Image>
    </div>

  );
}

export default App;

