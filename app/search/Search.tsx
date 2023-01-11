'use client'
import { useRouter } from "next/navigation"
import React, { useState } from "react"

function Search() {
  const [search, setSearch] = useState("")
  const router = useRouter()
  return (
    <div>I am a Search component</div>
  )
}

export default Search