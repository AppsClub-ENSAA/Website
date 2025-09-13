"use client"

import { useEffect } from "react"

export default function NavigationHandler() {
  useEffect(() => {
    // Add an entry to history when the component mounts
    // This ensures there's always a previous state to go back to
    if (typeof window !== "undefined") {
      // Replace the current history state to ensure we have a base state
      window.history.replaceState({ page: "home" }, "", window.location.href)
      
      // Add a new entry so back button works within the site
      window.history.pushState({ page: "home" }, "", window.location.href)
      
      // Handle popstate events (back/forward button)
      const handlePopState = (event: PopStateEvent) => {
        // If there's no state or we're at the root, prevent leaving the site
        if (!event.state || event.state.page === "home") {
          // Push the home state again to prevent exiting
          window.history.pushState({ page: "home" }, "", window.location.href)
          
          // Scroll to top of page as if navigating home
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }
      
      window.addEventListener("popstate", handlePopState)
      
      return () => {
        window.removeEventListener("popstate", handlePopState)
      }
    }
  }, [])

  return null
}
