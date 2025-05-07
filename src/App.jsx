import { useState } from 'react'
import './App.css'

function App() {

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userSpecialization, setUserSpecialization] = useState("");
  const [userExperience, setUserExperience] = useState("");
  const [userDescription, setUserDescription] = useState("");


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
      alert("Inserisci un numero positivo per gli anni di esperienza.");
      return;
    }



    // creo una condizione per controllare o se la specializzazione è selezionata
    if (userSpecialization === "") {
      alert("Seleziona una specializzazione valida.");
      return;
    }
    // stampa in console i dati inseriti
    console.log("I tuoi dati sono stati inviati", {
      fullName,
      userName,
      userPassword,
      userSpecialization,
      userExperience,
      userDescription,
    });

  };

  return (

    <>



      <h1>Inserisci i tuoi dati</h1>

      <div className='container_form'>
        <form className='form' onSubmit={submit} >
          {/* input per inserimento nome */}

          <input
            type="text"
            name="nome"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Inserisci nome completo'
          />

          {/* input per inserimento username */}
          <input
            type="text"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Inserisci username'
          />


          {/* input per inserimento password */}
          <input
            type="text"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder='Inserisci password'
          />

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

          {/* input per inserimento esperienza */}
          <input
            type="number"
            name="esperienza"
            value={userExperience}
            onChange={(e) => setUserExperience(e.target.value)}
            placeholder='Inserisci anni di esperienza'
          />

          {/* input per inserimento descrizione */}
          <textarea
            name="descrizione"
            value={userDescription}
            onChange={(e) => setUserDescription(e.target.value)}
            placeholder='Breve descrizione'
          />

          {/* bottone di invio dei dati */}
          <button type='submit'>Invia</button>

        </form>
      </div>
    </>
  )
}

export default App
