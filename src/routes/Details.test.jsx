import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import Details from "./Details";

test("Sets up initial state state with actions", () => {
  const store = setupStore();
  store.dispatch(fetchPosts());

  const { getByText } = renderWithProviders(<Details />, { store });
});

test("fetches & receives a post after clicking the fetch user button", async () => {
  renderWithProviders(<Details />);

  expect(screen.getByText(/post not found/i)).toBeInTheDocument();
  expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();

  expect(fireEvent.load(screen.findByRole("h1").toBeInTheDocument()));

  expect(screen.queryByText(/post not found/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
});
