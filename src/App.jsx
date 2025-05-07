import { useState } from 'react'
import './App.css'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";


function App() {

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userSpecialization, setUserSpecialization] = useState("");
  const [userExperience, setUserExperience] = useState("");
  const [userDescription, setUserDescription] = useState("");

  // validazione dello username
  const isUsernameValid = /^[a-zA-Z0-9]{6,}$/.test(userName);


  // validazione della password
  const isPasswordValid = () => {
    const hasLetter = [...userPassword].some(c => letters.includes(c));
    const hasNumber = [...userPassword].some(c => numbers.includes(c));
    const hasSymbol = [...userPassword].some(c => symbols.includes(c));
    return userPassword.length >= 8 && hasLetter && hasNumber && hasSymbol;
  };

  // validazione della descrizione
  const isDescriptionValid = () => {
    const trimmed = userDescription.trim();
    return trimmed.length >= 100 && trimmed.length <= 1000;
  };


  // all'invio del form se è tutto ok
  const submit = (e) => {
    e.preventDefault();

    // creo una condizione per controllare se tutti i campi vengano compilati
    if (
      !fullName ||
      !userName ||
      !userPassword ||
      !userSpecialization ||
      !userExperience ||
      !userDescription
    ) {
      alert("Compila tutti i campi");
      return;
    }



    // creo una costante in cui il valore inserito venga convertito in un numero,
    const experienceNumber = parseFloat(userExperience);
    // la condizione confronta sia se il numero non è valido sia se il numero inserito è 0 o minore di 0
    if (isNaN(experienceNumber) || experienceNumber <= 0) {
      alert("Inserisci un numero maggiore di 0.");
      return;
    }



    // creo una condizione per controllare o se la specializzazione è selezionata
    if (userSpecialization === "") {
      alert("Seleziona una specializzazione valida.");
      return;
    }

    if (!isUsernameValid || !isPasswordValid() || !isDescriptionValid()) {
      alert("Controlla di aver soddisfatto le richieste da inserire");
      return;
    }

  };

  // stampa in console i dati inseriti
  console.log("I tuoi dati sono stati inviati", {
    fullName,
    userName,
    userPassword,
    userSpecialization,
    userExperience,
    userDescription,
  });




  return (

    <>



      <h1>Inserisci i tuoi dati</h1>

      <div className='container_form'>
        <form className='form' onSubmit={submit} >
          {/* input per inserimento nome */}
          <section>


            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Inserisci nome completo'
            />


          </section>

          <section>
            {/* input per inserimento username */}
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Inserisci username'
            />
            {userName && (
              <p style={{ color: isUsernameValid ? "green" : "red" }}>
                {isUsernameValid
                  ? "Username valido"
                  : "Almeno 6 caratteri, solo lettere e numeri"}
              </p>
            )}
          </section>

          <section>
            {/* input per inserimento password */}
            <input
              type="text"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder='Inserisci password'
            />
            {userPassword && (
              <p style={{ color: isPasswordValid() ? "green" : "red" }}>
                {isPasswordValid()
                  ? "Password valida"
                  : "Min 8 caratteri, 1 lettera, 1 numero, 1 simbolo"}
              </p>
            )}

          </section>


          <section>
            {/* select per inserimento specializzazione */}
            <select
              value={userSpecialization}
              onChange={(e) => setUserSpecialization(e.target.value)}
            >
              <option value="">Seleziona</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Fullstack">Fullstack</option>
            </select>
          </section>

          <section>
            {/* input per inserimento esperienza */}
            <input
              type="number"
              value={userExperience}
              onChange={(e) => setUserExperience(e.target.value)}
              placeholder='Inserisci anni di esperienza'
            />
          </section>

          <section>
            {/* input per inserimento descrizione */}
            <textarea
              value={userDescription}
              onChange={(e) => setUserDescription(e.target.value)}
              placeholder='Breve descrizione'
            />
            {userDescription && (
              <p style={{ color: isDescriptionValid() ? "green" : "red" }}>
                {isDescriptionValid()
                  ? "Descrizione valida"
                  : "Min 100 e max 1000 caratteri, senza spazi inutili"}
              </p>
            )}
          </section>

          <section>

            {/* bottone di invio dei dati */}
            <button type='submit'>Invia</button>

          </section>
        </form>
      </div>
    </>
  )
}

export default App
