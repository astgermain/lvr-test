import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Search, {Hit} from "./Search";
import * as algoliasearch from "algoliasearch";
jest.mock("react-instantsearch", () => ({
  InstantSearch: ({ children }) => <div>{children}</div>,
  SearchBox: () => "Search Box",
  Hits: () => 'Hits',
}));

jest.mock("algoliasearch");

describe("Test search component", () => {
  it("Renders correctly", async () => {
    const { container } = render(<Search />);
    expect(container).toBeTruthy();
  });
});
