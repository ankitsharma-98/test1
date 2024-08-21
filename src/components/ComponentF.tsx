import { useContext } from "react"
import { TestContext, UserContext } from "../App"

function ComponentF() {

    const user = useContext(UserContext)
    const testValue = useContext(TestContext)

    return (
        <div>
            user is - {user}<br></br>
            test is - {testValue}
        </div>
    )
}

export default ComponentF