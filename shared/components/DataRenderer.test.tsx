import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { ApiError } from "@/shared/api/errors";
import { DataRenderer } from "./DataRenderer";

const render = (props: { data?: string[]; isPending?: boolean; error?: unknown }) =>
  renderToStaticMarkup(
    <DataRenderer data={props.data} isPending={props.isPending ?? false} error={props.error} emptyTitle="Nothing here">
      {(items) => <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>}
    </DataRenderer>
  );

describe("DataRenderer", () => {
  it("shows the skeleton while loading", () => assert.match(render({ isPending: true }), /aria-busy="true"/));
  it("shows the error with a readable message", () => assert.match(render({ error: new ApiError("http", "x", 500) }), /server had a problem/));
  it("shows the empty state for an empty list", () => assert.match(render({ data: [] }), /Nothing here/));
  it("shows the content when there is data", () => assert.match(render({ data: ["a", "b"] }), /<li>a<\/li><li>b<\/li>/));
  it("keeps showing data when a background refresh fails", () => assert.match(render({ data: ["a"], error: new ApiError("network", "x") }), /<li>a<\/li>/));
});
