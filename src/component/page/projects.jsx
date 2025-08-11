import React from "react"

const Home = React.forwardRef((props, ref) => {
    return (
         <div 
            ref={ref}
            className="h-screen bg-blue-600"
         >
         </div>
    )
})
export default Home;