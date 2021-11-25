import { extractSubreddit } from "../../utils/extractSubreddit";

describe("extractSubreddit", () => {
  it("should return the subreddit from an array", () => {
    const data = [
      {
        subreddit: "reactjs",
      },
      {
        subreddit: "reactjs",
      },
      {
        subreddit: "javascript",
      },
      {
        subreddit: "nosleep",
      },
    ];
    const expected = ["reactjs", "javascript", "nosleep"];
    const actual = extractSubreddit(data);
    expect(actual).toEqual(expected);
  });
});
