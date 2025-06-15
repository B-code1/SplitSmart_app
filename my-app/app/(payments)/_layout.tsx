
import { Stack } from "expo-router";

const payments = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="request" options={{ headerShown: false }} />
      <Stack.Screen name="send" options={{ headerShown: false }} />
      <Stack.Screen name="split" options={{ headerShown: false }} />
    </Stack>
  );
}
export const options = {
  headerShown: false,
};
export default payments;