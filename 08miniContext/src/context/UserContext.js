import React from 'react'

const UserContext=React.createContext()

export default UserContext






/*
1. Context create karo
const UserContext = React.createContext();
2. Provider se wrap karo
<UserContext.Provider value={user}>
   <App />
</UserContext.Provider>
3. Jahan chahiye use karo
const user = useContext(UserContext);
Easy code example:
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = "Rounak";

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

export default App;
Output:
Hello Rounak


Important:

Context API Redux ka full replacement nahi hai.

Good for:
Theme
Auth
Language
Not ideal for:
Complex app-wide frequent updates
(because unnecessary re-renders ho sakte)
One-line interview answer:

Context API is used to avoid props drilling by providing a way to share global data across components directly.

Super easy memory trick:
Props = Hand to Hand delivery
Context = WiFi 📶
When NOT to use:

Agar sirf parent → child data bhejna hai, normal props better.

Final:

Context API React me data sharing ko simple banata hai, especially jab same data multiple deeply nested components ko chahiye hota hai.

In short:
Needed because Props Drilling was annoying. */