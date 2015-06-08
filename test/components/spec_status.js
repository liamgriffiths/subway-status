import Status from "../../components/status"
import assert from "assert"

describe("Status", () => {
  it("formats status text with .getStatusText", () => {
    const ex1 = "GOOD SERVICE"
    assert.equal(Status.getStatusText(ex1), "Good Service")

    const ex2 = "PLANNED work"
    assert.equal(Status.getStatusText(ex2), "Planned Work")

    const ex3 = ""
    assert.equal(Status.getStatusText(ex3), "")

    const ex4 = " VerY    gooD SerVice   "
    assert.equal(Status.getStatusText(ex4), "Very Good Service")
  })
})
