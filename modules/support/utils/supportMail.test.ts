import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { contactInfo } from "@/content/text/contact";
import { buildSupportMailto } from "./supportMail";

const parse = (link: string) => {
  const url = new URL(link);
  return { to: url.pathname, subject: url.searchParams.get("subject"), body: url.searchParams.get("body") };
};

describe("buildSupportMailto", () => {
  it("addresses the owner and names the plan in the subject and body", () => {
    const { to, subject, body } = parse(buildSupportMailto("Full support"));
    assert.equal(to, contactInfo.email);
    assert.equal(subject, "Support request: Full support");
    assert.match(body ?? "", /Full support/);
    assert.match(body ?? "", /Degree level/);
  });

  it("works without a plan for a general question", () => {
    const { subject, body } = parse(buildSupportMailto());
    assert.equal(subject, "Support request");
    assert.match(body ?? "", /not sure yet/);
  });
});
