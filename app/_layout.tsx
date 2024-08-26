import { Stack } from "expo-router";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "552618358571-pc3k68unc7o2lp124ctqhl7b06c7ond1.apps.googleusercontent.com",
});

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
