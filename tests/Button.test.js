import { Button } from "../components/Button"
import TestRenderer from "react-test-renderer"

const test = TestRenderer.create(
  <Button label="Button" backgroundColor="#fff" size="medium" />
)

expect(test.root.findByProps({ label: "Button" }).childern).toEqual(["Button"])
