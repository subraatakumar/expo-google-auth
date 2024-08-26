import { Text, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

GoogleSignin.configure({
  webClientId:
    "552618358571-pc3k68unc7o2lp124ctqhl7b06c7ond1.apps.googleusercontent.com",
});

export default function Index() {
  const onGoogleSigninButtonPress = async () => {
    try {
      console.log("Check if your device supports Google Play");

      const r1 = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      GoogleSignin.signIn().then((res) => console.log(res));
      // console.log("Get the users ID token");
      // const { idToken } = await GoogleSignin.signIn();
      // console.log(idToken);
      // console.log(" Create a Google credential with the token", idToken);
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // // Sign-in the user with the credential

      // const res = await auth().signInWithCredential(googleCredential);
      // console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <GoogleSigninButton onPress={onGoogleSigninButtonPress} />
    </View>
  );
}
