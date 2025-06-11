import { Stack } from "expo-router";

const authScren = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="forgotPassword" />
    </Stack>
  );
};
export default authScren;
