const firebaseConfig = {
    apiKey: "AIzaSyASslgJfTceUczuVOZXiApQkR32syggxv0",
    authDomain: "karamchari-7583a.firebaseapp.com",
    databaseURL: "https://karamchari-7583a-default-rtdb.firebaseio.com",
    projectId: "karamchari-7583a",
    storageBucket: "karamchari-7583a.appspot.com",
    messagingSenderId: "756799416151",
    appId: "1:756799416151:web:2edd42a364f3b46118c012",
    measurementId: "G-H0S9GFWG1Y"
  };

  // initialize firebase 

  firebase.initializeApp(firebaseConfig);

  //reference for database

  var  karamchariDB = firebase.database().ref('karamchari');
  document.getElementById("login").addEventListener("Login",submitForm);
  function submitForm(e){
    e.preventDefault();
    var Username= getElementVal('Username');
    var Password = getElementVal('Password');
    
    saveMessages(Username,Password);

  }

  const saveMessages = (Username,Password) =>{
    var newLogin = karamchariDB.push();

    newLogin.set({
        Username: Username,
        Password : Password,

    });
  };

  const getElementVal = (id)=>{
    return document.getElementById(id).Value;
  };

   

