"use client"

import { Suspense } from "react"
import AutomationContent from "./automation-content"

export default function AutomationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AutomationContent />
    </Suspense>
  )
}
