const express = require('express');
const { getDatabase, set, ref,update,get, child } = require('firebase/database');
const { initializeApp } = require('firebase/app')
const bodyParser = require('body-parser');
const { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } = require('firebase/auth');
const ejs = require('ejs');
const axios = require('axios');
const { OpenAI } = require('openai');



const app = express();
require('dotenv').config();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname+'/public/'))
app.use(express.json())



const openai = new OpenAI({
    organization: "org-WiGJdOITOvxUCoxLtxBPB8pf",
    project: "proj_E5kuFZY4XEqbcK2Tvy9lsPlI",
    apiKey: process.env.OPEN_AI_KEY,
  });
const firebaseConfig = require('./firebase_config.js')
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);
const port = process.env.PORT || 3000;



app.get('/', async (req, res)=>{
    try {
        onAuthStateChanged(auth, function(user) {
            if (user) {
                res.redirect(`/dashboard/${user.uid}`);
            } else {
                res.render('index')
            }
          });
        
    } catch (err) {
        console.log(err);
        res.status(501).send(err.message);
    }
})

app.get('/signin', (req,res)=>{
    res.render('signin')
});

app.get('/signup', (req,res)=>{
    res.render('signup')
});

app.get('/signout', (req, res)=>{
    signOut(auth)
    .then(() => {
        res.redirect('/');

    }).catch((error) => {
        res.send(error.message)
      });
})

app.get('/dashboard/:userID', async (req,res)=>{
    try {
        const dbRef = ref(db);
        const data = await get(child(dbRef, `users/${req.params.userID}`));
        const user_data = data.val()
        onAuthStateChanged(auth, function(user) {
            if (user) {
                res.render('dashboard', {user_data:user_data, uid:req.params.userID});
            } else {
                res.redirect('/signin');
            }
          });
        
    } catch (err) {
        console.log(err);
        console.log(error.message)
        res.status(501).redirect('/');
    }
});

app.get('/bookmarks/:userID', async (req,res)=>{
    try {
        const dbRef = ref(db);
        const data = await get(child(dbRef, `users/${req.params.userID}`));
        const user_data = data.val()
        onAuthStateChanged(auth, function(user) {
            if (user) {
                res.render('bookmarks', {user_data:user_data, uid:req.params.userID});
            } else {
                res.redirect('/signin');
            }
          });
        
    } catch (err) {
        console.log(err);
        console.log(error.message)
        res.status(501).redirect('/');
    }
});

app.get('*', (req, res)=>{
    res.status(404).send('Page Not Found')
})




app.post('/find-complexity', async (req, res)=>{
    try{
        const prompt = 'Tell me a joke'

        const completions = await openai.chat.completions.create({
            model: "fgpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            max_tokens: 100,
            temperature: 1,
        })
        
        // console.log(completions.choices[0].message)

        return res.status(200).json({
            success: true,
            data: completions.choices[0].message,
        })
    }catch (error){
        return res.status(400).json({
            success: false,
            error: error.response
              ? error.response.data
              : "There was an issue on the server",
        });

    }
})

app.post('/signup',(req,res)=>{
    console.log(req.body);

    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(function(userCredential){
        
        var user = userCredential.user
        
        var user_data = {
            uid : user.uid,
            email : req.body.email,
            username : req.body.username,
            gender : req.body.gender,
            age : req.body.age,
            last_login: Date.now(),
            
        };


        set(ref(db, 'users/' + user.uid), user_data);
        
        res.redirect(`/dashboard/${user.uid}`);
    })
    .catch(function(error) {
        console.log(error.message)
        res.status(501).redirect('/');
    });
});

app.post('/signin', (req,res)=>{
    console.log(req.body);
    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(async (userCredential) => {
  
      const user = userCredential.user;
  
      var user_data = {
        last_login: Date.now()
    }
    await update(ref(db, 'users/' + user.uid), user_data);
    
    res.redirect(`/dashboard/${user.uid}`);
    res.end();
    })
    .catch((error) => {
        console.error("Error in Login : ", error);
        console.log(error.message)
        res.status(501).redirect('/');
    });
});

app.get('/signout', (req, res)=>{
    signOut(auth)
    .then(() => {
        res.redirect('/');

    }).catch((error) => {
        console.log(error.message)
        res.redirect('/')
      });
})



app.listen(port, (err)=>{
    if(!err){
        console.log(`Server initiated at port ${port}`);
    } else {
        console.error('Error in server listening');
    }
}) 