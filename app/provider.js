"use client"
import React from 'react'
import {ConvexReactClient} from 'convex/react'
import {ConvexProvider} from 'convex/react'

function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
    <div>
       <ConvexProvider client={convex}>{children}</ConvexProvider>
    </div>
  )
}

export default Provider