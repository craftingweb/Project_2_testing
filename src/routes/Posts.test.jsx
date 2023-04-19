import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import Posts from "./Posts";

test("Sets up initial state state with actions", () => {
  const store = setupStore();
  store.dispatch(fetchPosts());

  const { getByText } = renderWithProviders(<Posts />, { store });
});

test("fetches & receives a post after clicking the fetch user button", async () => {
  renderWithProviders(<Posts />);

  expect(screen.getByText(/no posts/i)).toBeInTheDocument();
  expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();

  expect(fireEvent.load(screen.findByRole("h1").toBeInTheDocument()));

  expect(screen.queryByText(/no posts/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
});
