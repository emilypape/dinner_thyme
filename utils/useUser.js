import { useState, useEffect } from "react";
import Router from "next/router";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {

  const [user, setUser] = useState(false);

  async function loggedInUser() {
    if (!user) {
      const response = await fetch('/api/loggedInUser');
      let userData = await response.json();
    
      if (response.ok) {
        setUser(userData);
      } else {
        setUser({id: false})
      }
    }
  }

  
  useEffect(() => {
    loggedInUser();

    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user.id) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectTo && redirectIfFound && user.id)
    ) {
      Router.push(redirectTo);
    }
  }, [user]);

  return { user };
}