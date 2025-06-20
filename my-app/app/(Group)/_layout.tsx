import { Stack } from "expo-router";

const createAgroup = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="create" />
      <Stack.Screen name="addMember" />
    </Stack>
  );
};
export const options = {
  headerShown: false,
};
export default createAgroup;
