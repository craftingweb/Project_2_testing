import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Add from "./Add.jsx";

test("Add", () => {
  it("should show user a message if server is not running", async () => {
    render(<Add />);
    expect(screen.getByRole("div").classList.contains("hidden"));
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("div").classList.contains("block"));
    expect(screen.getByRole("div").textContent === "Server is not responding");
  });

  it("should enable user to add new blog post with title and content", async () => {
    render(<Add />);
    const element = screen.getByRole("input");
    expect(userEvent.type.length > 0);
    expect(element.toBeInTheDocument());
  });
});
