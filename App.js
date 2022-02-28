import { View, Text,Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export default function App() {
  GoogleSignin.configure({
    webClientId: '231493047400-lul43ei0bm8s1a5gtib0rbmr6bvh2mbn.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync=async()=>{
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user_sign_in= auth().signInWithCredential(googleCredential);

        user_sign_in.then((user)=>{
          console.log(user);
        })
        .catch((error)=>{
          console.log(error)
        })
  }

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
     <Button
     title="Sign in with Google"
     onPress={signInWithGoogleAsync}
     />
    </View>
  )
}